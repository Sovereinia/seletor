<script setup lang="ts">
import { sliceText } from '../utils/global';

defineProps<{
  name: string;
  description: string;
  bannerSrc: string;
  bannerAlt: string;
  filters: Record<string, string[]>;
}>();
</script>

<template>
  <article @click="$emit('abrir', {name, description, bannerSrc, bannerAlt})"
  class="card bg-primary w-full shadow-lg rounded-3xl overflow-hidden" >
    <figure class="p-10 h-64">
      <img :src="bannerSrc" :alt="bannerAlt" class="rounded-xl w-full h-full object-contain" />
    </figure>
    <div class="card-body bg-secondary rounded-t-x1">
      <h2 class="card-title text-2xl text-gray-200">{{ name }}</h2>
      <p class="text-gray-200">
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
            class="badge bg-brand border-0 rounded-full text-gray-200 px-4 py-2 text-sm leading-snug break-words"
          >
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
