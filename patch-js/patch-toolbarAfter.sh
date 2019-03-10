# Patch: Insert toolbarAfter to insert elements at the end of the  toolbar
#
# Function inserted: toolbarAfter({createElement})
#
# Find match: this.state.buttons.map(e=>r.a.createElement
# Replace to: (this.state.buttons.concat(toolbarAfter({createElement:r.a.createElement}))).map(e=>(typeof e !== "string") ? e : r.a.createElement

sed 's/this.state.buttons.map(e=>r.a.createElement/(this.state.buttons.concat(toolbarAfter({createElement:r.a.createElement}))).map(e=>(typeof e !== "string") ? e : r.a.createElement/'
