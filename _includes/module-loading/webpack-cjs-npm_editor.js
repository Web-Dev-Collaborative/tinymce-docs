// Import TinyMCE
var tinymce = require('tinymce/tinymce');

// Default icons are required for TinyMCE 5.3 or above. Also import custom icons if applicable
require('tinymce/icons/default');

// A editor theme (required) - customize the editor appearance by creating a 'skin'
require('tinymce/themes/silver');

// Import the editor skin - replace with a custom skin if applicable.
require('tinymce/skins/ui/oxide/skin.css');

// Import plugins - include the relevant plugin in the 'plugins' option.
require('tinymce/plugins/advlist');
require('tinymce/plugins/code');
require('tinymce/plugins/emoticons');
require('tinymce/plugins/emoticons/js/emojis');
require('tinymce/plugins/link');
require('tinymce/plugins/lists');
require('tinymce/plugins/table');

// Import content CSS
var contentUiCss = require('tinymce/skins/ui/oxide/content.css').toString();

// Import the default content CSS, replace with the CSS for the editor content.
var contentCss = require('tinymce/skins/content/default/content.css').toString();

// Initialize TinyMCE
function render () {
  tinymce.init({
    selector: 'textarea#editor',
    /* All plugins need to be imported and added to the plugins option. */
    plugins: 'advlist code emoticons link lists table',
    toolbar: 'checklist',
    skin: false,
    content_css: false,
    content_style: contentUiCss + '\n' + contentCss,
  });
};

module.exports = render;