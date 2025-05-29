<script setup lang="ts">
import { ref, type Ref, defineProps, watch, onMounted, onBeforeUnmount } from 'vue'
import { getAlternativeIcon } from '@/utils/global.ts';
import { getProtocolInfo } from '@/utils/global.ts';
import { getFaviconPath } from '@/utils/global.ts';
import type { App } from '@/types';


const { abrir, app } = defineProps<{
  abrir: boolean;
  app: Partial<App>;
}>();

const emit = defineEmits(['atualizarAbrir'])

const expandido = ref(false);

const bannerErrored = ref(false);

const myModal = ref<HTMLDialogElement | null>(null)

watch(() => abrir, (newValue) => {
  if (newValue) {
    bannerErrored.value = false;
    expandido.value = false;
    openModal();
  } else {
    closeModal();
  }
});

function openModal() {
  myModal.value?.showModal()
  //console.log('Modal aberto aqui no appModal')
}

function closeModal() {
  if (myModal.value?.open) {
    myModal.value.close();
  }

  bannerErrored.value = false;
  expandido.value = false;
  visibleAlternatives.value = {};
  favicons.value = [];

  emit('atualizarAbrir', false);
}

const visibleAlternatives = ref<Record<string, boolean>>({});

watch(
  () => app.alternatives,
  (alts) => {
    visibleAlternatives.value = {};
    (alts || []).slice(0, 3).forEach((alt) => {
      visibleAlternatives.value[alt] = true;
    });
  },
  { immediate: true }
);



function faviconSrc(url: string): { src: string; visible: Ref<boolean>; onError: () => void } {
  const src = getFaviconPath(url);
  const visible = ref(true);
  const onError = () => (visible.value = false);
  return { src, visible, onError };
}

const favicons = ref<{ 
  label: string; 
  url: string; 
  faviconSrc: string; 
  faviconVisible: Ref<boolean>; 
  faviconError: () => void;
}[]>([]);

watch(
  () => app.links,
  (newLinks) => {
    if (newLinks?.length) {
      favicons.value = newLinks.map(link => {
        const { src, visible, onError } = faviconSrc(link.url);
        return { ...link, faviconSrc: src, faviconVisible: visible, faviconError: onError };
      });
    }
  },
  { immediate: true } // roda logo de cara
);

const isMobile = ref(false);

onMounted(() => {
  isMobile.value = window.innerWidth < 640;
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  isMobile.value = window.innerWidth < 640;
}


</script>


<template>
  <div>
  <!-- ✅ Atualizado aqui: @cancel → @click.self -->
  <dialog ref="myModal" class="modal fixed inset-0 flex items-center justify-center p-2 sm:p-4 overflow-auto" @click.self="closeModal">
  <div class="modal-box w-full max-w-[880px] max-h-[calc(100vh-2rem)] overflow-y-auto rounded-xl relative bg-base-100 sm:px-6 sm:py-6 box-border">


    <!-- Botão de fechar -->
    <button
      type="button"
      class="absolute top-4 right-4 z-20 bg-base-200 hover:bg-base-300 rounded-full p-2 shadow-md"
      @click="closeModal"
      aria-label="Fechar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 stroke-current"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

      
      <!-- Banner -->
      <div class="px-6 sm:px-10 
        mb-2  sm:mb-4 
        mt-0 sm:mt-2 md:mt-4"
      >
        <img
          :src="bannerErrored ? app.banner?.src : app.modalBanner?.src || app.banner?.src"
          :alt="bannerErrored ? app.banner?.alt : app.modalBanner?.alt || app.banner?.alt"
          @error="bannerErrored = true"
          class="mx-auto w-full max-w-lg max-h-[120px] object-contain mb-2"
        />
      </div>

      <!-- Texto e conteúdos -->
      <div class="w-full flex flex-col md:px-4 lg:px-6">
        <!-- <h3 class="text-xl font-bold mb-2">{{ app.name }}</h3> -->
        <div
          class="mb-4 rounded-lg px-3 sm:px-4 py-1 sm:mt-3 text-sm sm:text-base leading-relaxed transition-all duration-300 cursor-pointer sm:cursor-default"
          :class="[
            'text-base',
            expandido ? '' : 'line-clamp-2 overflow-hidden',
            'bg-[var(--color-modal-description)]'
          ]"
          @click="(expandido = !expandido)"
        >
          {{ app.longDescription }}
        </div>


      <!-- Caracteristicas -->
        <ul v-if="app.features?.length" class="list-disc text-sm sm:text-base space-y-2 list-inside mb-4 text-sm">
          <li v-for="(feature, index) in app.features" :key="index">{{ feature }}</li>
        </ul>

        <div class="mt-2">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h4 v-if="app.protocol?.length"  class="sm:text-lg font-semibold mb-2">Protocolos e federação:</h4>
              <div class="flex flex-wrap gap-2">
                <a
                  v-for="proto in app.protocol"
                  :key="proto"
                  :href="getProtocolInfo(proto)?.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:opacity-80 transition-opacity"
                >
                  <img
                    v-if="getProtocolInfo(proto)"
                    :src="getProtocolInfo(proto)?.src"
                    :alt="getProtocolInfo(proto)?.alt"
                    class="h-6 object-contain"
                    :title="proto"
                  />
                </a>
              </div>
            </div>


            <!-- Botoes -->
            <div v-if="favicons.length" class="flex gap-2 py-2 flex-wrap justify-start">
              <a
                v-for="(link, index) in favicons"
                :key="index"
                :href="link.url"
                class="btn btn-outline btn-sm flex items-center gap-2 xs:text-sm sm:text-sm"
                target="_blank" rel="noopener noreferrer"
              >
                <!-- Favicon visível só se não deu erro -->
                <img
                  v-if="link.faviconVisible"
                  :src="link.faviconSrc"
                  class="w-4 h-4"
                  @error="link.faviconError"
                  alt=""
                />

                <!-- Bandeira BR -->
                <img
                  v-if="link.url.includes('sovereinia.org')"
                  src="/br-flag.svg"
                  alt="BR"
                  class="w-4 h-4"
                />

                {{ link.label }}
              </a>
            </div>


          </div>
        </div>

        <div v-if="app.alternatives?.length" class="mt-4">
          <h4 class="sm:text-lg font-semibold mb-2">Alternativo para:</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="(alt, index) in app.alternatives.slice(0, 3)" :key="alt">
              <img
                v-if="visibleAlternatives[alt]"
                :src="getAlternativeIcon(alt)"
                :alt="alt"
                :title="alt"
                class="w-12 h-12 rounded-full object-contain border border-gray-500"
                @error="visibleAlternatives[alt] = false"
              />
            </span>

          </div>
        </div>
    </div>
  </div>
</dialog>


  </div>
</template>

