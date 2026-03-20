import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/HomePage.vue'
import Ressources from '@/views/RessourcesPage.vue'
import Footnotes from '@/views/FootNotesPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      breadcrumb: 'Accueil',
    },
  },
  {
    path: '/ressources',
    name: 'ressources',
    component: Ressources,
    meta: {
      breadcrumb: 'Ressources',
    },
  },
  {
    path: '/footnotes',
    name: 'footnotes',
    component: Footnotes,
    meta: {
      breadcrumb: 'Notes de bas de page',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
