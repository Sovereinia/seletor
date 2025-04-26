import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore(
  'global',
  () => {
    const html = document.querySelector('html');
    const theme = ref('light');
    const isDark = computed(() => theme.value === 'dark');

    const toggleTheme = () => {
      if (!html) return;
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', theme.value);
    };

    const loadTheme = () => {
      if (!html) return;
      html.setAttribute('data-theme', theme.value);
    };

    return { theme, isDark, toggleTheme, loadTheme };
  },
  {
    persist: {
      pick: ['theme'],
      storage: localStorage,
    },
  },
);
