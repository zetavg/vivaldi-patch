# Patch: Use a function to modify the order of panels
#
# Function required: getPanelOrder(originalPanelOrder)
#
# Find match: getRegPanelOrder:function(){return M
# Replace to: getRegPanelOrder:function(){return getPanelOrder(M)

sed 's/getRegPanelOrder:function(){return M/getRegPanelOrder:function(){return getPanelOrder(M)/'
