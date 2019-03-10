# Patch: Insert topToolbarAfter to insert elements at the end of the top toolbar
#
# Function inserted: topToolbarAfter({createElement,buttonTabIndex})
#
# Find match: ))}},["URLBAR_SEARCH_DISABLED"])
# Replace to: ),topToolbarAfter({createElement:w.a.createElement,buttonTabIndex:t[ne.kKeyboardTabToAll]}))}},["URLBAR_SEARCH_DISABLED"])

sed 's/))}},\["URLBAR_SEARCH_DISABLED"\])/),topToolbarAfter({createElement:w.a.createElement,buttonTabIndex:t[ne.kKeyboardTabToAll]}))}},["URLBAR_SEARCH_DISABLED"])/'
