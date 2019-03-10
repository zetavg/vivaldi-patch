const tabBarRender = ({
  originalRender,
  tabs,
  createElement,
}) => {
  const activeTab = tabs.find(t => t.page.active)

  return createElement(
    'div',
    {
      id: 'tabs-container-container',
    },
    originalRender(),
    activeTab && activeTab.type === 'group' && (() => {
      const activeTabElem = document.querySelector(`#tab-${activeTab.id}`)
      const activeTabElemBoundingLeft = activeTabElem ? activeTabElem.getBoundingClientRect().left : 0
      const windowWidth = window.innerWidth
      let maxWidth = activeTabElem ? windowWidth - activeTabElemBoundingLeft + 4 : window.innerWidth + 4
      const estWidth = activeTab.pages.size * 160

      if (estWidth > maxWidth) maxWidth = estWidth
      if (maxWidth > windowWidth) maxWidth = windowWidth
      const containerPadding = windowWidth - maxWidth

      // const windowWidth = window.innerWidth
      // const containerPadding = 0
      // const maxWidth = windowWidth

      return createElement(
        'div',
        {
          key: activeTab.id,
          id: 'subtabs-container',
          style: {
            paddingLeft: containerPadding,
          },
        },

        createElement(TabStripComponent, {
          ...tabStripComponentProps,
          // maxWidth: window.innerWidth + 4,
          maxWidth,
          tabs: activeTab.pages.map(p => new TabDataClass({
            page: p.setIn(['extData', 'group'], null),
            id: p.id,
            subtab: true,
          })),
        }),

        // createElement(
        //   'pre',
        //   { className: 'debug-info', style: { height: '100px', overflow: 'scroll' } },
        //   JSON.stringify({ data: activeTab.pages.map(p => ({ title: p.title, active: p.active })) }, null, 2),
        // ),
      )
    })(),
  )
}
