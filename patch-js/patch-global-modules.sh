# Patch: Make React, etc. global
#
# Find match: "use strict";
# Replace to: "use strict";window.React=a(0);window.ReactDnD=a(335);

sed 's/"use strict";/"use strict";window.React=a(0);window.ReactDnD=a(335);window.Immutable=a(20);/' | \
sed 's/k={newBackgroundTab:function(e){N.a.dispatch({actionType:v.a.TAB_NEW_BACKGROUND_TAB,url:e})},/k=window.tabCommands={newBackgroundTab:function(e){N.a.dispatch({actionType:v.a.TAB_NEW_BACKGROUND_TAB,url:e})},newTab:function(e){N.a.dispatch({actionType:v.a.TAB_NEW_TAB,url:e})},/'
