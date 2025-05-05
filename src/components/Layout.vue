<script setup lang="ts">
import features from '../data/features';
import categories from '../data/categories';

import Categories from './Categories.vue';
import Features from './Features.vue';
import Navbar from './Navbar.vue';
</script>

<template>
  <Navbar />

  <main class="flex flex-col items-center min-h-dvh py-10 px-8 md:px-20 max-w-7xl mx-auto">
    <slot name="content" />
  </main>
</template>

<style scoped></style>
