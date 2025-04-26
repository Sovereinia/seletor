<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="divider">{{ title }}</div>
    <slot />
  </div>
</template>

<style scoped></style>
