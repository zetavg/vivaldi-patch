# Patch: Replace bookmarkIcon svg to an variable for modification
#
# Find match: '<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <clipPath id="addBookmarkPath">\n      <path d="M4,1 L4,14 L8,12 L12,14 L12,1 C9,1 6.5,1 4,1 Z"/>\n    </clipPath>\n  </defs>\n  <g clip-path="url(#addBookmarkPath)">\n    <polygon class="bookmark-animated-fill" points="4 1 12 -3 12 14 4 14"/>\n    <path class="bookmark-outline" d="M4,1 L4,14 L8,12 L12,14 L12,1 L4,1 Z M6,3 L10,3 L10,10.763 L8.894,10.211 L8,9.763 L7.106,10.211 L6,10.763 L6,3 Z"/>\n    <polygon class="add-bookmark-shadow" points="8 2 8 12.5 12 14.5 12 0 8 0"/>\n  </g>\n</svg>\n'
# Replace to: bookmarkIcon

sed $'s|\\\'<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\\\\n  <defs>\\\\n    <clipPath id="addBookmarkPath">\\\\n      <path d="M4,1 L4,14 L8,12 L12,14 L12,1 C9,1 6.5,1 4,1 Z"/>\\\\n    </clipPath>\\\\n  </defs>\\\\n  <g clip-path="url(#addBookmarkPath)">\\\\n    <polygon class="bookmark-animated-fill" points="4 1 12 -3 12 14 4 14"/>\\\\n    <path class="bookmark-outline" d="M4,1 L4,14 L8,12 L12,14 L12,1 L4,1 Z M6,3 L10,3 L10,10.763 L8.894,10.211 L8,9.763 L7.106,10.211 L6,10.763 L6,3 Z"/>\\\\n    <polygon class="add-bookmark-shadow" points="8 2 8 12.5 12 14.5 12 0 8 0"/>\\\\n  </g>\\\\n</svg>\\\\n\\\'|bookmarkIcon|'