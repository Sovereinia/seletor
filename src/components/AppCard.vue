<script setup lang="ts">
import { sliceText } from '../utils/global';
import { alternativeIcons } from '@/data/alternatives';
import { getAlternativeIcon } from '@/utils/global.ts';

defineProps<{
  name: string;
  description: string;
  bannerSrc: string;
  bannerAlt: string;
  alternatives?: string[];
}>();

const base = import.meta.env.BASE_URL;


</script>

<template>
  <article
  @click="$emit('abrir', {name, description, bannerSrc, bannerAlt, alternatives})"
  class="card bg-[var(--color-card-primary)] w-full shadow-lg rounded-3xl overflow-hidden transform transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl"
>
    <figure class="p-10 h-64">
      <img :src="bannerSrc" :alt="bannerAlt" class="rounded-xl w-full h-full object-contain" />
    </figure>
    <div class="card-body bg-[var(--color-card-secondary)] rounded-t-x1">
      <h2 class="card-title text-2xl text-gray-200">{{ name }}</h2>
      <p class="text-gray-200">
        {{ sliceText(description, 220) }}
      </p>
      <div v-if="alternatives?.length" class="mt-4">
      
      <div class="flex gap-2 justify-end">
        <img
          v-for="(alt, index) in alternatives.slice(0, 3)"
          :key="alt"
          :src="getAlternativeIcon(alt)"
          :alt="alt"
          class="w-12 h-12 rounded-full object-contain border border-gray-500"
          :title="alt"
        />
      </div>
    </div>
    </div>
  </article>
</template>

<style scoped></style>
