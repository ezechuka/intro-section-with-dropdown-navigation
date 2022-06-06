const openMenuBtn = document.querySelector(".open");
const closeMenuBtn = document.querySelector(".close");
const menuOverlay = document.querySelector(".mobile-menu-overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const subMenu = document.getElementsByClassName("mobile-sub-menu");
const mobileNavItem = document.getElementsByClassName("mobile-navbar-item")
const navIcons = document.getElementsByClassName("icon");

function openAndCloseMenu() {
    menuOverlay.classList.toggle("unshown");
    mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("no-scroll")
}

openMenuBtn.addEventListener("click", openAndCloseMenu);
closeMenuBtn.addEventListener("click", openAndCloseMenu);


mobileNavItem[0].addEventListener("click", function() {
    subMenu[0].classList.toggle("unshown");
})

mobileNavItem[1].addEventListener("click", function() {
    subMenu[1].classList.toggle("unshown")
})

console.log(navIcons[0]);