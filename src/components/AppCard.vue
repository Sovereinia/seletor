<script setup lang="ts">
import { getFilterTitle, sliceText } from '../utils/global';

defineProps<{
  name: string;
  description: string;
  bannerSrc: string;
  bannerAlt: string;
  filters: string[];
}>();
</script>

<template>
  <article class="card bg-primary w-full shadow-lg rounded-xl overflow-hidden">
    <figure class="p-4">
      <img :src="bannerSrc" :alt="bannerAlt" class="rounded-xl" />
    </figure>
    <div class="card-body bg-secondary rounded-t-xl">
      <h2 class="card-title text-2xl text-base-100">{{ name }}</h2>
      <p class="text-base-100">
        {{ sliceText(description, 220) }}
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
        <div
          v-for="filter in filters.slice(0, 6)"
          :key="filter"
          class="badge bg-brand border-0 rounded-full text-gray-200"
        >
          {{ getFilterTitle(filter) }}
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
