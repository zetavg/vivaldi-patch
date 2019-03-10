# Patch: Assign windowUtils (?) to global
#
# Find match: D={openURL:
# Replace to: D=window.windowUtils={openURL:

sed 's/D={openURL:/D=window.windowUtils={openURL:/'
