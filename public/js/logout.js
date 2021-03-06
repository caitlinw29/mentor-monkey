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

//for each logout option, add event listener to logout if clicked
const logouts = document.getElementsByClassName('logout');
for (let i = 0; i < logouts.length; i++) {
  logouts[i].addEventListener('click', () => {
    logout();
  })
}
