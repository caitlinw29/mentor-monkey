const addMentor = async () => {
  const is_mentor = true;

  const response = await fetch(`/api/profile/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      is_mentor,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
 
  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert('Failed to add to mentor list');
  }
 
 
  // fetch('/api/dashboard', {
  //   method: 'GET',
  //   credentials: 'same-origin',
  //   redirect: 'follow',
  // }) 
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   console.log(data);
  // });
}

document.getElementById('mentorBtn').addEventListener('click', addMentor);