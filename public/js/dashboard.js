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

document.getElementById('mentorBtn').addEventListener('click', addMentor);