const hideMenu = document.querySelector("#hide-nav");
const burger = document.querySelector(".ham");
const closeBtn = document.querySelector(".close-hide-menu");

const CloseHideMenu = () => {
    hideMenu.classList.remove('active');
    burger.classList.remove('active');
}

const OpenHideMenu = (e) =>{
    if(e){
        hideMenu.classList.toggle('active');
        burger.classList.toggle('active');
    }
}

burger.addEventListener("click", OpenHideMenu);
closeBtn.addEventListener("click", CloseHideMenu);