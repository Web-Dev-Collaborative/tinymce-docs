---
layout: default
title: theme_advanced_buttons_1_n_add_before
---

This option should contain a comma separated list of button/control names to add to the beginning of the specified toolbar row. The number 1-n is the row number to add the buttons/controls to. Below is a list of built-in controls, plugins may include other controls names that can be inserted but these are documented in the individual plugins. This option can only be used when theme is set to advanced and when the theme_advanced_layout_manager option is set to the default value of "SimpleLayout".

A complete reference of all built in buttons and controls can be found in the [button/control reference](https://www.tiny.cloud/docs-3x/reference/buttons/) reference page.

## Example of usage of the `theme_advanced_buttons<1-n>_add_before` option:

```js
tinyMCE.init({
  theme_advanced_buttons1_add_before : "separator,insertdate,inserttime,preview,zoom,separator,forecolor,backcolor"
  theme_advanced_buttons2_add_before : "bullist,numlist,separator,outdent,indent,separator,undo,redo,separator,link,unlink,anchor,image,cleanup,help,code"
  theme_advanced_buttons3_add_before : "hr,removeformat,visualaid,separator,sub,sup,separator,charmap"
});
```

## Common Mistakes

You can only use `theme_advanced_buttons<1-n>_add_before` once per n where n is a whole number starting with 1 with step 1\. Multiple instances of the same n will overwrite each other. The following incorrect code will result in row 1 containing hr, removeformat, insertdate, and inserttime. Bullist and numlist will be overwritten.

```js
tinyMCE.init({
  theme_advanced_buttons1 : "insertdate,inserttime",
  theme_advanced_buttons1_add_before : "bullist,numlist",
  theme_advanced_buttons1_add_before : "hr,removeformat",
  theme_advanced_buttons2 : "",
  theme_advanced_buttons3 : "",
});
```