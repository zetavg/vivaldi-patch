# Patch: Allow overriding the render function of components/tabs/TabBar.jsx
#
# Function required: tabBarRender({originalRender,tabs,createElement,React})
#
# Find match: r.a.addListener("COMMAND_SAVE_SELECTED_SESSION",this._onCommandSpy),this._isMounted=!1}render(){
# Replace to: r.a.addListener("COMMAND_SAVE_SELECTED_SESSION",this._onCommandSpy),this._isMounted=!1}render(){return tabBarRender({originalRender:this.originalRender.bind(this),tabs:this.state.tabs,createElement:p.a.createElement,React:p.a})}originalRender(){

sed 's/r.a.addListener("COMMAND_SAVE_SELECTED_SESSION",this._onCommandSpy),this._isMounted=!1}render(){/r.a.addListener("COMMAND_SAVE_SELECTED_SESSION",this._onCommandSpy),this._isMounted=!1}render(){return tabBarRender({originalRender:this.originalRender.bind(this),tabs:this.state.tabs,createElement:p.a.createElement,React:p.a})}originalRender(){/' | \
sed 's/r.maxWidth=U,r.maxHeight=F/r.maxWidth=(e.subtab ? 180 : 10000),r.maxHeight=F/'

# sed 's/U=180,/U=200,'
