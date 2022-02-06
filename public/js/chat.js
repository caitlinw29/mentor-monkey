// console.log('checks for io')
// var socket = io();

// var messages = document.getElementById('chat-messages');
// var form = document.getElementById('chat-form');
// var input = document.getElementById('chat-input');

// form.addEventListener('submit', function(e) {
//   e.preventDefault();
//   if (input.value) {
//     socket.emit('chat message', input.value);
//     input.value = '';
//   }
// });

// socket.on('chat message', function(msg) {
//   var item = document.createElement('li');
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });

console.log('doesnt break before reaching script')  
let socket = io();
  console.log('declares io')
let messages = document.getElementById('chat-messages');
  console.log('grabs chat-messages')
let chatForm = document.getElementById('chat-form');
  console.log('grabs chat-form')
let input = document.getElementById('chat-input');
  console.log('grabs chat-input');
  
// chatForm.addEventListener('submit', function(e) {
//   console.log('adds eventlistener to chat-form');
//   e.preventDefault();
      
//   if (input.value) {
//     socket.emit('chat message', input.value);
//     input.value = '';
//   }
// });

chatForm.addEventListener('submit', function(e) {
  console.log('adds eventlistener to chat-form');
  // e.preventDefault();
      
  // if (input.value) {
  //   socket.emit('chat message', input.value);
  //   input.value = '';
  // }
});

// socket.on('chat message', function(msg) {
//   var item = document.createElement('li');
//   item.textContent = msg;
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// });