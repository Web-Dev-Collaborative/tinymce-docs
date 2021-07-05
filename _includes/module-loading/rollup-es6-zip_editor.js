// Import TinyMCE
import '../tinymce/js/tinymce/tinymce';

// Default icons are required for TinyMCE 5.3 or above
import '../tinymce/js/tinymce/icons/default/icons';

// A theme is also required
import '../tinymce/js/tinymce/themes/silver/theme';

// Import the skin
import '../tinymce/js/tinymce/skins/ui/oxide/skin.css';

// Import plugins
import '../tinymce/js/tinymce/plugins/advlist/plugin';
import '../tinymce/js/tinymce/plugins/code/plugin';
import '../tinymce/js/tinymce/plugins/emoticons/plugin';
import '../tinymce/js/tinymce/plugins/emoticons/js/emojis';
import '../tinymce/js/tinymce/plugins/link/plugin';
import '../tinymce/js/tinymce/plugins/lists/plugin';
import '../tinymce/js/tinymce/plugins/table/plugin';

// Import premium plugins
// NOTE: Download separately and add these to /src/plugins
// import './plugins/checklist/plugin';
// import './plugins/powerpaste/plugin';
// import './plugins/powerpaste/js/wordimport';

// Import content css
import contentUiCss from '../tinymce/js/tinymce/skins/ui/oxide/content.css';
import contentCss from '../tinymce/js/tinymce/skins/content/default/content.css';

// Initialise TinyMCE
export function render () {
  tinymce.init({
    selector: 'textarea#editor',
    plugins: 'advlist code emoticons link lists table checklist powerpaste',
    toolbar: 'checklist',
    skin: false,
    content_css: false,
    content_style: contentUiCss.toString() + '\n' + contentCss.toString(),
  });
};
