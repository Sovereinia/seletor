<script setup lang="ts">
import Navbar from './Navbar.vue';
</script>

<template>
  <Navbar />

  <main class="flex flex-col items-center min-h-dvh py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20
 max-w-7xl mx-auto">
    <slot name="content" />
  </main>
</template>

<style scoped></style>
