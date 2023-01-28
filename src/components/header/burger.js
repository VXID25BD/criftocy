"use strict";

const burgerButton = document.querySelector(".burger__button");

if (burgerButton) {
    burgerButton.addEventListener("click", () => {
        document.body.classList.toggle("_lock")
        document.querySelector(".burger__body").classList.toggle("_open");
        burgerButton.classList.toggle("_open");
    })
}