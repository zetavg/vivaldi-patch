# Patch: Assign windowUtils (?) to global
#
# Find match: Y.dispatchToken=h.a.register(t=>{switch(t.actionType){case m.a.PAGE_CLEAR
# Replace to: Y.dispatchToken=h.a.register(t=>{setTimeout(() => window.generatePageIndex && window.generatePageIndex(Y), 0);switch(t.actionType){case m.a.PAGE_CLEAR

sed 's/Y.dispatchToken=h.a.register(t=>{switch(t.actionType){case m.a.PAGE_CLEAR/Y.dispatchToken=h.a.register(t=>{setTimeout(() => window.generatePageIndex \&\& window.generatePageIndex(Y), 0);switch(t.actionType){case m.a.PAGE_CLEAR/'
