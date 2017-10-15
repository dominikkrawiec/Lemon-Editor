

// Make connection to the server
var socket = io.connect('http://localhost:3000');

var editor = document.querySelector('.content'),
    title = document.querySelector('header'),
    lead = document.querySelector('.lead');

document.onkeyup = function(){
  socket.emit('editor', {
    content: editor.innerHTML,
    lead: lead.innerHTML,
    title: title.innerHTML,
    url: window.location.pathname
  } );

}

socket.on('editor', function(data){
  editor.innerHTML = data.content;
  lead.innerHTML = data.lead;
  title.innerHTML = data.title;

  let currentElement = document.querySelector('.' + localStorage.getItem('currentElement'));

  // setting current caret position
  createRange(editor, 5, false);
  setCurrentCursorPosition(localStorage.getItem('cursor'), currentElement);

})
