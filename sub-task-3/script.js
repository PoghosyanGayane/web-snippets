"use strict";
const ageInput = document.getElementById("age");

ageInput.addEventListener("input", () => {
    const age = ageInput.valueAsNumber;

    if (age < 0) {
        ageInput.setCustomValidity("Age can't be a negative number");
    } else {
        ageInput.setCustomValidity("");
    }
});

const form = document.querySelector("form");
form.addEventListener("invalid", (e) => {
    const element = e.target;
    console.log(element);
    
    if (!element.matches("input"))
        return;

    element.classList.add("error");
}, true);

form.addEventListener("input", (e) => {
    const element = e.target;
    
    if (!element.matches("input"))
        return;

    if (element.validity.valid)
        element.classList.remove("error");
});