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
        <div class="flex flex-col md:flex-row">
          <!-- Banner -->
          <img
            :src="bannerSrc"
            :alt="bannerAlt"
            class=" md:w-1/3 p-10 h-auto object-cover rounded-l md:rounded-l-lg md:rounded-r-none rounded-b md:rounded-b-none"
          />

          <!-- Conteúdo -->
          <div class="p-6 md:w-1/2 flex flex-col">
            <h3 class="text-xl font-bold mb-2">{{ name }}</h3>
            <p class="mb-4 text-base">{{ description }}</p>

            <!-- Alternativas -->
            <div v-if="alternatives?.length" class="mt-4">
              <h4 class="text-lg font-semibold mb-2">Alternativas:</h4>
              <div class="flex gap-2">
                <img
                  v-for="(alt, index) in alternatives.slice(0, 3)"
                  :key="alt"
                  :src="getAlternativeIcon(alt)"
                  :alt="alt"
                  class="w-12 h-12 rounded-full object-contain border border-gray-500"
                  :title="alt"
                />
              </div>
            </div>

            <!-- Filters -->
            <div v-if="filters.length" class="flex gap-2 flex-wrap mt-auto">
              <span
                v-for="(filter, index) in filters"
                :key="index"
                class="badge badge-primary"
              >
                {{ filter }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- ❌ REMOVIDO: método antigo que causava bug de estado -->
      <!--
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
      -->
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
import { getAlternativeIcon } from '@/utils/global.ts';

const emit = defineEmits(['atualizarAbrir'])

const props = withDefaults(defineProps<{
  abrir: boolean
  name?: string
  description?: string
  bannerSrc?: string
  bannerAlt?: string
  filters?: string[]
  alternatives?: string[]
}>(), {
  name: '',
  description: '',
  bannerSrc: '',
  bannerAlt: '',
  filters: () => [],
  alternatives: () => []
})

const myModal = ref<HTMLDialogElement | null>(null)

watch(
  () => props.abrir,
  (newValue) => {
    if (newValue) {
      console.log('Modal aberto aqui oh!')
      openModal()
    } else {
      console.log('Modal fechado ou não aberto')
      closeModal()
    }
  }
)

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
