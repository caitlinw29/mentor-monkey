let selectedOption;

const signupForm = async (event) => { 
  event.preventDefault();

  const username = document.querySelector('#user-signup').value.trim(); 
  const password = document.querySelector('#password-signup').value.trim();
  const is_mentor = document.querySelector('.form-check-inline').checked;  
  
  if (username && password) {
      const response = await fetch('/api/users', {
          method: 'POST', 
          body: JSON.stringify({ username, password, is_mentor }), 
          headers: { 'Content-Type': 'application/json'},
      });
    if (response.ok) {
      // If successful, redirect the browser to the dashboard
      //ToDo change back to dashboard, homepage is for testing purposes
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  } 
  
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupForm);