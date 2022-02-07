//form to create a user
const signupForm = async (event) => { 
  event.preventDefault();

  const username = document.querySelector('#user-signup').value.trim(); 
  const password = document.querySelector('#password-signup').value.trim();
  
  // const rePassword = document.querySelector('#password-reenter').value.trim();
  
  // if (password !== rePassword) {
  //   alert('Passwords do not match! Please re-enter your password');
  //   document.location.replace
  // }
  
  if (username && password) {
      const response = await fetch('/api/users', {
          method: 'POST', 
          body: JSON.stringify({ username, password}), 
          headers: { 'Content-Type': 'application/json'},
      });
    if (response.ok) {
      // If successful, redirect the browser to the profile form
      document.location.replace('/profile_form');
    } else {
      alert('Username already exists!'); 
    }
  } 
};

//function runs when form is submitted
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupForm);