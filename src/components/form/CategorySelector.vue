<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Category } from '@/types';
import { categories } from '@/data/categories';

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

// Estilos dinâmicos
const sizeClasses = computed(() => {
  if (windowWidth.value > 556) return 'px-4 text-sm';
  if (windowWidth.value > 475) return 'px-2 text-sm';
  if (windowWidth.value > 430) return 'px-2 text-xs';
  return 'px-2 text-xs'; // ícone
});

// Label adaptável
const getCategoryLabel = (category: Category) => {
  if (windowWidth.value > 850) return category.name;
  if (windowWidth.value > 430) return category.short;
  return category.icon;
};
</script>

<template>
  <div class="flex justify-center">
    <div class="inline-flex rounded-full overflow-hidden border border-base-content/30">
     <label
        v-for="category in categories"
        :key="category.id"
        class="cursor-pointer transition-colors 
        duration-200 border-r border-base-content/20 
        py-2 font-medium
        last:border-r-0 flex items-center justify-center"
        :class="[
          sizeClasses,
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
  </div>
</template>
