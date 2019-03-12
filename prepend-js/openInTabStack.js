const openInTabStack = () => {
  if (window.placeNextTabInTabStack === true) {
    window.placeNextTabInTabStack = false
    return true
  }
  return window.lastShortcut === 'Meta+'
}
