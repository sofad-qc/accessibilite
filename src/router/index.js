import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/HomePage.vue'
import Footnotes from '../views/FootNotesPage.vue'
import Ressources from '../views/RessourcesPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/ressources',
      name: 'ressources',
      component: Ressources,
    },

    {
      path: '/footnotes',
      name: 'footnotes',
      component: Footnotes,
    },
  ],
})

export default router
