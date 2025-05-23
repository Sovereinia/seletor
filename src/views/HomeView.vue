<script setup lang="ts">
import AppSearch from '@/components/form/AppSearch.vue';
import AppCard from '@/components/AppCard.vue';
import CategorySelector from '@/components/form/CategorySelector.vue';
import { apps } from '@/data/apps';
import  AppModal  from '@/components/AppModal.vue';
import { categories } from '@/data/categories';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { CategoryId } from '@/types';
import { desktopHeaders, mobileHeaders } from '@/data/headers';
import type { App } from '@/types';


const modalData = ref<Partial<App>>({});

const searchQuery = ref('');

const selectedCategory = ref<CategoryId>('all');
const showFilters = ref(false);

// Sugestões para o autocomplete
const suggestions = apps.flatMap(app => app.alternatives || []);

// Função para filtrar apps
const filteredApps = computed(() => {
  return apps.filter(app => {
    const isSameCategory =
      selectedCategory.value === 'all' ||
      app.categories.includes(selectedCategory.value);

    const query = searchQuery.value.toLowerCase();
    const nameMatchesQuery =
      app.name.toLowerCase().includes(query) ||
      app.alternatives?.some(alt => alt.toLowerCase().includes(query));

    return isSameCategory && nameMatchesQuery; //&& filterMatches;
  });
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

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);

  const isMobile = window.innerWidth <= 600;
  const source = isMobile ? mobileHeaders : desktopHeaders;
  const random = source[Math.floor(Math.random() * source.length)];

  subtitleBase.value = random.subtitle;
  subtitleSuffix.value = isMobile ? '' : 'Conheça aplicativos alternativos.';
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});

function handleAbrirModal(app: App) {
  mostrarModal.value = true;
  modalData.value = app;
}
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold text-color text-center mb-4">{{ title }}</h1>
    <p class="text-center text-base mb-5">
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

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-2">
    <AppCard 
      v-for="app in filteredApps"
      :key="app.name"
      :app="app"
      @abrir="handleAbrirModal"
    />

    <AppModal
      :abrir="mostrarModal"
      :app="modalData"
      @atualizarAbrir="mostrarModal = $event"
    />

  </section>
</template>
