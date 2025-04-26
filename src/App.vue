<script setup lang="ts">
import { onMounted } from 'vue';
import { useGlobalStore } from './stores/global';
import { RouterView } from 'vue-router';

import Layout from './components/Layout.vue';

const globalStore = useGlobalStore();

onMounted(() => {
  globalStore.loadTheme();
});
</script>

<template>
  <Layout>
    <template #content>
      <RouterView />
    </template>
  </Layout>
</template>

<style scoped></style>
