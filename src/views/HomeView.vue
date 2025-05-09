<script setup lang="ts">
import AppSearch from '@/components/form/AppSearch.vue';
import AppCard from '@/components/AppCard.vue';
import AppFilters from '@/components/form/AppFilters.vue';
import CategorySelector from '@/components/form/CategorySelector.vue';
import { apps } from '@/data/apps';
import { categories } from '@/data/categories';
import { filtersByCategory } from '@/data/filters';
import { ref, computed, onMounted } from 'vue';
import type { CategoryId } from '@/types';
import { toRaw } from 'vue';


const searchQuery = ref('');

const selectedCategory = ref<CategoryId>('all');
const selectedFilters = ref<Record<string, string[]>>({});
const showFilters = ref(false);

// Sugestões para o autocomplete
const suggestions = apps.map(app => app.name);

// Função para filtrar apps
const filteredApps = computed(() => {
  return apps.filter(app => {
    const isSameCategory =
      selectedCategory.value === 'all' ||
      app.categories.includes(selectedCategory.value);

    const nameMatchesQuery = app.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase());

    const filterMatches = Object.entries(selectedFilters.value).every(
      ([filterId, selectedValuesRaw]) => {
        const selectedValues = selectedValuesRaw as unknown as string[];
        const appValues = app.filters?.[filterId];
        return (
          Array.isArray(appValues) &&
          selectedValues.some(value => appValues.includes(value))
        );
      }
    );

    return isSameCategory && nameMatchesQuery && filterMatches;
  });
});


// Headers dinâmicos
const headers = [
  {
    title: 'Descubra o Fediverso',
    subtitle: 'Conheça uma nova forma de usar a internet, onde você tem mais controle sobre o que compartilha, escolhe com quem se conecta e participa de redes que funcionam sem a moderação de uma entidade central.',
  },
  {
    title: 'Apps Descentralizados',
    subtitle: 'Existem alternativas às plataformas comuns, feitas por comunidades independentes. Elas priorizam a sua liberdade e permitem que você use a internet com mais segurança e menos vigilância de comportamento.',
  },
  {
    title: 'Liberdade Digital',
    subtitle: 'Use ferramentas criadas para garantir sua autonomia na internet. Com elas, você escolhe como se comunicar, o que compartilhar e com quem interagir, tudo isso sem abrir mão da sua privacidade ou ficar preso a uma só entidade.',
  },
  {
    title: 'Escolha seu App',
    subtitle: 'Cada app tem uma proposta diferente: alguns focam em redes sociais, outros em vídeos, textos ou troca de mensagens. Descubra qual se encaixa melhor com seu jeito de usar a internet e experimente novas possibilidades.',
  },
  {
    title: 'O que são apps descentralizados?',
    subtitle: 'São aplicativos que funcionam sem um único dono. Eles usam uma rede de servidores independentes, onde cada pessoa ou grupo pode participar, compartilhar conteúdo e interagir com liberdade e privacidade.',
  },
  {
    title: 'Catálogo de Plataformas',
    subtitle: 'Navegue por uma seleção de ferramentas criadas com foco na liberdade digital. Veja quais delas permitem mais controle, quais são mais populares, e encontre aquela que mais combina com o que você procura.',
  },
  {
    title: 'Ecossistema Descentralizado',
    subtitle: 'As plataformas descentralizadas se conectam de formas diferentes, mas compartilham a ideia de uma internet mais aberta, colaborativa e justa. Aqui você entende como elas funcionam e por que isso importa.',
  },
];

const title = ref('');
const subtitleBase = ref('');
const subtitleSuffix = ref('Pesquise abaixo para saber mais.');

onMounted(() => {
  const randomHeader = headers[Math.floor(Math.random() * headers.length)];
  title.value = randomHeader.title;
  subtitleBase.value = randomHeader.subtitle;
});
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold text-primary text-center mb-4">{{ title }}</h1>
    <p class="text-center text-base mb-8">
      {{ subtitleBase }} <span class="italic">{{ subtitleSuffix }}</span>
    </p>
  </header>

  <section class="w-full space-y-4">
    <AppSearch
      v-model="searchQuery"
      :suggestions="suggestions"
      @focus="showFilters = true"
      @click="showFilters = true"
    />
    <CategorySelector
      v-if="showFilters"
      v-model="selectedCategory"
      :categories="categories"
    />
    <AppFilters
      v-if="showFilters"
      :filters="filtersByCategory[selectedCategory]"
      @update:selectedFilters="selectedFilters = $event"
    />

  </section>

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
    <AppCard
      v-for="(app, index) in filteredApps"
      :key="app.name + index"
      :name="app.name"
      :description="app.description"
      :bannerSrc="app.banner.src"
      :bannerAlt="app.banner.alt"
      :filters="app.filters"
    />
  </section>
</template>
