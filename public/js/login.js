
// function for handing the login data 
const loginForm = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#user-login').value.trim(); 
    const password = document.querySelector('#password-login').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST', 
            body: JSON.stringify({ username, password }), 
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            // If successful, redirect the browser to the dashboard
            //TODO change back to dashboard, home page is for testing purposes
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    } 
};

// calls the function when user submits form
document 
    .querySelector('.login-form')
    .addEventListener('submit', loginForm);