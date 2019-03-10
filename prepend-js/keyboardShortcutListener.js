vivaldi.tabsPrivate.onKeyboardShortcut.addListener(shortcut => {
  shortcut = shortcut.replace(/[^A-Za-z0-9+]/ig, '')
  setLastShortcut(shortcut)

  switch (shortcut) {
    case 'Meta+J': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.openPrevPage ? window.openPrevPage() : console.warn('window.openPrevPage is not set')
      break
    }
    case 'Meta+K': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.openNextPage ? window.openNextPage() : console.warn('window.openNextPage is not set')
      break
    }
  }
})

const setLastShortcut = (shortcut) => {
  window.lastShortcut = shortcut
  clearTimeout(unsetLastShortcutTimeout)
  unsetLastShortcutTimeout = setTimeout(unsetLastShortcut, 5000)
}
let unsetLastShortcutTimeout
const unsetLastShortcut = () => {
  window.lastShortcut = false
}
