<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const breadcrumbs = computed(() =>
  route.matched
    .filter((r) => r.meta?.breadcrumb && r.path !== '/')
    .map((r) => ({
      path: r.path,
      label: r.meta.breadcrumb,
    })),
)
</script>

<template>
  <nav class="breadcrumb" aria-label="Fil d’Ariane">
    <ol>
      <!-- Accueil (toujours présent) -->
      <li>
        <RouterLink to="/"> Accueil </RouterLink>
      </li>

      <!-- Autres niveaux -->
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
        <span v-if="index === breadcrumbs.length - 1" aria-current="page">
          {{ crumb.label }}
        </span>

        <RouterLink v-else :to="crumb.path">
          {{ crumb.label }}
        </RouterLink>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb {
  margin: 2em;
  ol {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    &::after {
      content: '›';
      margin-left: 0.5rem;
    }

    &:last-child::after {
      content: '';
    }
  }

  a {
    text-decoration: underline;
  }

  [aria-current='page'] {
    font-weight: 700;
  }
}
</style>
