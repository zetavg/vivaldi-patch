window.pageIndex = {
  array: [],
  object: {},
  topLevelArray: [],
  pageStore: null,
}

const getPageIndex = (pageStore) => {
  const array = pageStore.getTabs()
    .map((t, topLevelIndex) => (t.type === 'group' ? t.pages.toArray().map(page => ({
      page,
      topLevelIndex,
    })) : [{
      page: t.page,
      topLevelIndex,
    }]))
    .toArray()
    .flat()
    .map(({ page, topLevelIndex }, index) => ({
      page,
      index,
      topLevelIndex,
      id: page.id,
    }))

  const object = array.reduce((obj, p) => Object.assign(obj, { [p.id]: p }), {})

  const topLevelArray = pageStore.getTabs()
    .map(t => t.page)
    .toArray()
    .map((p, i) => ({ page: p, index: i, id: p.id }))

  return {
    array,
    object,
    topLevelArray,
    pageStore,
  }
}

window.generatePageIndex = (pageStore) => {
  window.pageIndex = getPageIndex(pageStore)
}

window.getActivePage = () => {
  if (!window.pageIndex.pageStore) {
    console.warn('window.pageIndex.pageStore is not set')
    return null
  }
  return window.pageIndex.pageStore.getActivePage()
}

window.getActivePageData = () => {
  const activePageID = window.getActivePage().id
  const activePageData = window.pageIndex.object[activePageID]
  if (!activePageData) {
    console.warn(`Cannot get data of active page, id: ${activePageID}`)
    return null
  }
  return activePageData
}

window.getNextPage = () => {
  const activePageIndex = (window.getActivePageData() || {}).index
  let nextPageIndex = activePageIndex + 1
  let cycled = false
  if (nextPageIndex >= window.pageIndex.array.length) {
    cycled = true
    nextPageIndex = 0
  }
  return {
    ...window.pageIndex.array[nextPageIndex],
    cycled,
  }
}

window.getPrevPage = () => {
  const activePageIndex = (window.getActivePageData() || {}).index
  let prevPageIndex = activePageIndex - 1
  let cycled = false
  if (prevPageIndex < 0) {
    cycled = true
    prevPageIndex = window.pageIndex.array.length - 1
  }
  return {
    ...window.pageIndex.array[prevPageIndex],
    cycled,
  }
}

window.getNextTopLevelPage = () => {
  const activePageIndex = (window.getActivePageData() || {}).topLevelIndex
  let nextPageIndex = activePageIndex + 1
  if (nextPageIndex >= window.pageIndex.topLevelArray.length) nextPageIndex = 0
  return window.pageIndex.topLevelArray[nextPageIndex]
}

window.getPrevTopLevelPage = () => {
  const activePageIndex = (window.getActivePageData() || {}).topLevelIndex
  let prevPageIndex = activePageIndex - 1
  if (prevPageIndex < 0) prevPageIndex = window.pageIndex.topLevelArray.length - 1
  return window.pageIndex.topLevelArray[prevPageIndex]
}

window.openNextPage = () => {
  const nextPage = window.getNextPage()
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  window.windowUtils.openPage(nextPage)
}

window.openPrevPage = () => {
  const prevPage = window.getPrevPage()
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  window.windowUtils.openPage(prevPage)
}

window.openNextTopLevelPage = () => {
  const nextPage = window.getNextTopLevelPage()
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  window.windowUtils.openPage(nextPage)
}

window.openPrevTopLevelPage = () => {
  const prevPage = window.getPrevTopLevelPage()
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  window.windowUtils.openPage(prevPage)
}

window.movePageNext = () => {
  const activePage = window.getActivePage()
  const nextPage = window.getNextPage()
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  const activePageGroupId = activePage.getIn(['extData', 'group'])

  // If in a group
  if (activePageGroupId) {
    const nextPageGroupId = nextPage.page.getIn(['extData', 'group'])

    // If not the last page of group
    if (nextPageGroupId === activePageGroupId) {
      window.windowUtils.treeMove([activePage], [], nextPage.page, true)
      return
    } else {
      // Is the last page of group, move out of group
      window.windowUtils.treeMove([activePage], [], activePage, true, 'regular')
      return
    }
  }

  // Not in a group, join the next one if not cycled
  if (!nextPage.cycled) {
    window.windowUtils.createTabStack(Immutable.List([activePage, nextPage.page]))
    return
  } else {
    window.windowUtils.treeMove([activePage], [], nextPage.page, false, 'regular')
    return
  }
}

