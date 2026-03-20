<script setup>
import SiteHeader from '../src/components/SiteHeader.vue'
import SiteFooter from '../src/components/SiteFooter.vue'
import Breadcrumb from '../src/components/FilArianne.vue'
</script>

<template>
  <SiteHeader />
  <Breadcrumb />
  <RouterView />
  <SiteFooter />
</template>
