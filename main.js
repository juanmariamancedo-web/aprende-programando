const headerButton = document.getElementById("headerButton");
const headerNav = document.getElementById("headerNav");

let navActive = false;

headerButton.addEventListener("click", (e)=>{
    if(!navActive){
        navActive = true;
        headerNav.classList.add("header__nav-active")
        headerButton.innerText = "H"
    }else{
        navActive = false;
        headerNav.classList.remove("header__nav-active")
        headerButton.innerText = "X"
    }
})