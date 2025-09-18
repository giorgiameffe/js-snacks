// 🔹 ARRAY DI PARTENZA

const cities = [
    { name: "Roma", country: "Italia", population: 2873000, area: 1285, rating: 4.8 },
    { name: "Tokyo", country: "Giappone", population: 13960000, area: 2194, rating: 4.9 },
    { name: "New York", country: "USA", population: 8419000, area: 783, rating: 4.7 },
    { name: "Parigi", country: "Francia", population: 2148000, area: 105, rating: 4.8 },
    { name: "Sydney", country: "Australia", population: 5230000, area: 12368, rating: 4.6 }
];


// ----------------------
// CICLO FOR
// ----------------------

// 1. Stampare i nomi di tutte le città con un ciclo for

for (let i = 0; i < cities.length; i++) {

    console.log(cities[i].name);
}

// 2. Stampare nome e paese di tutte le città con un ciclo for

for (let i = 0; i < cities.length; i++) {

    const currentName = cities[i].name;
    const currentCountry = cities[i].country;

    console.log(`Nome città: ${currentName}, Nome Paese: ${currentCountry}`)
}

// 3. Calcolare la popolazione totale di tutte le città con un ciclo for

let totalPopulation = 0;

for (let i = 0; i < cities.length; i++) {

    const currentPopulation = cities[i].population;

    totalPopulation += currentPopulation;
}

console.log(totalPopulation);


// ----------------------
// FUNZIONI
// ----------------------

// 4. Scrivere una funzione che prende una città e stampa: "La città [name] si trova in [country]"

function printCity(city) {

    console.log(`La città ${city.name} si trova in ${city.country}`);
}

printCity(cities[0]);

// 5. Scrivere una funzione che restituisce un array con i nomi di tutte le città

function citiesNames(cities) {

    return cities.map(city => city.name);
}

console.log(citiesNames(cities));

// 6. Scrivere una funzione che filtra le città con rating maggiore o uguale a 4.8

function filteredCities(cities) {

    return cities.filter(city => city.rating >= 4.8);
}

console.log(filteredCities(cities));


// ----------------------
// MAP
// ----------------------

// 7. Creare un array con le stringhe: "Nome (Paese)"

const countriesName = cities.map(city => `${city.name} (${city.country})`);
console.log(countriesName);

// 8. Creare un array con solo le popolazioni delle città

const citiesPopulations = cities.map(city => city.population);
console.log(citiesPopulations);

// 9. Creare un array di frasi tipo: "[name] ha [population] abitanti su [area] km²"

const citiesDescriptions = cities.map(city => `${city.name} ha ${city.population} abitanti su ${city.area} km2`);
console.log(citiesDescriptions);


// ----------------------
// FILTER
// ----------------------

// 10. Ottenere le città con più di 5 milioni di abitanti

const bigCities = cities.filter(city => city.population > 5000000);
console.log(bigCities);

// 11. Ottenere le città con area maggiore di 2000 km²

const bigArea = cities.filter(city => city.area > 2000);
console.log(bigArea);

// 12. Ottenere le città che NON sono in Italia

const noItalianCities = cities.filter(city => city.country !== 'Italia');
console.log(noItalianCities);


// ----------------------
// FIND
// ----------------------

// 13. Trovare la prima città con popolazione esattamente 5230000

const bigCity = cities.find(city => city.population === 5230000);
console.log(bigCity);

// 14. Trovare la città che si chiama "Parigi"

const findParis = cities.find(city => city.name === 'Parigi');
console.log(findParis);


// ----------------------
// FOREACH
// ----------------------

// 15. Stampare tutte le città con formato: "[name], [country], [population] abitanti"

// 16. Stampare solo i nomi delle città

// 17. Stampare per ciascuna città una frase: "[name] ha rating [rating]"


// ----------------------
// MISTI
// ----------------------

// 18. Creare un array di nomi delle città con rating >= 4.8 usando filter + map

// 19. Stampare con forEach tutte le città con più di 5 milioni di abitanti

// 20. Scrivere una funzione che restituisce un array di nomi delle città
// con popolazione maggiore di 5 milioni e rating > 4.7 