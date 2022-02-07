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

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);
document.querySelector('#logout-mobile').addEventListener('click', logout);