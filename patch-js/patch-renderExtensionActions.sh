# Patch: Insert renderExtensionActions to customize extension button rendering
#
# Function inserted: renderExtensionActions({extensionActions,canRender,renderExtension,createElement})
#
# Find match: s=this.state.extensionActions.map(e=>{if(!0!==i||!1!==e.allowInIncognito)return this.renderExtension(e)});
# Replace to: s=renderExtensionActions({extensionActions:this.state.extensionActions,canRender:e=>(!0!==i||!1!==e.allowInIncognito),renderExtension:this.renderExtension,createElement:l.a.createElement});

sed 's/s=this.state.extensionActions.map(e=>{if(!0!==i||!1!==e.allowInIncognito)return this.renderExtension(e)});/s=renderExtensionActions({extensionActions:this.state.extensionActions,canRender:e=>(!0!==i||!1!==e.allowInIncognito),renderExtension:this.renderExtension,createElement:l.a.createElement});/'
