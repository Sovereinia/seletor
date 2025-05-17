<script setup lang="ts">
import { computed } from 'vue';
import ThemeToggler from './ThemeToggler.vue';

const navOptions = computed(() => [
  {
    name: 'Blog',
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
      <ThemeToggler />
    </ul>
  </div>
</template>
