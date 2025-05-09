<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
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

// 🧩 Dropdown Control
const openFilterId = ref<string | null>(null);
const dropdownPosition = ref<{ top: number; left: number }>({ top: 0, left: 0 });

function updateDropdownPosition() {
  if (!openFilterId.value) return;

  const button = document.querySelector(`[data-filter-id="${openFilterId.value}"]`) as HTMLElement;
  if (button) {
    const rect = button.getBoundingClientRect();
    dropdownPosition.value = {
      top: rect.bottom, // Remova window.scrollY
      left: rect.left,  // Remova window.scrollX
    };
  }
}


function openDropdown(filterId: string, event: MouseEvent) {
  if (openFilterId.value === filterId) {
    openFilterId.value = null;
    return;
  }

  openFilterId.value = filterId;
  nextTick(() => {
    updateDropdownPosition();
  });
}

function closeDropdown() {
  openFilterId.value = null;
}

// 🛡️ Fechar dropdown ao clicar fora
function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('.filter-button') && !target.closest('.filter-dropdown')) {
    closeDropdown();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('scroll', updateDropdownPosition);
  window.addEventListener('resize', updateDropdownPosition);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', updateDropdownPosition);
  window.removeEventListener('resize', updateDropdownPosition);
});
</script>


<template>
  <div class="overflow-x-auto z-1 pb-2">
    <div class="flex gap-2 w-max px-2">
      <!-- Filtros -->
      <div
        v-for="filter in filters"
        :key="filter.id"
        class="pb-2 relative z-10"
      >
        <button
          tabindex="0"
          :data-filter-id="filter.id"
          class="filter-button btn btn-sm rounded-full border-0 transition focus-visible:outline-none focus-visible:ring-2 whitespace-nowrap"
          :class="selectedFilters[filter.id]?.length
            ? 'bg-brand text-white hover:bg-brand/90 focus-visible:ring-brand'
            : 'bg-primary text-gray-200 hover:bg-primary/80 focus-visible:ring-primary'"
          @click="openDropdown(filter.id, $event)"
        >
          <span class="flex items-center gap-1">
            {{ filter.name }}
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>

        <!-- Portal para Dropdown -->
        <Teleport to="body">
          <Transition name="slide-fade">
            <ul
              v-if="openFilterId === filter.id"
              class="filter-dropdown fixed z-[9999] menu p-2 shadow bg-base-100 rounded-box w-52 "
              :style="{ top: dropdownPosition.top + 'px', left: dropdownPosition.left + 'px' }"
            >
              <li
                v-for="item in filter.items"
                :key="item.id"
              >
                <button
                  @click="selectFilter(filter.id, item.id)"
                  class="btn btn-ghost justify-start w-full text-left  text-color"
                  :class="selectedFilters[filter.id]?.includes(item.id) ? 'shadow bg-gray-200 ' : ''"
                >
                  {{ item.name }}
                </button>
              </li>
            </ul>
          </Transition>
        </Teleport>
      </div>

      <!-- Redefinir todos -->
      <button
        class="btn btn-sm rounded-full border-0 bg-red-500 text-gray-200 hover:bg-red-600 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
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

/* Nova animação Slide Fade */
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}



</style>
