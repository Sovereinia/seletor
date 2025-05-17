<template>
  <div>
    <dialog ref="myModal" class="modal" @cancel="closeModal">
      <div class="modal-box">
        <form method="dialog">
          <button
            type="button"
            class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            @click="closeModal"
          >
            ✕
          </button>
        </form>

        <!-- Banner -->
        <img :src="bannerSrc" :alt="bannerAlt" class="w-full rounded mb-4" />

        <!-- Nome -->
        <h3 class="text-lg font-bold mb-2">{{ name }}</h3>

        <!-- Descrição -->
        <p class="mb-4">{{ description }}</p>

        <!-- Filters -->
        <div v-if="filters.length" class="flex gap-2 flex-wrap">
          <span
            v-for="(filter, index) in filters"
            :key="index"
            class="badge badge-primary"
          >
            {{ filter }}
          </span>
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from 'vue'
const emit = defineEmits(['atualizarAbrir'])

const props = withDefaults(defineProps<{
  abrir: boolean
  name?: string
  description?: string
  bannerSrc?: string
  bannerAlt?: string
  filters?: string[]
}>(), {
  name: '',
  description: '',
  bannerSrc: '',
  bannerAlt: '',
  filters: () => []
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
