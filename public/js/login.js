
















// function for handling the submit data 
const signupForm = async (event) => { 
    event.preventDefault();

    const username = document.querySelector('#user-signup').value.trim(); 
    const password = document.querySelector('#password-signup').value.trim();
    const mentor = document.querySelector('#mentor-signup').value.trim();
    const mentee = document.querySelector('#mentee-signup').value.trim();

    if (email && password && mentor) {
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({ username, password, mentor }), 
            headers: { 'Content-Type': 'application/json'},
        });
    } 
};

document
    .querySelector('#sign-up-button')
    .addEventListener('submit', signupForm);