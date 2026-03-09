"use strict";
// SUB-TASK 2
// JavaScript to dynamically add cards

let fruits = [];

fetch("fruits.json")
  .then(response => response.json())
  .then(data => {
    fruits = data.fruits;
  });

const cards = [];
const addBtn = document.querySelector("#add-card");
const cardSection = document.querySelector(".cards");

addBtn.addEventListener("click", () => {
    console.log(fruits);
    const newCard = document.createElement("div");
    const newCardName = document.querySelector("#fruit-name").value;

    let index = fruits.findIndex((f) => f.name === newCardName);
    if (index === -1){
        alert("no such fruit in our fruit list");
        return;
    }

    newCard.classList.add("card");
    newCard.textContent = newCardName;
    newCard.style.backgroundColor = fruits[index].color;
    cardSection.appendChild(newCard);
    cards.push(newCard);
})