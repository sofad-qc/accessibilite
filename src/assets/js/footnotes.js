// src/assets/js/footnotes.js

export function initFootnotes() {
  /* ===============================
     Clic sur un appel de note
     =============================== */
  document.addEventListener('click', (event) => {
    const refLink = event.target.closest('.sofad-ndb-link')
    if (!refLink) return

    const refId = refLink.id
    const note = document.querySelector(refLink.getAttribute('href'))
    if (!note) return

    const li = note.closest('li')
    const returnLink = li.querySelector('.fn-rtn a')

    if (returnLink) {
      returnLink.setAttribute('href', '#' + refId)
    }

    if (!note.hasAttribute('tabindex')) {
      note.setAttribute('tabindex', '-1')
    }

    setTimeout(() => note.focus(), 0)
  })

  /* ===============================
     Clic sur un lien de retour
     =============================== */
  document.addEventListener('click', (event) => {
    const returnLink = event.target.closest('.fn-rtn a')
    if (!returnLink) return

    const targetId = returnLink.getAttribute('href').substring(1)
    const targetLink = document.getElementById(targetId)
    if (!targetLink) return

    const sup = targetLink.closest('sup')
    if (!sup) return

    sup.setAttribute('tabindex', '-1')
    targetLink.classList.add('sofad-ndb-focus')

    setTimeout(() => targetLink.focus(), 0)

    targetLink.dataset.monitorBlur = 'true'
  })

  /* ===============================
     Nettoyage après blur
     =============================== */
  document.addEventListener(
    'blur',
    (event) => {
      const link = event.target
      if (!link.classList?.contains('sofad-ndb-link')) return

      if (link.dataset.monitorBlur === 'true') {
        const sup = link.closest('sup')
        if (sup) sup.removeAttribute('tabindex')

        link.classList.remove('sofad-ndb-focus')
        delete link.dataset.monitorBlur
      }
    },
    true,
  )
}
