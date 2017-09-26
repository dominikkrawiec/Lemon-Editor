// Make connection to the server
var socket = io.connect('http://localhost:3000');

var editor = document.querySelector('.content');
document.onkeyup = function(){
  socket.emit('editor', {
    content: editor.innerHTML
  } );

  console.log('tralalal');
}

socket.on('editor', function(data){
  editor.innerHTML = data.content;
})
