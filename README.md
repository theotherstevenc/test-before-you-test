# test before you test

This is a Chrome extension that will mimic email client quirks. **Version 1.0** will produce 5 unique test scenarios.

## Installation
This is a beta version, and only available to be installed and run locally as an unpacked extension
* open the extensions window in Chrome by typing `chrome://extensions/` into the address bar
* Switch to _Developer mode_ (the toggle option in the upper right)
* Select `Load unpacked`
* Navigate to and choose the root extension folder. By default, it will be `test-before-you-test`
* Open `test.html` in Chrome for a trial run

> take note of the saved location. if the folder is removed, renamed, etc, the extension will break.

## Current Extension Options

### Checked
Sets `checked` values of any `input` to **false** / **unchecked**, which will mimic any email client that does not support `:checked` pseudo class

### Gmail
* Sets `checked` values of any `input` to **false** / **unchecked**
* Removes any instance of `u +` or `u+`
* Removes any `CSS` included in a `style` block with the arbitrary attribute **advanced**.
ex:
```
<style advanced>
  .unsupported {style:styles}
</style>
```

### Yahoo
Disables `CSS` **box-sizing**, and applies any `CSS` included inside a `@yahoo` media query

### Outlook
Removes MSO conditional comments.
Currently supports
* `<!--[if true]>`
* `<!--[if mso 15]>`
* `<!--[if mso 16]>`

### Blur
Applies a `blur` value between `0px` - `10px` to the entire document

### NOTES:
After each _preview selection_, it is necessary to refresh the page, in order to reset back to the original markup. Not doing so may result in error.
