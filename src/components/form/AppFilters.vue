<script setup lang="ts">
import { ref, watch } from 'vue';
import type { FilterGroup } from '@/types';

const props = defineProps<{
  filters: FilterGroup[];
}>();

const selectedFilters = ref<Record<string, string[]>>({});

function selectFilter(filterId: string, itemId: string) {
  const current = selectedFilters.value[filterId];

  if (current?.includes(itemId)) {
    selectedFilters.value[filterId] = current.filter(id => id !== itemId);
    if (selectedFilters.value[filterId].length === 0) {
      delete selectedFilters.value[filterId];
    }
  } else {
    if (!selectedFilters.value[filterId]) {
      selectedFilters.value[filterId] = [];
    }
    selectedFilters.value[filterId].push(itemId);
  }
}

function removeFilter(filterId: string, itemId: string) {
  selectedFilters.value[filterId] = selectedFilters.value[filterId]?.filter(id => id !== itemId);
  if (selectedFilters.value[filterId]?.length === 0) {
    delete selectedFilters.value[filterId];
  }
}

function resetFilters() {
  selectedFilters.value = {};
}

function clearFilter(filterId: string, event: Event) {
  event.stopPropagation();
  delete selectedFilters.value[filterId];
}

const emit = defineEmits<{
  (e: 'update:selectedFilters', value: Record<string, string[]>): void
}>();

watch(selectedFilters, value => {
  emit('update:selectedFilters', value);
}, { deep: true });
</script>

<template>
  <div class="overflow-x-auto z-1 pb-2">
    <div class="flex gap-2 min-w-max px-2">
      <!-- Filtros -->
      <div v-for="filter in filters" :key="filter.id" class="pb-2 relative z-10 dropdown">
        <button
  tabindex="0"
  :class="[
    'btn btn-sm rounded-full border-0 transition focus-visible:outline-none focus-visible:ring-2 whitespace-nowrap',
    selectedFilters[filter.id]?.length
      ? 'bg-brand text-white hover:bg-brand/90 focus-visible:ring-brand'
      : 'bg-primary text-base-100 hover:bg-primary/80 focus-visible:ring-primary'
  ]"
>
  <span class="flex items-center gap-1">
    {{ filter.name }}
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </span>
</button>


        <!-- Dropdown com opções -->
        <ul tabindex="0" class="dropdown-content absolute z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
  <li v-for="item in filter.items" :key="item.id">
    <button
      @click="selectFilter(filter.id, item.id)"
      class="btn btn-ghost justify-start w-full text-left"
      :class="selectedFilters[filter.id]?.includes(item.id) ? 'shadow bg-gray-200 ' : ''"
    >
      {{ item.name }}
    </button>
  </li>
</ul>
      </div>

      <!-- Redefinir todos -->
      <button
        class="btn btn-sm rounded-full border-0 bg-red-500 text-white hover:bg-red-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        @click="resetFilters"
      >
        Redefinir
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Scroll horizontal suave */
::-webkit-scrollbar {
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background: rgba(100, 100, 100, 0.4);
  border-radius: 4px;
}
</style>
