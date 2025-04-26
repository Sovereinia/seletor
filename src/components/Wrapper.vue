<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <div class="divider text-lg font-medium">{{ title }}</div>
    <slot />
  </div>
</template>

<style scoped></style>
