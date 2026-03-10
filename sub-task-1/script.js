"use strict";

const toggleBtn = document.querySelector("#toggle-btn");

toggleBtn.addEventListener("click", () => {
    const hiddenText = document.querySelector("#info");
    hiddenText.classList.toggle("hidden-info")
})