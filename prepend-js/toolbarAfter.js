const toolbarAfter = ({ createElement }) => {
  return [
    createElement(
      'button',
      {
        className: 'button-toolbar toggle-panels',
        // TODO: tabindex?,
        style: { width: '37px' },
        onClick: () => {
          const togglePanelsElement = document.querySelector('.paneltogglefooter.button-toolbar-small')
          if (togglePanelsElement) togglePanelsElement.click()
        },
        dangerouslySetInnerHTML: {
          __html: `
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="13px" viewBox="0 0 16 13">
                <path d="M2,2 L4,2 L4,3 L2,3 L2,2 Z M2,4 L4,4 L4,5 L2,5 L2,4 Z M2,6 L4,6 L4,7 L2,7 L2,6 Z" id="Rectangle" fill="#999999"></path>
                <path d="M1.00748397,0 L13.992516,0 C14.5510798,0 15,0.448822582 15,1.00247329 L15,10.9975267 C15,11.544239 14.5489341,12 13.992516,12 L1.00748397,12 C0.448920205,12 0,11.5511774 0,10.9975267 L0,1.00247329 C0,0.455760956 0.45106594,0 1.00748397,0 Z M1,1 L1,11 L5,11 L5,1 L1,1 Z M6,1 L6,11 L14,11 L14,1 L6,1 Z" id="Rectangle" fill="#585858"></path>
            </svg>
          `,
        },
      }
    ),
  ]
}
