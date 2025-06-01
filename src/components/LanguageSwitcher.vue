<template>
  <div class="language-switcher">
    <select v-model="currentLocale" @change="changeLanguage" class="select select-bordered w-full max-w-xs">
      <option value="pt">{{ $t('common.portuguese') }}</option>
      <option value="en">{{ $t('common.english') }}</option>
      <option value="es">{{ $t('common.spanish') }}</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const changeLanguage = () => {
  locale.value = currentLocale.value
  localStorage.setItem('user-locale', currentLocale.value)
}

// Initialize from localStorage if available
const savedLocale = localStorage.getItem('user-locale')
if (savedLocale) {
  currentLocale.value = savedLocale
  locale.value = savedLocale
}
</script>

<style scoped>
.language-switcher {
  display: inline-block;
}
</style> 