---
layout: default
title: iespell
---

TinyMCE is a crossbrowser RTE: if a function like this only works in IE it should not be in there at all.

You can download the IESpell ActiveX control from here.

[http://www.iespell.com/download.php](http://www.iespell.com/download.php)

## Installation Instructions

1.  Copy the iespell directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "iespell".
3.  Add the iespell button name to button list, example: theme_advanced_buttons3_add : "iespell".

## Initialization Example

```html
tinyMCE.init({
	theme : "advanced",
	mode : "textareas",
	plugins : "iespell",
	theme_advanced_buttons3_add : "iespell"
});

```