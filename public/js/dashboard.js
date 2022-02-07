//add the user's profile to the mentor list
const addMentor = async () => {
  
  const response = await fetch(`/api/dashboard`, {
    method: 'PUT',
    //no body - on route side, is_mentor is flipped to true
    headers: {
      'Content-Type': 'application/json',
    },
  });
 
  if (response.ok) {
    document.location.replace('/chat');
  } else {
    alert('Failed to add to mentor list');
  }
}

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
    if (button.classList.contains("chooseMentor")){
      chooseMentor();
    }
  })
});