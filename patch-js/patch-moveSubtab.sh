# Patch: Fix subtab moving
#
# The detectInternalOverlap get dragged pages form top level tab, which will drop group data clearance (page.getIn(['extData', 'group']) shoud not set) letting movePage thinks we are moving the entire tab stack. This patch will detect if the tab is a subtab and prevent this.
#
# Find match: if(o){const e=this._getPagesFromDraggedSet()
# Replace to: const eeee=e; if(o){const e=eeee.subtab ? [eeee.page] : this._getPagesFromDraggedSet()

sed 's/if(o){const e=this._getPagesFromDraggedSet()/const eeee=e; if(o){const e=eeee.subtab ? [eeee.page] : this._getPagesFromDraggedSet()/'
