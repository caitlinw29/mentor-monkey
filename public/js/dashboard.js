const addMentor = async () => {
  
  const response = await fetch(`/api/dashboard`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
 
  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert('Failed to add to mentor list');
  }
}

const removeMentor = async () => {

  const response = await fetch(`/api/dashboard/quit`, {
    method: 'PUT',
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


document.getElementById('mentorBtn').addEventListener('click', addMentor);
document.getElementById('removeMentorBtn').addEventListener('click', removeMentor);