window.movePagePrev = () => {
  const activePage = window.getActivePage()
  const prevPage = window.getPrevPage()
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }
  const activePageGroupId = activePage.getIn(['extData', 'group'])

  // If in a group
  if (activePageGroupId) {
    const prevPageGroupId = prevPage.page.getIn(['extData', 'group'])

    // If not the first page of group
    if (prevPageGroupId === activePageGroupId) {
      window.windowUtils.treeMove([activePage], [], prevPage.page)
      return
    } else {
      // Is the first page of group, move out of group
      window.windowUtils.treeMove([activePage], [], activePage, false, 'regular')
      return
    }
  }

  // Not in a group, join the prev one if not cycled
  if (!prevPage.cycled) {
    window.windowUtils.createTabStack(Immutable.List([prevPage.page, activePage]))
    return
  } else {
    window.windowUtils.treeMove([activePage], [], prevPage.page, true, 'regular')
    return
  }
}

window.movePageTopLevelNext = () => {
  if (!window.pageIndex.pageStore) {
    console.warn('window.pageIndex.pageStore is not set')
    return
  }
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }

  const activePage = window.getActivePage()

  const tabs = window.pageIndex.pageStore.getTabs()
  let activeTab, nextTab
  for (const tab of tabs) {
    if (activeTab) {
      nextTab = tab
      break
    }
    if ((tab.page && tab.page.id) === activePage.id) {
      activeTab = tab
      continue
    }
  }

  if (nextTab) {
    const afterPage = nextTab.type === 'group' ? nextTab.pages.last() : nextTab.page

    if (activeTab.type === 'group') {
      window.windowUtils.treeMove(activeTab.pages, [activeTab.id], afterPage, true, 'regular')
    } else {
      window.windowUtils.treeMove(activeTab.page, [], afterPage, true, 'regular')
    }
  } else {
    const firstTab = tabs.first()
    const firstPage = firstTab.type === 'group' ? firstTab.pages.first() : firstTab.page
    if (activeTab.type === 'group') {
      window.windowUtils.treeMove(activeTab.pages, [activeTab.id], firstPage, false, 'regular')
    } else {
      window.windowUtils.treeMove(activeTab.page, [], firstPage, false, 'regular')
    }
  }
}

window.movePageTopLevelPrev = () => {
  if (!window.pageIndex.pageStore) {
    console.warn('window.pageIndex.pageStore is not set')
    return
  }
  if (!window.windowUtils) {
    console.warn('window.windowUtils is not set')
    return
  }

  const activePage = window.getActivePage()

  const tabs = window.pageIndex.pageStore.getTabs()
  let activeTab, prevTab
  for (const tab of tabs) {
    if ((tab.page && tab.page.id) === activePage.id) {
      activeTab = tab
      break
    }
    prevTab = tab
  }

  if (prevTab) {
    const beforePage = prevTab.type === 'group' ? prevTab.pages.first() : prevTab.page

    if (activeTab.type === 'group') {
      window.windowUtils.treeMove(activeTab.pages, [activeTab.id], beforePage, false)
    } else {
      window.windowUtils.treeMove(activeTab.page, [], beforePage, false)
    }
  } else {
    const lastTab = tabs.last()
    const lastPage = lastTab.type === 'group' ? lastTab.pages.last() : lastTab.page
    if (activeTab.type === 'group') {
      window.windowUtils.treeMove(activeTab.pages, [activeTab.id], lastPage, true)
    } else {
      window.windowUtils.treeMove(activeTab.page, [], lastPage, true)
    }
  }
}

window.addToTabStackNext = () => {
  windowUtils.createTabStack(Immutable.List([getActivePage(), getNextPage().page]))
}

window.addToTabStackPrev = () => {
  windowUtils.createTabStack(Immutable.List([getActivePage(), getNextPage().page]))
}
