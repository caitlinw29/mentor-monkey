const addMentor = () => {

  fetch('/api/dashboard', {
    method: 'GET',
    credentials: 'same-origin',
    redirect: 'follow',
  }) 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
 
  
}


document.getElementById('#mentorBtn').addEventListener('click', addMentor);