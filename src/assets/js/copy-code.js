document.addEventListener('click', (event) => {
  const btn = event.target.closest('.copy-btn')
  if (!btn) return

  const code = btn.nextElementSibling.querySelector('code')
  if (!code) return

  navigator.clipboard.writeText(code.innerText)

  btn.textContent = 'Copié ✓'
  setTimeout(() => {
    btn.textContent = 'Copier'
  }, 1500)
})
