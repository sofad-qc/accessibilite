document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown')
  if (!dropdown) return

  const toggle = dropdown.querySelector('.dropdown-toggle')

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true'
    toggle.setAttribute('aria-expanded', String(!expanded))
    dropdown.classList.toggle('is-open', !expanded)
  })

  // Fermer avec Échap
  dropdown.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      toggle.setAttribute('aria-expanded', 'false')
      dropdown.classList.remove('is-open')
      toggle.focus()
    }
  })

  // Fermer au clic extérieur
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      toggle.setAttribute('aria-expanded', 'false')
      dropdown.classList.remove('is-open')
    }
  })
})
