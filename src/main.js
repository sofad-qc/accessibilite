import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/main.scss'
import 'bootstrap'

import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import './assets/js/copy-code.js'

router.afterEach(() => {
  requestAnimationFrame(() => {
    hljs.highlightAll()
  })
})

createApp(App).use(router).mount('#app')
