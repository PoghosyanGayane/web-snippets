"use strict";
// SUB-TASK 1
// Build a landing page 
// where a button toggles visibility of an information section 
// using JavaScript.

const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", () => {
    const hiddenText = document.querySelector("#info");
    hiddenText.classList.toggle("hidden-info")
})