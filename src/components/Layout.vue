<script setup lang="ts">
import Navbar from './Navbar.vue';
</script>

<template>
  <Navbar />

  <main class="flex flex-col items-center min-h-dvh 
    py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 
    px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20 
    max-w-7xl mx-auto">
    <slot name="content" />
  </main>
</template>

<style scoped></style>
