const addressBarAfter = ({ createElement, tabIndex }) => {
  return createElement('button', {
    className: 'button-addressfield refresh',
    tabIndex,
    onClick: () => {
      const reloadBtn = document.querySelector('button.button-toolbar.reload')
      if (reloadBtn) reloadBtn.click()
    },
    dangerouslySetInnerHTML: {
      __html: `
        <svg class="refresh-icon" style="margin-top: 1px; margin-left: 0px; margin-right: 1px" width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5,3.02746439 C4.25002477,3.27618653 2.5,5.18372317 2.5,7.5 C2.5,9.98528137 4.51471863,12 7,12 C9.48528137,12 11.5,9.98528137 11.5,7.5 C11.5,7.33099545 11.4906833,7.16416693 11.4725356,7 L12.4775785,7 C12.4924187,7.16468102 12.5,7.33145515 12.5,7.5 C12.5,10.5375661 10.0375661,13 7,13 C3.96243388,13 1.5,10.5375661 1.5,7.5 C1.5,4.63097872 3.69674999,2.2750359 6.5,2.02242151 L6.5,0 L11,2.53500772 L6.5,5.5 L6.5,3.02746439 Z"></path>
        </svg>
        <svg class="stop-icon" style="margin-top: 3px; margin-left: 3px; margin-right: -2px;" width="14px" height="14px" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.0658141e-14,-1.0658141e-14 L9.19238816,9.19238816"></path>
          <path d="M-1.0658141e-14,-1.0658141e-14 L9.19238816,9.19238816" transform="translate(4.596194, 4.596194) rotate(-90.000000) translate(-4.596194, -4.596194) "></path>
        </svg>
      `,
    },
  })

}
