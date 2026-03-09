"use strict";

async function getWeather(lat, lon) {
    try {
        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );
        const data = await res.json();
        return data["current_weather"]["temperature"];
    }
    catch(err) {
        console.log(err);
        return;
    }
}

async function getCitiesWithTemp() {
    const res = await fetch("city-locations.json");
    const data = await res.json();
    
    const cities = data.cities;

    const promises = cities.map(async (city) => {
        city.temperature = await getWeather(city.latitude, city.longitude);
        return city;
    });

    await Promise.all(promises);

    return cities;
}

async function displayCities(){
    const cities = await getCitiesWithTemp();
    const cityList = document.querySelector("ul");
    const template = document.querySelector("#city-template");

    const docFragList = document.createDocumentFragment();
    for (let city of cities){
        const clonedCity = template.content.cloneNode(true);

        clonedCity.querySelector(".city-name").textContent = city.name;
        clonedCity.querySelector(".city-temp").textContent = city.temperature + "C";
        
        docFragList.appendChild(clonedCity);
    }
    document.querySelector(".loading").textContent = "";
    cityList.appendChild(docFragList);
}

displayCities();


