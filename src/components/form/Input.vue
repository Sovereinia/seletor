<script setup lang="ts">
withDefaults(
  defineProps<{
    type:
      | 'date'
      | 'datetime-local'
      | 'email'
      | 'file'
      | 'hidden'
      | 'month'
      | 'number'
      | 'password'
      | 'search'
      | 'tel'
      | 'text'
      | 'time'
      | 'url'
      | 'week';
    placeholder: string;
  }>(),
  {
    type: 'text',
  },
);
</script>

<template>
  <input :type="type" :placeholder="placeholder" class="input" />
</template>

<style scoped></style>
