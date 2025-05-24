<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { getAlternativeIcon } from '@/utils/global.ts';
import { getProtocolInfo } from '@/utils/global.ts';
import type { App } from '@/types';


const { abrir, app } = defineProps<{
  abrir: boolean;
  app: Partial<App>;
}>();

const emit = defineEmits(['atualizarAbrir'])

const myModal = ref<HTMLDialogElement | null>(null)

watch(
  () => abrir,
  (newValue) => {
    newValue ? openModal() : closeModal();
  }
);

function openModal() {
  myModal.value?.showModal()
  console.log('Modal aberto aqui no appModal')
}

function closeModal() {
  myModal.value?.close()
  emit('atualizarAbrir', false)
  console.log('Modal fechado')
}
</script>


<template>
  <div>
    <!-- ✅ Atualizado aqui: @cancel → @click.self -->
   <dialog ref="myModal" class="modal" @click.self="closeModal">
  <div class="modal-box w-full max-w-lg md:max-w-4xl h-[70vh] md:h-auto overflow-hidden md:overflow-visible rounded-xl relative bg-base-100">

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

    <!-- Conteúdo com rolagem apenas em telas pequenas -->
    <div class="flex flex-col h-full md:h-auto overflow-y-auto md:overflow-visible px-4 py-6">

      <!-- Banner -->
      <img
        :src="app.modalBanner?.src || app.banner?.src"
        :alt="app.modalBanner?.alt || app.banner?.alt"
        class="mx-auto w-full max-w-sm p-2 object-contain"
      />

      <!-- Texto e conteúdos -->
      <div class="w-full flex flex-col px-2 md:px-10">
        <h3 class="text-xl font-bold mb-2">{{ app.name }}</h3>
        <p class="mb-4 text-base text-justify">{{ app.longDescription }}</p>

        <ul v-if="app.features?.length" class="list-disc list-inside mb-4 text-sm">
          <li v-for="(feature, index) in app.features" :key="index">{{ feature }}</li>
        </ul>

        <div v-if="app.protocol?.length" class="mt-6">
          <div class="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h4 class="text-lg font-semibold mb-2">Protocolos e federação:</h4>
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

            <div v-if="app.links?.length" class="flex gap-2 py-4 flex-wrap justify-start">
              <a
                v-for="(link, index) in app.links"
                :key="index"
                :href="link.url"
                class="btn btn-outline btn-sm"
                target="_blank" rel="noopener noreferrer"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        </div>

        <div v-if="app.alternatives?.length" class="mt-4">
          <h4 class="text-lg font-semibold mb-2">Alternativo para:</h4>
          <div class="flex gap-2">
            <img
              v-for="(alt, index) in app.alternatives.slice(0, 3)"
              :key="alt"
              :src="getAlternativeIcon(alt)"
              :alt="alt"
              class="w-12 h-12 rounded-full object-contain border border-gray-500"
              :title="alt"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</dialog>


  </div>
</template>

