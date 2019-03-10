: '
Patch: Insert "addressBarAfter({ createElement, tabIndex })" into source

```
          className: "button-addressfield input-dropdown",
          title: h,
          tabIndex: t[ne.kKeyboardTabToAll],
          disabled: 0 === this.state.typedHistory.length,
          onMouseDown: this.toggleShowTypedHistory,
          dangerouslySetInnerHTML: {
            __html: re.Ib
          },
          __source: {
            fileName: de,
            lineNumber: 1128
          }
        }), addressBarAfter({ createElement, tabIndex })), t[ne.kAddressBarSearchEnabled] && w.a.createElement(D.a, {
          keyAccess: t[ne.kKeyboardTabToAll],
          onEnterPressed: this.onSearchAddTypedSearchHistory,
          ref: "search",
          suggestEnabled: t[ne.kAddressBarSearchSuggestEnabled],
          __source: {
            fileName: de,
            lineNumber: 1138
          }
        }), this.state.addressBarVisible && w.a.createElement(r.a, {
```

Find: })),t[ne.kAddressBarSearchEnabled]&&w.a.createElement
Replace: }),addressBarAfter({createElement:w.a.createElement,tabIndex:t[ne.kKeyboardTabToAll]})),t[ne.kAddressBarSearchEnabled]&&w.a.createElement
'

sed 's|})),t\[ne.kAddressBarSearchEnabled\]&&w.a.createElement|}),addressBarAfter({createElement:w.a.createElement,tabIndex:t[ne.kKeyboardTabToAll]})),t[ne.kAddressBarSearchEnabled]\&\&w.a.createElement|'
