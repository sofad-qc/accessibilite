<script setup>
import SiteHeader from '../src/components/SiteHeader.vue'
import SiteFooter from '../src/components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />

  <!-- Ici s’affichent les pages -->
  <RouterView />

  <SiteFooter />
</template>
