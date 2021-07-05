import * as editor from './editor';

function heading() {
  const element = document.createElement('h1');
  element.innerText = 'TinyMCE Webpack demo';
  return element;
}


const parent = document.createElement('p');

function editorArea() {
  const element = document.createElement('textarea');
  element.id = 'editor';
  return element;
}

parent.appendChild(editorArea());

document.body.appendChild(heading());

document.body.appendChild(parent);

editor.render();