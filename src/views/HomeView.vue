<script setup lang="ts">
import AppCard from '@/components/AppCard.vue';
import apps from '../data/apps';
</script>

<template>
  <header>
    <h1 class="text-3xl font-bold text-primary text-center mb-4">Aplicativos descentralizados</h1>
    <p class="text-center text-base mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id minestie urna, id minestie
      mi. Ut non imperdiet ante, eget condimentum felis. Mauris aliquam pretium fringilla. Ut id
      tortor eget nibh posuere maximus.
    </p>
  </header>

  <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <AppCard
      v-for="(app, index) in apps"
      :key="app.name + index"
      :name="app.name"
      :description="app.description"
      :bannerSrc="app.banner.src"
      :bannerAlt="app.banner.alt"
      :filters="app.filters"
    />
  </section>
</template>
