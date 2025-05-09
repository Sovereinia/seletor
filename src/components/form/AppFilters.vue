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
    // Remove item if already selected (toggle off)
    selectedFilters.value[filterId] = current.filter(id => id !== itemId);

    if (selectedFilters.value[filterId].length === 0) {
      delete selectedFilters.value[filterId]; // Clean up empty arrays
    }
  } else {
    // Add item if not present (toggle on)
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
  <div class="flex flex-wrap gap-2 justify-center">
    <!-- Filtros principais -->
    <div v-for="filter in filters" :key="filter.id" class="dropdown">
      <button
        tabindex="0"
        :class="[
          'btn btn-sm rounded-full border-0 transition focus-visible:outline-none focus-visible:ring-2',
          selectedFilters[filter.id]?.length
            ? 'bg-brand text-white hover:bg-brand/90 focus-visible:ring-brand'
            : 'bg-primary text-base-100 hover:bg-primary/80 focus-visible:ring-primary'
        ]"
        >
        <span class="flex items-center gap-1">
          <!-- Exibe o nome do filtro ou o valor selecionado -->
          {{ selectedFilters[filter.id] && selectedFilters[filter.id].length > 0
            ? selectedFilters[filter.id].map(id => filter.items.find(i => i.id === id)?.name).join(', ')
            : filter.name
          }}

          <!-- Exibe o ícone de setinha -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <!-- Botão de limpar filtro fora do botão de select -->
      <button
        v-if="selectedFilters[filter.id] && selectedFilters[filter.id].length > 0"
        @click.stop="clearFilter(filter.id, $event)"
        class="ml-1 text-xs text-red-500 hover:text-red-700 focus:outline-none"
        aria-label="Limpar filtro"
      >
        ✕
      </button>

      <!-- Dropdown com opções -->
      <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
        <li v-for="item in filter.items" :key="item.id">
          <button
            @click="selectFilter(filter.id, item.id)"
            class="btn btn-ghost justify-start"
          >
            {{ item.name }}
          </button>
        </li>
      </ul>
    </div>

    <!-- Botão de redefinir todos -->
    <button
      class="btn btn-sm rounded-full border-0 bg-primary text-base-100 hover:bg-red-500 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      @click="resetFilters"
    >
      Redefinir
    </button>
  </div>
</template>

<style scoped></style>
