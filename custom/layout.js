/**
 * Layout
 *
 * Just putting things in place.
 */

setTimeout(function patchLayout() {
  const browser = document.getElementById('browser')

  if (browser) {
    const app = document.querySelector('#app')
    const main = document.querySelector('#main')
    const header = document.querySelector('#header')
    const mainToolbar = document.querySelector('#main > .toolbar')
    const tabsContainer = document.querySelector('#tabs-container-container') || document.querySelector('#tabs-container')

    try {
      // Move Header to the bottom - above all layers, to prevent other elements block click events on window icons
      main.parentNode.insertBefore(header, main.nextSibling)
    } catch (e) {
      console.error('Patch Error:', e)
    }

    try {
      // Move TabsContainer to the place that is right after MainToolbar
      mainToolbar.parentNode.insertBefore(tabsContainer, mainToolbar.nextSibling)
    } catch (e) {
      console.error('Patch Error:', e)
    }

    app.className += ' ready'
  } else {
    setTimeout(patchLayout, 300)
  }
}, 300)
