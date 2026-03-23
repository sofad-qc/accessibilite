// src/assets/js/footnotes.js

export function initFootnotes() {
  document.addEventListener('click', onDocumentClick)
  document.addEventListener('blur', onDocumentBlur, true)
}

/* ===============================
   Gestion centralisée des clics
   =============================== */
function onDocumentClick(event) {
  const refLink = event.target.closest('.sofad-ndb-link')
  if (refLink) {
    handleRefClick(refLink)
    return
  }

  const returnLink = event.target.closest('.fn-rtn a')
  if (returnLink) {
    handleReturnClick(returnLink)
  }
}

/* ===============================
   Clic sur appel de note
   =============================== */
function handleRefClick(refLink) {
  const refId = refLink.id
  if (!refId) return

  const targetId = refLink.getAttribute('href')?.slice(1)
  const note = targetId ? document.getElementById(targetId) : null
  if (!note) return

  const li = note.closest('li')
  const returnLink = li?.querySelector('.fn-rtn a')

  if (returnLink) {
    returnLink.setAttribute('href', `#${refId}`)
  }

  focusElement(note)
}

/* ===============================
   Clic sur lien de retour
   =============================== */
function handleReturnClick(returnLink) {
  const targetId = returnLink.getAttribute('href')?.slice(1)
  const targetLink = targetId ? document.getElementById(targetId) : null
  if (!targetLink) return

  targetLink.classList.add('sofad-ndb-focus')
  targetLink.dataset.monitorBlur = 'true'

  focusElement(targetLink)
}

/* ===============================
   Nettoyage après blur
   =============================== */
function onDocumentBlur(event) {
  const link = event.target

  if (!link.classList?.contains('sofad-ndb-link') || link.dataset.monitorBlur !== 'true') {
    return
  }

  link.classList.remove('sofad-ndb-focus')
  delete link.dataset.monitorBlur
}

/* ===============================
   Utilitaire focus accessible
   =============================== */
function focusElement(el) {
  if (!el.hasAttribute('tabindex')) {
    el.setAttribute('tabindex', '-1')
  }

  // requestAnimationFrame est plus propre que setTimeout(0)
  requestAnimationFrame(() => el.focus())
}
