const signupForm = async (event) => { 
  event.preventDefault();

  const username = document.querySelector('#user-signup').value.trim(); 
  const password = document.querySelector('#password-signup').value.trim();
  
  if (username && password) {
      const response = await fetch('/api/users', {
          method: 'POST', 
          body: JSON.stringify({ username, password}), 
          headers: { 'Content-Type': 'application/json'},
      });
    if (response.ok) {
      // If successful, redirect the browser to the dashboard
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  } 
  
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupForm);