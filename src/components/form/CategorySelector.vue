<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Category } from '@/types';
import { categories } from '@/data/categories';
import { useI18n } from 'vue-i18n';

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function updateCategory(value: string) {
  emit('update:modelValue', value);
}

// Responsividade
const windowWidth = ref(window.innerWidth);
const updateWindowWidth = () => (windowWidth.value = window.innerWidth);

onMounted(() => window.addEventListener('resize', updateWindowWidth));
onUnmounted(() => window.removeEventListener('resize', updateWindowWidth));

const { t } = useI18n();

// Label adaptável internacionalizado (name/short/icon)
const getCategoryLabel = (category: Category) => {
  if (windowWidth.value > 850) return t('category.' + category.id + '.name');
  return t('category.' + category.id + '.short');
};
</script>

<template>
  <div class="flex justify-center">
    <div v-if="windowWidth > 430" class="inline-flex rounded-full overflow-hidden border border-base-content/30">
      <label
        v-for="category in categories"
        :key="category.id"
        class="cursor-pointer px-4 text-sm transition-colors duration-200 border-r border-base-content/20 py-2 font-medium last:border-r-0 flex items-center justify-center"
        :class="[
          modelValue === category.id
            ? 'bg-[var(--color-selected-radio)] text-gray-100'
            : 'bg-base-100 text-base-content hover:bg-base-content/10'
        ]"
      >
        <input
          type="radio"
          class="hidden"
          :value="category.id"
          :checked="modelValue === category.id"
          @change="updateCategory(category.id)"
        />
        {{ getCategoryLabel(category) }}
      </label>
    </div>
    <div v-else class="flex flex-wrap justify-center gap-2">
      <button
        v-for="category in categories"
        :key="category.id"
        class="px-3 py-1 text-sm rounded-full border transition-colors duration-200 whitespace-nowrap"
        :class="modelValue === category.id
          ? 'bg-[var(--color-selected-radio)] text-gray-100 border-transparent'
          : 'bg-base-100 text-base-content border-base-content/30 hover:bg-base-content/10'"
        @click="updateCategory(category.id)"
      >
        {{ getCategoryLabel(category) }}
      </button>
    </div>
  </div>
</template>
