<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useGlobalStore } from './stores/global';
import { useSEO } from './composables/useSEO';
import { RouterView } from 'vue-router';

import Layout from './components/Layout.vue';
import FloatingPrompt from './components/FloatingPrompt.vue';

const globalStore = useGlobalStore();
const route = useRoute();
const { updateSEO } = useSEO();

onMounted(() => {
  globalStore.loadTheme();
});

// Update SEO based on route changes
watch(
  () => route.path,
  (newPath) => {
    // Update canonical URL based on current route
    const baseUrl = 'https://sovereinia.org/guia';
    const canonicalUrl = newPath === '/' ? baseUrl + '/' : baseUrl + newPath;

    updateSEO({
      canonical: canonicalUrl,
      ogUrl: canonicalUrl
    });
  },
  { immediate: true }
);
</script>

<template>
  <Layout>
    <template #content>
      <RouterView />
    </template>
  </Layout>
  <FloatingPrompt />
</template>

<style scoped></style>
