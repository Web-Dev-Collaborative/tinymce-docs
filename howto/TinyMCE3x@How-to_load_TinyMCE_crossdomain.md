---
layout: default
title: Load TinyMCE crossdomain
---

**Please note that it is not possible to load TinyMCE crossdomain, only crosssubdomain.**

As of TinyMCE 3.2.2 you will have to set the document.domain value by hand. This since other scripts on the page might change this value or need it to be set to something other that the one TinyMCE used to change to automatically. Our focus is to be a good citizen and not mess with other scripts on the page and the old logic was doing things to a global value that we shouldn't be doing.

## Instructions

It's a fairly easy procedure to set the document domain value. Simply add it to before the tinyMCE.init call on your page.

```js
document.domain = 'mydomain.com';
tinyMCE.init({
   ...
});
```

And then change the value in: `tiny_mce_popup.js` to:

```js
document.domain = 'mydomain.com';
```

**This will enable the script to be loaded between two sub domains. For example www.mydomain.com can load TinyMCE from scripts.mydomain.com using the above method. We are currently working on a CDN version that will be able to load TinyMCE from any domain.**