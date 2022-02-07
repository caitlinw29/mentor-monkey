// const socket = io();
// const addMentorRoomBtn = document.querySelector('#mentorBtn');
// const removeMentorRoomBtn = document.querySelector('#removeMentorBtn');
// const joinMentorRoomBtn = document.querySelector('.chooseMentor');

// const createMentorRoom = (e) => {
//   e.preventDefault()
//   console.log('clicked')
//   // Create Room
//   io.of("/").adapter.on("create-room", (room) => {
//     console.log(`room ${room} was created`);
//   });
// }

// const joinMentorRoom = () => {
//   // Join 
//   io.of("/").adapter.on("join-room", (room, id) => {
//     console.log(`socket ${id} has joined room ${room}`);
//   });
// }

// const deleteMentorRoom = () => {
//   // Delete Room
//   io.of("/").adapter.on("delete-room", (room, id) => {
//     console.log(`socket ${id} has deleted room ${room}`);
//   });
// }

// removeMentorRoomBtn.addEventListener('click', deleteMentorRoom()) 
// chooseMentor.addEventListener('click', chooseMentorRoom()) 

// //add the user's profile to the mentor list
// const addMentor = async () => {
  
//   const response = await fetch(`/api/dashboard`, {
//     method: 'PUT',
//     //no body - on route side, is_mentor is flipped to true
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
 
//   if (response.ok) {
//     document.location.replace('/chat');
//   } else {
//     alert('Failed to add to mentor list');
//   }
// }

//remove profile from mentor list
const removeMentor = async () => {
  const response = await fetch(`/api/dashboard/quit`, {
    method: 'PUT',
    //no body - on route side, is_mentor is flipped to false
    headers: {
      'Content-Type': 'application/json',
    },
  });
 
  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert('Failed to remove from mentor list');
  }
}

//view chat page on button click - need better routing system but works for visual purposes until chat functionality is added fully
const chooseMentor = async () => {
  document.location.replace('/chat');
}

//user clicks buttons to add and remove their profile from mentor list
document.getElementById('mentorBtn').addEventListener('click', addMentor);
document.getElementById('removeMentorBtn').addEventListener('click', removeMentor);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button);
    if (button.classList.contains("chooseMentor")){
      chooseMentor();
    }
  })
});