<script setup lang="ts">
import { computed } from 'vue';
import ThemeToggler from './ThemeToggler.vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const navOptions = computed(() => [
  {
    name: t('navigation.blog'),
    link: 'https://sovereinia.org/',
  },
]);
</script>

<template>
  <div class="navbar px-8">
    <div class="flex-1">
      <a
        href="https://sovereinia.org/"
        class="hover:opacity-80 transition-opacity text-2xl font-bold text-color"
      >
        Sovereinia
      </a>
    </div>
    <ul class="flex gap-4 items-center">
      <li v-for="option in navOptions" :key="option.link">
        <a :href="option.link" class="hover:opacity-80 transition-opacity">
          {{ option.name }}
        </a>
      </li>
      <li>
        <LanguageSwitcher />
      </li>
      <li>
        <ThemeToggler />
      </li>
    </ul>
  </div>
</template>
