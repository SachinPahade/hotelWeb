const menu = document.getElementById("mobile_menu");
const menuLinks = document.querySelector(".navbar_menu");


const mobileMenu = ()=>{
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active")
}

menu.addEventListener("click",  mobileMenu)


function scrollpage(){
    window.scroll(0,780);
    // document.getElementById("page1").scrollIntoView({behaviour:"smooth"});

}