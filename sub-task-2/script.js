"use strict";

let fruits = [];

async function loadfruits(file) {
    try{
      const response = await fetch(file);
      const data = await response.json();

      fruits = data.fruits;
    }
    catch(err){
        console.error(err);
    }
}

loadfruits("fruits.json");

const cards = [];
const addBtn = document.querySelector("#add-card");
const cardSection = document.querySelector(".cards");

const warning = document.querySelector(".warning");

addBtn.addEventListener("click", () => {
    warning.textContent = "";
    
    if (fruits.length === 0){
        warning.textContent = "Internal error. Please try again.";
        return;
    }

    const newCard = document.createElement("div");
    const newCardName = document.querySelector("#fruit-name").value.trim();

    let index = fruits.findIndex((f) => f.name === newCardName.toLowerCase());
    if (index === -1){
        warning.textContent = "no such fruit in our fruit list";
        return;
    }

    newCard.classList.add("card");
    newCard.textContent = newCardName;
    newCard.style.backgroundColor = fruits[index].color;
    cardSection.appendChild(newCard);
    
    cards.push(newCard);
})