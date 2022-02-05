var hamburger = document.getElementsByClassName("hamburger")[0]

hamburger.addEventListener("click",() => {
    profile.classList.toggle("active"); 
    dashboard.classList.toggle("active");
    login.classList.toggle("active");
}) 