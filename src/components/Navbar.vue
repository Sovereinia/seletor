<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import ThemeToggler from './ThemeToggler.vue';

const navOptions = computed(() => [
  {
    name: 'Blog',
    link: 'https://sovereinia.org/',
  },
]);
</script>

<template>
  <div class="navbar bg-base-100 px-8">
    <div class="flex-1">
      <RouterLink
        to="https://sovereinia.org/"
        class="hover:opacity-80 transition-opacity text-2xl font-bold text-primary"
      >
        Sovereinia
      </RouterLink>
    </div>
    <ul class="flex gap-4 items-center">
      <li v-for="option in navOptions">
        <RouterLink :to="option.link" class="hover:opacity-80 transition-opacity">
          {{ option.name }}
        </RouterLink>
      </li>
      <ThemeToggler />
    </ul>
  </div>
</template>

<style scoped></style>
