import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore(
  'global',
  () => {
    const html = document.querySelector('html');
    const theme = ref('light');

    const toggleTheme = () => {
      if (!html) return;
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', theme.value);
    };

    const loadTheme = () => {
      if (!html) return;
      html.setAttribute('data-theme', theme.value);
    };

    return { theme, toggleTheme, loadTheme };
  },
  {
    persist: {
      pick: ['theme'],
      storage: localStorage,
    },
  },
);
