"use strict";
// SUB-TASK 2
// JavaScript to dynamically add cards

const cards = [];
const addBtn = document.querySelector("#add-card");
const cardSection = document.querySelector(".cards");

addBtn.addEventListener("click", () => {
    const newCard = document.createElement("div");
    newCard.classList.add("card");
    cardSection.appendChild(newCard);
    cards.push(newCard);
})