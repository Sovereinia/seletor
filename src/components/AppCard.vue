<script setup lang="ts">
import { sliceText } from '../utils/global';
import { getAlternativeIcon } from '@/utils/global.ts';
import type { App } from '@/types';
import { getProtocolInfo } from '@/utils/global.ts';

const props = defineProps<{
  app: App;
}>();

const base = import.meta.env.BASE_URL;

const emit = defineEmits(['abrir']);

function abrirModal() {
  //console.log('📦 Dados enviados para o modal:', props.app);
  emit('abrir', props.app);
}

</script>

<template>
  <article
    @click="abrirModal"

    class="card bg-[var(--color-card-primary)] w-full shadow-lg rounded-3xl overflow-hidden transform transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl"
  >
    <figure class="p-10 h-64">
      <img
        :src="app.banner.src"
        :alt="app.banner.alt"
        class="rounded-xl w-full h-full object-contain" 
      />
    </figure>
    <div class="card-body bg-[var(--color-card-secondary)] rounded-t-x1">

      <div class="flex items-baseline gap-2">
      <h2 class="card-title text-2xl text-gray-200">{{ app.name }}</h2>
        <div class="flex flex-col items-end gap-1 max-h-14 overflow-hidden ml-auto">
          <img
            v-for="proto in app.protocol || []"
            :key="proto"
            :src="getProtocolInfo(proto)?.src"
            :alt="getProtocolInfo(proto)?.alt"
            class="h-5 object-contain"
            :title="proto"
          />
        </div>
      </div>

      <p class="text-gray-200">
        {{ sliceText(app.description, 220) }}
      </p>
      <div v-if="app.alternatives?.length" class="mt-4">
      
      <div class="flex gap-2 justify-end">
        <img
          v-for="(alt, index) in app.alternatives.slice(0, 3)"
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
