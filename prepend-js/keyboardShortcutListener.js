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
    case 'Shift+Meta+J': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.openPrevTopLevelPage ? window.openPrevTopLevelPage() : console.warn('window.openPrevTopLevelPage is not set')
      break
    }
    case 'Shift+Meta+K': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.openNextTopLevelPage ? window.openNextTopLevelPage() : console.warn('window.openNextTopLevelPage is not set')
      break
    }
    case 'Alt+Meta+J': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.movePagePrev ? window.movePagePrev() : console.warn('window.movePagePrev is not set')
      break
    }
    case 'Alt+Meta+K': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.movePageNext ? window.movePageNext() : console.warn('window.movePageNext is not set')
      break
    }
    case 'Shift+Alt+Meta+J': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.movePageTopLevelPrev ? window.movePageTopLevelPrev() : console.warn('window.movePageTopLevelPrev is not set')
      break
    }
    case 'Shift+Alt+Meta+K': {
      const b = document.getElementById('browser')
      if (!(b && b.classList.contains('hasfocus'))) break
      window.movePageTopLevelNext ? window.movePageTopLevelNext() : console.warn('window.movePageTopLevelNext is not set')
      break
    }
    case 'Alt+Meta+1':
      windowUtils.untilePages(Immutable.List([getActivePage()]))
      break
    case 'Alt+Meta+2':
      windowUtils.tilePages(Immutable.List([getActivePage(), getNextPage().page]))
      break
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
