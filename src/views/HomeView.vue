<script setup lang="ts">
import { ref } from 'vue';
import { useGlobalStore } from '../stores/global';

const globalStore = useGlobalStore();
</script>

<template>
  <main class="p-4">
    <h1 class="text-3xl font-bold mb-4">Seletor CI-CD ok</h1>
    <button @click="globalStore.toggleTheme" class="btn btn-neutral">
      Tema: {{ globalStore.theme }}
    </button>
  </main>
</template>
