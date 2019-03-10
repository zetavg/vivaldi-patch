const renderExtensionActions = ({
  extensionActions,
  canRender,
  renderExtension,
  createElement,
}) => {
  return extensionActions.filter(ea => canRender(ea)).map(ea => renderExtension(ea)).map(ea => createElement('div', { className: 'hello' }, ea))
}
