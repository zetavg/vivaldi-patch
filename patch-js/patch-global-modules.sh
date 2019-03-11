# Patch: Make React, etc. global
#
# Find match: "use strict";
# Replace to: "use strict";window.React=a(0);window.ReactDnD=a(335);

sed 's/"use strict";/"use strict";window.React=a(0);window.ReactDnD=a(335);window.Immutable=a(20);/'
