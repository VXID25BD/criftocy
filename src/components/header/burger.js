"use strict";

const burgerButton = document.querySelector(".burger__button");

const openMenu = () => {
    document.body.classList.add("_lock")
    document.querySelector(".burger__body").classList.add("_open");
    burgerButton.classList.add("_open");
}
const closeMenu = () => {
    document.body.classList.remove("_lock")
    document.querySelector(".burger__body").classList.remove("_open");
    burgerButton.classList.remove("_open");
}

if (burgerButton) {
    burgerButton.addEventListener("click", (e) => e.target.classList.contains("_open") ? closeMenu() : openMenu())
}

const links = document.querySelectorAll(".link[data-scroll-to]");
console.log(links);
const scrollOnClick = e => {
    closeMenu();

    const scrollToBlock = document.querySelector(e.target.dataset.scrollTo);
    
    if (scrollToBlock) {
        const scrollToBlockPos = scrollToBlock.getBoundingClientRect().top + window.pageYOffset;

        if (scrollToBlockPos > window.pageYOffset) {
            window.scrollTo({
                top: scrollToBlockPos,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}

if (links) {
    links.forEach(link => link.addEventListener("click", scrollOnClick));
}
