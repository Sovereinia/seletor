<!-- components/CategorySelector.vue -->
<script setup lang="ts">
import { ref } from 'vue';

export type CategoryOption = {
  id: string;
  name: string;
};

const props = defineProps<{
  modelValue: string;
  categories: CategoryOption[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

function updateCategory(value: string) {
  emit('update:modelValue', value);
}
</script>

<template>
  <div class="flex justify-center">
    <div class="inline-flex rounded-full overflow-hidden border border-base-content/30">
      <label
        v-for="category in categories"
        :key="category.id"
        class="px-4 py-2 font-medium text-sm cursor-pointer transition-colors duration-200
              border-r border-base-content/20 last:border-r-0"
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
        {{ category.name }}
      </label>
    </div>
  </div>
</template>
