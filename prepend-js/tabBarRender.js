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
      const { SubTabStrip } = getComponents()
      return createElement(SubTabStrip, { activeTab })
    })(),
  )
}

let components
const getComponents = () => {
  if (components) return components

  class SubTabStrip extends React.Component {
    constructor(props) {
      super(props)

      this.state = this.getState(props)
    }

    // getState(props) {
    //   const containerPadding = 0
    //   const maxWidth = window.innerWidth

    //   return {
    //     containerPadding,
    //     maxWidth,
    //   }
    // }

    getState(props) {
      const { activeTab } = props || this.props
      let activeTabElemBoundingLeft = 0
      try {
        const activeTabElem = document.getElementById(`tab-${activeTab.id}`)
        activeTabElemBoundingLeft = parseFloat(activeTabElem.parentElement.style.left)
      } catch (e) { console.error(e) }
      const windowWidth = window.innerWidth
      let maxWidth = windowWidth - activeTabElemBoundingLeft + 4
      const estWidth = activeTab.pages.size * 160

      if (estWidth > maxWidth) maxWidth = estWidth
      if (maxWidth > windowWidth) maxWidth = windowWidth
      const containerPadding = windowWidth - maxWidth

      return {
        containerPadding,
        maxWidth,
      }
    }

    setUpdateTimers() {
      clearTimeout(this.updateTimer1)
      clearTimeout(this.updateTimer2)
      clearTimeout(this.updateTimer3)
      clearTimeout(this.updateTimer4)

      const update = () => {
        this.setState(this.getState())
      }

      this.updateTimer1 = setTimeout(update, 200)
      this.updateTimer2 = setTimeout(update, 600)
      this.updateTimer3 = setTimeout(update, 900)
      this.updateTimer4 = setTimeout(update, 1200)
    }

    render() {
      const { activeTab } = this.props
      this.state = this.getState()
      const { containerPadding, maxWidth } = this.state

      this.setUpdateTimers()

      return React.createElement(
        'div',
        {
          key: activeTab.id,
          id: 'subtabs-container',
          style: {
            paddingLeft: containerPadding,
          },
        },

        React.createElement(TabStripComponent, {
          ...tabStripComponentProps,
          // maxWidth: window.innerWidth + 4,
          maxWidth,
          tabs: activeTab.pages.map(p => new TabDataClass({
            page: p.setIn(['extData', 'group'], null),
            id: p.id,
            subtab: true,
            parentTab: activeTab,
          })),
        }),
      )
    }
  }

  components = {
    SubTabStrip,
  }
  return components
}
