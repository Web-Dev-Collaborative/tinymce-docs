---
layout: default
title: Creating a plugin
---

## Creating a plugin for TinyMCE (3.x)

NOTE: Still using TinyMCE version 3.x? [Update to 4.x](https://tiny.cloud/docs/). More features, easier deployment and better support!

## Creating your own plugins

Creating your own plugins for the TinyMCE application is fairly easy if you know the basics of HTML, CSS and JavaScript. There is an example plugin that is made to be easy to modify and has the basic things you need for a custom plugin. This example plugin is called "example" and is located in the plugins directory, copy this one to make your own plugin and change all references to example to match your new plugin name.

## Migration from the 2.x API to the new 3.x API

There have been lots of changes to the API for the 3.x version of TinyMCE. The new API is more robust and clean than the old 2.x API and it's also well documented. Check the [TinyMCE API](https://www.tiny.cloud/docs-3x/api/) for details on different methods and classes. One of the big changes to plugin creation from the 2.x API is that it now uses the observer pattern instead of an event interface pattern, so you need to register listener functions in the "init" method of the plugin instead of simply implementing different event callback methods. The new approach has its advantages from the older method. You can read more about the changes API changes in the [Migration guide](https://www.tiny.cloud/docs-3x/howto/TinyMCE3x@How-to_migrate_from_TinyMCE_2.x_to_3.x/).

## Plugin options

If you want, you may add plugin specific options and settings, but remember to prefix their names in the following format in order to create a unique name space: `"<your plugin>_<option>"` ("yourplugin_someoption", for example). Use [getParam](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html/#getparam) to retrieve a custom plugin option value.

## Plugin directory structure

`/css` Plugin specific CSS files. `/img` Plugin specific images. `/js` Plugin specific javascripts for HTML dialogs etc. `/langs` Plugin specific language files. These will be two files namely: 1. `en.js` which contains only the description of the plugin when the mouse cursor hovers over the plugin's button in the UI 2. `en_dlg.js` which contains all the dialogue strings you want to display in the plugin's pop-up window. `/editor_plugin.js` Editor plugin file (compressed) gets loaded when `tiny_mce.js` is used. `/editor_plugin_src.js` Editor plugin file (source) gets loaded when `tiny_mce_src.js` or `tiny_mce_dev.js` is used. `/somedialog.htm` Plugin specific dialog HTML file.

## Compiling JavaScript (editor_plugin_src.js -> editor_plugin.js)

TinyMCE doesn't care about `editor_plugin_src.js`. You need to use [jstrim](http://javascriptcompressor.com/) to convert it to `editor_plugin.js`, which is essentially a version of `editor_plugin_src.js` with all the comments and whitespace stripped out.

## Plugin example source

Replace all instances of "Example" with your own plugin name

```js
(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('example');

	tinymce.create('tinymce.plugins.ExamplePlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {
			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mceExample', function() {
				ed.windowManager.open({
					file : url + '/dialog.htm',
					width : 320 + ed.getLang('example.delta_width', 0),
					height : 120 + ed.getLang('example.delta_height', 0),
					inline : 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			// Register example button
			ed.addButton('example', {
				title : 'example.desc',
				cmd : 'mceExample',
				image : url + '/img/example.gif'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('example', n.nodeName == 'IMG');
			});
		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'Example plugin',
				author : 'Some author',
				authorurl : 'http://tinymce.moxiecode.com',
				infourl : 'http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/example',
				version : "1.0"
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('example', tinymce.plugins.ExamplePlugin);
})();
```

## Troubleshooting

One thing to note when creating a new plugin is that this plugin cannot share the same name as the current theme to TinyMCE. It is possible that functions may conflict with one another.