"use strict";
// SUB-TASK 11
// Create a signup form that validates: 
// email format, password length >= 8, and required fields.
// Show inline error messages near fields
const ageInput = document.getElementById("age");

ageInput.addEventListener("input", () => {
    const age = ageInput.value;

    if (age < 0) {
        ageInput.setCustomValidity("Age can't be a negative number");
    } else {
        ageInput.setCustomValidity("");
    }
});

// SUB-TASK 12
// Add error handling to one of your tasks: 
// if a required DOM element is missing, show a
// friendly message in the UI and log details to console.
function customError(message){
    this.message = message;
    this.title = "Custom Error";
    this.stack = `${this.title} ${this.message}`;
}


const fineBtn = document.querySelector("#ok")

try {
    if (fineBtn.disabled) {
        throw new customError("you can not make everything fine");
    }
} catch(err) {
    console.error(err.stack);
    document.getElementById("message").textContent = err.message;
} finally {
    // fineBtn.disabled = false;
}