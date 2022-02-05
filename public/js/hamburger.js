const hamburger = document.getElementsByClassName("ham-menu")[0]

const profile = document.getElementsByClassName("nav-links")[0] 

const dashboard = document.getElementsByClassName("dashboard")[0] 

const loginLogout = document.getElementsByClassName("log-hamburger")[0]

const overLay = document.getElementsByClassName("overlay")[0]

hamburger.addEventListener("click",() => {
    console.log("yes!");
    profile.classList.toggle("active"); 
    dashboard.classList.toggle("active");
    loginLogout.classList.toggle("active");
    overLay.classList.toggle("active");
}) 