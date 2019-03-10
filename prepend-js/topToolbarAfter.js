const topToolbarAfter = ({ createElement, buttonTabIndex }) => {
  return [
    createElement(
      'div',
      { className: 'toolbar toolbar-end' },
      createElement(
        'div',
        {},
        createElement('button', {
          className: 'button-toolbar toggle-extensions',
          tabIndex: buttonTabIndex,
          style: { width: '37px' },
          onClick: () => {
            const app = document.querySelector('#app')
            if (app) app.classList.toggle('show-extensions')
          },
          dangerouslySetInnerHTML: {
            __html: `
              <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" style="margin-left: -1px;" viewBox="0 0 14 14">
                <g transform="translate(1.000000, 1.000000)">
                  <circle fill="none" stroke="#585858" cx="6" cy="6" r="6"></circle>
                  <circle fill="#585858" cx="6" cy="6" r="1"></circle>
                  <circle fill="#585858" cx="3" cy="6" r="1"></circle>
                  <circle fill="#585858" cx="9" cy="6" r="1"></circle>
                </g>
              </svg>
            `,
          },
        }),
      ),
    ),
    createElement('div', {
      id: 'show-extensions-overlay',
      onClick: () => {
        const app = document.querySelector('#app')
        if (app) app.classList.toggle('show-extensions')
      },
    }),
  ]
}
