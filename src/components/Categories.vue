<script setup lang="ts">
import Wrapper from './Wrapper.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps<{
  items: {
    id: string;
    label: string;
  }[];
}>();
</script>

<template>
  <Wrapper :title="t('categories.title')">
    <div class="flex flex-col gap-2">
      <label v-for="item in items" :for="item.id" class="text-base-content opacity-80">
        <input
          :id="item.id"
          :value="item.id"
          :checked="item.id === 'social_media'"
          type="radio"
          name="category"
          class="radio radio-primary mr-1"
        />
        {{ item.label }}
      </label>
    </div>
  </Wrapper>
</template>

<style scoped></style>
