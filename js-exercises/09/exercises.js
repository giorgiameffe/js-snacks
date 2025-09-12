// 🔹 ARRAY DI PARTENZA

const cars = [
    { brand: "Toyota", model: "Yaris", year: 2018, price: 12000 },
    { brand: "Fiat", model: "Panda", year: 2020, price: 10000 },
    { brand: "Tesla", model: "Model 3", year: 2022, price: 45000 },
    { brand: "Ford", model: "Focus", year: 2019, price: 15000 },
    { brand: "BMW", model: "X3", year: 2021, price: 38000 }
];


// ----------------------
// MAP
// ----------------------

// 1. Creare un array con tutti i modelli delle auto

const carsModels = cars.map(car => car.model);
console.log(carsModels);

// 2. Creare un array di stringhe descrittive tipo:
// "Toyota Yaris del 2018 costa 12000€"

const carsString = cars.map(car => `${car.brand} ${car.model} del ${car.year} costa ${car.price}€`);
console.log(carsString);

// 3. Creare un array con solo gli anni di produzione

const carsYears = cars.map(car => car.year);
console.log(carsYears);

// ----------------------
// FILTER
// ----------------------

// 4. Ottenere solo le auto con prezzo maggiore di 20000€

const expensiveCars = cars.filter(car => car.price > 20000);
console.log(expensiveCars);

// 5. Ottenere le auto costruite dopo il 2020

const recentCars = cars.filter(car => car.year > 2020);
console.log(recentCars);

// 6. Filtrare tutte le auto che non sono Tesla

const noTeslaCars = cars.filter(car => car.brand !== 'Tesla');
console.log(noTeslaCars);

// ----------------------
// FIND
// ----------------------

// 7. Trovare l’auto con marca "Fiat"

const fiatCar = cars.find(car => car.brand === 'Fiat');
console.log(fiatCar);

// 8. Trovare l’auto con prezzo esatto 15000€

const mediumCarPrice = cars.find(car => car.price === 15000);
console.log(mediumCarPrice);

// ----------------------
// FOREACH
// ----------------------

// 9. Stampare in console tutti i modelli uno per uno

cars.forEach(car => console.log(car.model));

// 10. Stampare in console una frase per ciascuna auto, tipo:
// "La BMW X3 costa 38000€"
