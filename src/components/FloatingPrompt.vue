<template>
  <teleport to="body">
    <div
      v-if="visible"
      class="fixed bottom-4 right-4 z-[9999]"
    >
      <div
        class="relative bg-white/90 text-black border border-gray-200 rounded-full shadow-2xl ring-1 ring-white/20 backdrop-blur-sm px-4 py-1.5 pr-10 text-sm max-w-sm cursor-pointer hover:bg-white transition flex items-center gap-2"
        @click="goToLink($t('cta.suggestionTemplate'))"
        role="button"
      >
        <span class="flex items-center gap-1.5">
          <span class="text-base leading-none">👉</span>
          <span>{{ $t('cta.suggestApp') }}</span>
        </span>
        <img src="/github.svg" alt="GitHub" class="w-4 h-4 ml" />
        <button
          @click.stop.prevent="dismiss"
          class="absolute text-xl right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 text-black hover:text-black transition text-md z-10"
          aria-label="Fechar"
        >×</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const visible = ref(false)
const { t } = useI18n()

function dismiss() {
  visible.value = false
}

function goToLink(template) {
  window.open(`https://github.com/sovereinia/guia/issues/new?template=${template}`, '_blank')
}

onMounted(() => {
  setTimeout(() => {
    visible.value = true
  }, 10000)
})
</script>

<style scoped>
button {
  line-height: 1;
}
</style>
