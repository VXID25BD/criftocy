"use strict";

const subscribeForm = document.querySelector(".form-subscribe");

if (subscribeForm) {
    const input = subscribeForm.querySelector(".form-subscribe__input");
    const buttonSubmit = subscribeForm.querySelector(".form-subscribe__button");

    if (input.value === "") buttonSubmit.setAttribute("disabled", true);
    input.addEventListener("input", e => {
        const inputValue = e.target.value;
        console.log(inputValue);
        if (inputValue === "" && inputValue.length < 10) {
            buttonSubmit.setAttribute("disabled", true);
        } else if (inputValue.indexOf("@") === -1) {
            buttonSubmit.setAttribute("disabled", true);
        } else {
            buttonSubmit.removeAttribute("disabled");
        }
    })
}