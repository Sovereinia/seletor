<script setup lang="ts">
import { getFilterTitle, sliceText } from '../utils/global';

defineProps<{
  name: string;
  description: string;
  bannerSrc: string;
  bannerAlt: string;
  filters: Record<string, string[]>;
}>();
</script>

<template>
  <article class="card bg-primary w-full shadow-lg rounded-xl overflow-hidden">
    <figure class="p-4 h-64">
      <img :src="bannerSrc" :alt="bannerAlt" class="rounded-xl" />
    </figure>
    <div class="card-body bg-secondary rounded-t-xl">
      <h2 class="card-title text-2xl text-base-100">{{ name }}</h2>
      <p class="text-base-100">
        {{ sliceText(description, 220) }}
      </p>
      <div class="flex flex-wrap gap-2 mt-4">
        <div
          v-for="(values, key) in filters"
          :key="key"
          class="flex flex-wrap gap-1"
        >
          <div
            v-for="(value, index) in values"
            :key="`${key}-${value}`"
            class="badge bg-brand border-0 rounded-full text-gray-200"
          >
            {{ getFilterTitle(value) }}
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
