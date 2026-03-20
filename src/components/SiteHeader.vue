<script setup>
import '/src/assets/js/dropdown.js'
import logo from '/src/assets/images/logo_SOFAD_horizontal_FR_signature.svg'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="container-fluid">
      <!-- Brand -->

      <RouterLink class="navbar-brand" to="/">
        <img :src="logo" alt="Accessibilité — retour à l’accueil" class="site-logo" />
      </RouterLink>

      <!-- Toggle mobile -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Ouvrir le menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" id="mainNavbar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/ressources"> Ressources </RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="resourcesDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Exemples
            </a>

            <ul class="dropdown-menu" aria-labelledby="resourcesDropdown">
              <li>
                <RouterLink class="dropdown-item" to="/footnotes">
                  Notes de bas de page
                </RouterLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand img.site-logo {
  height: 40px; /* ✅ OBLIGATOIRE */
  width: auto;
  display: block;
}
</style>
