const hamburger = document.getElementsByClassName("ham-menu")[0]

const profile = document.getElementsByClassName("nav-links")[0] 

const loginLogout = document.getElementsByClassName("icon")[0]

hamburger.addEventListener("click",() => {
    console.log("yes!");
    profile.classList.toggle("active"); 
    loginLogout.classList.toggle("active");
}) 