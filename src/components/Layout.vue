<script setup lang="ts">
import features from '../data/features';
import categories from '../data/categories';

import Categories from './Categories.vue';
import Features from './Features.vue';
</script>

<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />

    <main class="drawer-content flex flex-col items-center justify-center">
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden"> Open drawer </label>
      <slot name="content" />
    </main>

    <div class="drawer-side">
      <aside class="bg-base-200 text-base-content min-h-full w-80 p-4">
        <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>

        <input type="text" placeholder="Pesquisar..." class="input" />

        <div class="flex flex-col gap-4">
          <Categories :items="categories" />
          <Features
            v-for="feature in features"
            :key="feature.id"
            :title="feature.title"
            :items="feature.items"
          />
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped></style>
