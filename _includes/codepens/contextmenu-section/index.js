tinymce.PluginManager.add('my-example-plugin', function (editor) {
  editor.ui.registry.addMenuItem('image', {
    icon: 'image',
    text: 'Image',
    onAction: () => {
      console.log('context menu clicked');
      alert('context menu clicked');
    }
  });

  editor.ui.registry.addContextMenu('image', {
    update: (element) => {
      return !element.src ? '' : 'image';
    }
  });
});

tinymce.init({
  selector: "textarea",
  contextmenu: "image",
  plugins: 'my-example-plugin'
});
