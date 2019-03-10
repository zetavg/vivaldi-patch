# Patch: Use a function to dynamically determine whether to put the new tab into the current Tab Stack
#
# Function required: openInTabStack()
#
# Find match: "openintabstackwithrelated"===n
# Replace to: ("openintabstackwithrelated"===n||openInTabStack())

sed 's/"openintabstackwithrelated"===n/("openintabstackwithrelated"===n||openInTabStack())/'
