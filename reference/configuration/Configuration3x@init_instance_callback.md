---
layout: default
title: init_instance_callback
---

This option should contain a function name to be executed each time a editor instance is initialized. The format of this function is: initInstance(inst) where inst is the editor instance object reference.

## Example of usage of the init_instance_callback option:

```html
function myCustomInitInstance(inst) {
	alert("Editor: " + inst.editorId + " is now initialized.");
}

tinyMCE.init({
	...
	init_instance_callback : "myCustomInitInstance"
});
```

Also see the the [setup callback option](../configuration/Configuration3x@setup) it enabled you to bind events before the editor instance is initialized.