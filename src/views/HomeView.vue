<script setup lang="ts">
import AppSearch from '@/components/form/AppSearch.vue';
import AppCard from '@/components/AppCard.vue';
import CategorySelector from '@/components/form/CategorySelector.vue';
import AppModal from '@/components/AppModal.vue';
import { apps } from '@/data/apps';
import { categories } from '@/data/categories';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { CategoryId, App } from '@/types';
import { sortAppsByLinksThenRandom, filterApps } from '@/utils/filter';
import { useI18n } from 'vue-i18n';
import { useHeadersStore } from '@/stores/headers';
import { useRoute, useRouter } from 'vue-router';


const selectedApp = ref<Partial<App>>({});

const searchQuery = ref('');

const selectedCategory = ref<CategoryId>('all');
const showFilters = ref(false);

// Sugestões para o autocomplete
const suggestions = apps.flatMap(app => app.alternatives || []);

const orderedApps = computed(() => sortAppsByLinksThenRandom(apps));

const filteredApps = computed(() => {
  return filterApps(orderedApps.value, selectedCategory.value, searchQuery.value);
});


const title = ref('Guia de Apps');
const subtitleBase = ref('');
const subtitleSuffix = ref('');
const mostrarModal = ref(false)

const windowWidth = ref(window.innerWidth);
const updateWindowWidth = () => (windowWidth.value = window.innerWidth);

const searchPlaceholder = computed(() =>
  windowWidth.value > 600
    ? 'Procure por um app que você conhece (ex: Instagram, Google Drive...)'
    : 'WhatsApp, Google Drive...'
);
//open modal checking  if ?app= is in the URL
onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
  const appId = route.query.app;
  if (typeof appId === 'string') {
    const matchedApp = apps.find(app => app.id === appId);
    if (matchedApp) {
      selectedApp.value = matchedApp;
      abrirModal.value = true;
      router.replace({ query: { ...route.query, app: undefined } });
    }
  }
  
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

const { t } = useI18n();
const headersStore = useHeadersStore();
const route = useRoute();
const router = useRouter();

// Modal logic
const abrirModal = ref(false);

//opening the modal manually
function handleAbrirModal(app: App) {
  selectedApp.value = app;
  abrirModal.value = true;
}
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold text-color text-center mb-4">{{ title }}</h1>
    <p class="text-center text-base mb-5 px-2">
      {{ subtitleBase }} <span class="font-bold">{{ subtitleSuffix }}</span>
    </p>
  </header>

  <section class="w-full space-y-5">
    <CategorySelector
      v-if="showFilters"
      v-model="selectedCategory"
      :categories="categories"
    />
    <AppSearch
      v-model="searchQuery"
      :suggestions="suggestions"
      :placeholder="searchPlaceholder"
      @focus="showFilters = true"
      @click="showFilters = true"
    />
  </section>

  <section class="grid grid-cols-1 w-full max-w-full md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-12 mt-2">
    <AppCard 
      v-for="app in filteredApps"
      :key="app.name"
      :app="app"
      @abrir="handleAbrirModal"
    />
  </section>

  <AppModal 
    :abrir="abrirModal" 
    :app="selectedApp" 
    @atualizarAbrir="abrirModal = $event" 
  />
</template>
