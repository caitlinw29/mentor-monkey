const socket = io();
    
const messageContainer= document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

//if the chat-message comes through, take the data(message) and append it to page
socket.on('chat-message', data => {
  appendMessage(data);
});

messageForm.addEventListener('submit', e => {
  e.preventDefault;
  //take in the user messsage from the form and send it with socket.emit to server.js
  const message = messageInput.value;
  socket.emit('send-chat-message', message);
  messageInput.value = '';
  //This works to have the user message show up, problem is page is refreshing every message and getting rid of old messages
  const myMessage = document.createElement('div');
  myMessage.textContent = message;
  messageContainer.appendChild(myMessage);
})

//take the data and put the message in a div and append to page.
const appendMessage = (message) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageContainer.append(messageElement);
}
