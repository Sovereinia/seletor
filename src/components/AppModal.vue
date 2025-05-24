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
      <div class="modal-box p-0 md:max-w-4xl">
        <form method="dialog">
          <button
            type="button"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            @click="closeModal"
          >
            ✕
          </button>
        </form>

        <!-- Layout responsivo -->
        <div class="flex flex-col">
          <!-- Banner -->
          <img
            :src="app.modalBanner?.src || app.banner?.src"
            :alt="app.modalBanner?.alt || app.banner?.alt"
            class="mx-auto max-w-md p-4 object-contain"
          />

          <!-- Conteúdo -->
          <div class="p-6 px-20 w-full flex flex-col">
            <h3 class="text-xl font-bold mb-2">{{ app.name }}</h3>
            <!-- Descrição longa -->
            <p class="mb-4 text-base whitespace-pre-line">{{ app.longDescription }}</p>

            <!-- Características -->
            <ul v-if="app.features?.length" class="list-disc list-inside mb-4 text-sm">
              <li v-for="(feature, index) in app.features" :key="index">{{ feature }}</li>
            </ul>

            <!-- Protocolos + Botões, lado a lado  -->
            <div v-if="app.protocol?.length" class="mt-6">
              <div class="flex flex-wrap items-start justify-between gap-4">

                <!-- Protocolos na esquerda -->
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

                <!-- Botões alinhados à direita -->
                <div v-if="app.links?.length" class="flex gap-2 py-4 flex-wrap justify-end">
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



            <!-- Alternativas -->
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

