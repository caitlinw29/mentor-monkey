const profileHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#user-name').value.trim();
    const about = document.querySelector('#user-about').value.trim();
    const languages = document.querySelector('#user-language').value.trim();
    const is_mentor = false;

    if (name && languages) {
        const response = await fetch('/api/profile', {
            method: 'POST',
            body: JSON.stringify({ name, about, languages, is_mentor }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            // If successful, redirect the browser to the dashboard
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    } else {
        alert('Please include a name and languages/tools');
     }
};

document.querySelector('.new-profile-form').addEventListener('submit', profileHandler);