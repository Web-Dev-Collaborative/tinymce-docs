---
layout: default
title: Creating a skin
---

## Creating a skin

A skin is a CSS file together with optional images that are located inside the themes skin directory jscripts/tiny_mce/themes/advanced/skins.

CSS files in the default skin directory include:

`/default/content.css`

`/default/dialog.css`

`/default/ui.css`

If you want to change the appearance of TinyMCE for example change the colors for the buttons you can make your own skin by making a copy of the default skin `jscripts/tiny_mce/themes/advanced/skins/default` to `jscripts/tiny_mce/themes/advanced/skins/<your skin name>`.

Remember to replace all `.defaultSkin` classes with .<your skin name>Skin in the ui.css file.

**Note:** To view your latest CSS changes you may have to clear your browsers temporary internet files - cache (copies of webpages, css files, images and media that are saved on your computer for faster viewing)

## Examples

To apply different styles (font-sizes, font-family etc.) to your editor you could add the following styles to jscripts/tiny_mce/themes/advanced/skins/<your skin name>/content.css

```css
/* Custom main font size, family and color */
body,p,div,li,ol,dl,td,em,pre,td{
	font-size: 11px;
	font-family: Arial, Helvetica, sans-serif;
	color: #666666;
	}
h1,h2,h3,h4,h5,h6 { color: #000000;}

/* Custom heading colors and sizes */
h1 {font-size:24px; }
h2 {font-size:18px; }
h3 {font-size:16px; }
h4 {font-size:14px; }
h5 {font-size:12px; }
h6 {font-size:11px; }
```

To change the toolbar background colour, edit jscripts/tiny_mce/themes/advanced/skins/<your skin name>/ui.css

```css
/* Containers */
.<your skin name>Skin table {background:#FBE6ED}
```

[Skin configuration option](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@skin/)