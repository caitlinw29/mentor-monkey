const newFormHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#user-name').value.trim();
const about = document.querySelector('#user-about').value.trim();
const language = document.querySelector('#user-language').value.trim();

if (name && language) {
    const response = await fetch('/api/profileRoutes', {
        method: 'POST',
        body: JSON.stringify({ name, about, language }),
    })
} else {
    alert('Failed to create a profile')
    }
};



// function createHTML(profileData) {
//     var rawTemplate = document.getElementsByClassName("form-profile").innerHTML;
//     var compiledTemplate = Handlebars.compile(rawTemplate);
//     var generatedHTML = compiledTemplate(profileData);

//     var profileContainer = document.getElementById("profile-container");
//     profileContainer.innerHTML = generatedHTML;
// }