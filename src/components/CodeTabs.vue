<script setup>
import { onMounted, watch, nextTick } from 'vue'
import Prism from 'prismjs'

// ===============================
// Thème Prism
// ===============================
import 'prismjs/themes/prism.css'

// ===============================
// Langages Prism
// ===============================
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'

// ===============================
// Toolbar Prism (OBLIGATOIRE)
// ===============================
import 'prismjs/plugins/toolbar/prism-toolbar'
import 'prismjs/plugins/toolbar/prism-toolbar.css'

// ===============================
// Bouton "Copier" FRANCISÉ
// ===============================
Prism.plugins.toolbar.registerButton('copy-fr', (env) => {
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'copy-to-clipboard-button'
  button.textContent = 'Copier'

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(env.code)
      button.textContent = 'Copié ✓'
      setTimeout(() => {
        button.textContent = 'Copier'
      }, 2000)
    } catch {
      button.textContent = 'Erreur'
    }
  })

  return button
})

// ===============================
// Props
// ===============================
const props = defineProps({
  html: { type: String, default: '' },
  css: { type: String, default: '' },
  js: { type: String, default: '' },
})

// ===============================
// Highlight Prism
// ===============================
function highlight() {
  Prism.highlightAll()
}

// ===============================
// Cycle de vie
// ===============================
onMounted(async () => {
  await nextTick()
  highlight()
})

watch(
  () => [props.html, props.css, props.js],
  async () => {
    await nextTick()
    highlight()
  },
)
</script>

<template>
  <div>
    <!-- Onglets -->
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item">
        <button
          class="nav-link active"
          data-bs-toggle="tab"
          data-bs-target="#pane-html"
          type="button"
          role="tab"
        >
          HTML
        </button>
      </li>

      <li class="nav-item" v-if="css">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#pane-css"
          type="button"
          role="tab"
        >
          CSS
        </button>
      </li>

      <li class="nav-item" v-if="js">
        <button
          class="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#pane-js"
          type="button"
          role="tab"
        >
          JavaScript
        </button>
      </li>
    </ul>

    <!-- Contenu -->
    <div class="tab-content border border-top-0 p-3">
      <div class="tab-pane fade show active" id="pane-html" role="tabpanel">
        <pre><code class="language-html">{{ html }}</code></pre>
      </div>

      <div v-if="css" class="tab-pane fade" id="pane-css" role="tabpanel">
        <pre><code class="language-css">{{ css }}</code></pre>
      </div>

      <div v-if="js" class="tab-pane fade" id="pane-js" role="tabpanel">
        <pre><code class="language-javascript">{{ js }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style scoped>
pre {
  position: relative;
  max-height: 30rem;
  overflow: auto;
  margin-bottom: 0;
}
</style>
