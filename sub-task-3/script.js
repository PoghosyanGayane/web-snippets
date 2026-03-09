"use strict";
// sub-task 2
// JavaScript validation logic
// No alert() for error

const ageInput = document.getElementById("age");

ageInput.addEventListener("input", () => {
    const age = ageInput.value;

    if (age < 0) {
        ageInput.setCustomValidity("Age can't be a negative number");
    } else {
        ageInput.setCustomValidity("");
    }
});