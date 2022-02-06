const logout = async () => {
   //remove mentor profile if it is up
   const removeMentor = await fetch(`/api/dashboard/quit`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  //logout
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  // Quick solution for MVP
  if (response.ok) {
    document.location.replace('/');
  } else { 
    document.location.replace('/');
  }
};

document.querySelector('#logout').addEventListener('click', logout);