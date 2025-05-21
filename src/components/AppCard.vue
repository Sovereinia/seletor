<script setup lang="ts">
import { sliceText } from '../utils/global';
import { alternativeIcons } from '@/data/alternatives';

defineProps<{
  name: string;
  description: string;
  bannerSrc: string;
  bannerAlt: string;
  alternatives?: string[];
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
      <div v-if="alternatives?.length" class="mt-4">
      
      <p class="text-gray-400 text-sm mb-2">Alternativas:</p>
      <div class="flex gap-2">
        <img
          v-for="(alt, index) in alternatives.slice(0, 3)"
          :key="alt"
          :src="alternativeIcons[alt] || '/alternatives/default.png'"
          :alt="alt"
          class="w-8 h-8 rounded-full object-contain border border-gray-500"
          :title="alt"
        />
      </div>
    </div>
    </div>
  </article>
</template>

<style scoped></style>
