// function for handling the submit data 
const signupForm = async (event) => { 
    event.preventDefault();

    const username = document.querySelector('#user-signup').value.trim(); 
    const password = document.querySelector('#password-signup').value.trim();
    const mentor = document.querySelector('#mentor-signup').value.trim();
    // const mentee = document.querySelector('#mentee-signup').value.trim();

    if (email && password && mentor) {
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ username, password, mentor }), 
            headers: { 'Content-Type': 'application/json'},
        });
    } 
};

// function for handing the login data 
const loginForm = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#user-login').value.trim(); 
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ username, password }), 
            headers: { 'Content-Type': 'application/json'},
        });
    } 
};

// calls the functions when user clicks 
document
    .querySelector('#sign-up-button')
    .addEventListener('submit', signupForm);

document 
    .querySelector('#login-button')
    .addEventListener('submit', loginForm);