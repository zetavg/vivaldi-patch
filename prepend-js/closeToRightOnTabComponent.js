const closeToRightOnTabComponent = ({ supr, comp }) => {
  const tab = comp.props.e.data.tab
  if (tab.subtab) { // if tab is subtab
    let inStackAfterActivePage
    for (const page of tab.parentTab.pages) {
      if (inStackAfterActivePage) {
        inStackAfterActivePage.push(page)
      } else if (page.id === tab.page.id) {
        inStackAfterActivePage = []
      }
    }

    windowUtils.closePage(inStackAfterActivePage)
  } else {
    supr()
  }
}
