<script setup lang="ts">
import AppSearch from '@/components/form/AppSearch.vue';
import AppCard from '@/components/AppCard.vue';
import CategorySelector from '@/components/form/CategorySelector.vue';
import { apps } from '@/data/apps';
import AppModal from '@/components/AppModal.vue';
import { categories } from '@/data/categories';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { CategoryId } from '@/types';
import type { App } from '@/types';
import { sortAppsByLinksThenRandom, filterApps } from '@/utils/filter';
import { useI18n } from 'vue-i18n';
import { useHeadersStore } from '@/stores/headers';

const { t } = useI18n();
const headersStore = useHeadersStore();

const modalData = ref<Partial<App>>({});
const searchQuery = ref('');
const selectedCategory = ref<CategoryId>('all');
const showFilters = ref(false);

// Sugestões para o autocomplete
const suggestions = apps.flatMap(app => app.alternatives || []);

const orderedApps = computed(() => sortAppsByLinksThenRandom(apps));

const filteredApps = computed(() => {
  return filterApps(orderedApps.value, selectedCategory.value, searchQuery.value);
});

const title = computed(() => t('app.title'));
const subtitleBase = computed(() => {
  const isMobile = window.innerWidth <= 600;
  const headers = isMobile ? headersStore.mobileHeaders : headersStore.desktopHeaders;
  const randomKey = headers[Math.floor(Math.random() * headers.length)];
  return t(randomKey);
});
const subtitleSuffix = computed(() => t('app.subtitle'));
const mostrarModal = ref(false);

const windowWidth = ref(window.innerWidth);
const updateWindowWidth = () => (windowWidth.value = window.innerWidth);

const searchPlaceholder = computed(() =>
  windowWidth.value > 600
    ? t('search.placeholder.desktop')
    : t('search.placeholder.mobile')
);

onMounted(() => {
  window.addEventListener('resize', updateWindowWidth);
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

    <AppModal
      :abrir="mostrarModal"
      :app="modalData"
      @atualizarAbrir="mostrarModal = $event"
    />
  </section>
</template>
