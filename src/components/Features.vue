<script setup lang="ts">
import Wrapper from './Wrapper.vue';

defineProps<{
  title: string;
  items: {
    id: string;
    label: string;
  }[];
}>();
</script>

<template>
  <Wrapper :title="title">
    <ul>
      <li v-for="item in items" key="item.id" class="mb-2">
        <label>
          <input type="checkbox" class="checkbox checkbox-primary mr-1" />
          {{ item.label }}
        </label>
      </li>
    </ul>
  </Wrapper>
</template>

<style scoped></style>
