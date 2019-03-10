window.pageIndex = {
  array: [],
  object: {},
  pageStore: null,
}

const getPageIndex = (pageStore) => {
  const array = pageStore.getTabs()
    .map(t => (t.type === 'group' ? t.pages.toArray() : [t.page]))
    .toArray()
    .flat()
    .map((p, i) => ({ page: p, index: i, id: p.id }))

  const object = array.reduce((obj, p) => Object.assign(obj, { [p.id]: p }), {})
  return { array, object, pageStore }
}

window.generatePageIndex = (pageStore) => {
  window.pageIndex = getPageIndex(pageStore)
}

window.openNextPage = () => {
  if (!window.pageIndex.pageStore) {
    console.warn('window.pageIndex.pageStore is not set')
    return
  }
  const currentPageID = window.pageIndex.pageStore.getActivePage().id
  const currentPageIndex = window.pageIndex.object[currentPageID].index
  let nextPageIndex = currentPageIndex + 1
  if (nextPageIndex >= window.pageIndex.array.length) nextPageIndex = 0
  const nextPage = window.pageIndex.array[nextPageIndex]
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  window.windowUtils.openPage(nextPage)
}

window.openPrevPage = () => {
  if (!window.pageIndex.pageStore) {
    console.warn('window.pageIndex.pageStore is not set')
    return
  }
  const currentPageID = window.pageIndex.pageStore.getActivePage().id
  const currentPageIndex = window.pageIndex.object[currentPageID].index
  let prevPageIndex = currentPageIndex - 1
  if (prevPageIndex < 0) prevPageIndex = window.pageIndex.array.length - 1
  const prevPage = window.pageIndex.array[prevPageIndex]
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  window.windowUtils.openPage(prevPage)
}
