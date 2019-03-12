# Patch: Make some classes global

sed 's/class K extends(Object(y.Record)({type:"tab",id:"",page:new r.a})){}/class K extends(Object(y.Record)({type:"tab",id:"",page:new r.a,subtab:false,parentTab:null})){};window.TabDataClass=K;/' | \
sed 's/createElement(E.a,{className:"tab-strip"/createElement((window.TabStripComponent = E.a, E.a),window.tabStripComponentProps={className:"tab-strip"/'
