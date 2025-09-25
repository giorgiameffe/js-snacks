// 🔹 ARRAY DI PARTENZA

const foods = [
    { name: "Pizza Margherita", type: "Italian", calories: 850, price: 8, rating: 92 },
    { name: "Sushi Mix", type: "Japanese", calories: 600, price: 15, rating: 95 },
    { name: "Cheeseburger", type: "American", calories: 900, price: 7, rating: 85 },
    { name: "Paella", type: "Spanish", calories: 750, price: 12, rating: 90 },
    { name: "Croissant", type: "French", calories: 300, price: 3, rating: 88 },
    { name: "Pad Thai", type: "Thai", calories: 700, price: 10, rating: 91 },
    { name: "Falafel", type: "Middle Eastern", calories: 400, price: 6, rating: 89 },
    { name: "Tacos", type: "Mexican", calories: 500, price: 5, rating: 87 },
    { name: "Ramen", type: "Japanese", calories: 550, price: 9, rating: 93 },
    { name: "Gelato", type: "Italian", calories: 250, price: 4, rating: 94 }
];


// ----------------------
// CICLO FOR
// ----------------------

// 1. Usa un ciclo for per stampare tutti i nomi dei cibi.

for (let i = 0; i < foods.length; i++) {

    console.log(foods[i].name)
}

// 2. Usa un ciclo for per sommare tutte le calorie e stampare il totale.

let sum = 0;

for (let i = 0; i < foods.length; i++) {

    sum += foods[i].calories;
}

console.log('Somma calorie:', sum);

// 3. Usa un ciclo for per stampare i cibi che costano più di 10€.

for (let i = 0; i < foods.length; i++) {

    if (foods[i].price > 10) {
        console.log(foods[i])
    }
}

// ----------------------
// METODI ARRAY
// ----------------------

// 4. Usa forEach() per stampare il tipo di ogni cibo.

foods.forEach(food => console.log(food.type));

// 5. Usa map() per creare un array con solo i nomi.

const foodsNames = foods.map(food => food.name);
console.log(foodsNames);

// 6. Usa filter() per ottenere i cibi con rating >= 90.

const goodFoods = foods.filter(food => food.rating >= 90);
console.log(goodFoods);

// 7. Usa find() per ottenere il primo cibo con meno di 400 calorie.

const firstLowCalories = foods.find(food => food.calories < 400);
console.log(firstLowCalories);

// 8. Usa map() per creare frasi del tipo "[name] è un piatto [type]".

const foodsDescriptions = foods.map(food => `${food.name} è un piatto ${food.type}`);
console.log(foodsDescriptions);

// 9. Usa filter() per ottenere solo i cibi giapponesi.

const japaneseFoods = foods.filter(food => food.type === 'Japanese');
console.log(japaneseFoods);

// 10. Usa find() per cercare un cibo specifico (es. "Ramen")

const ramen = foods.find(food => food.name === 'Ramen');
console.log(ramen);

// 11. Usa forEach() per stampare nome e prezzo di ogni cibo.

foods.forEach(food => console.log(`Nome: ${food.name} - Prezzo: ${food.price} €`));

// 12. Usa map() per creare un array con solo le calorie.

const calories = foods.map(food => food.calories);
console.log(calories);

// 13. Usa reduce() per calcolare la somma totale dei prezzi di tutti i cibi.

const sumPrices = foods.reduce((tot, currentFood) => tot += currentFood.price, 0);
console.log('Somma prezzi:', sumPrices);

// ----------------------
// LENGTH & ACCESSO
// ----------------------

// 14. Stampa il nome del primo cibo.

const firstFood = foods[0];

console.log(firstFood.name);

// 15. Stampa il nome dell’ultimo cibo.

const lastFood = foods[foods.length - 1];

console.log(lastFood.name);

// 16. Stampa quanti cibi ci sono nell’array.

console.log('Numero di cibi:', foods.length)

// 17. Stampa nome e tipo del penultimo cibo.

const secondLastFood = foods[foods.length - 2];

console.log(`Nome: ${secondLastFood.name} - Tipo ${secondLastFood.type}`);

// ----------------------
// METODI COMBINATI
// ----------------------

// 18. Usa filter() + map() per creare un array con i nomi dei cibi con calorie < 600.

const foodsUnder600 = foods
    .filter(food => food.calories < 600)
    .map(food => food.name);

console.log(foodsUnder600);


// 19. Usa filter() per selezionare i cibi italiani e forEach() per stampare frasi tipo: "Il piatto [name] costa [price]€".

const italianFoods = foods.filter(food => food.type === 'Italian');

italianFoods.forEach(food => console.log(`Il piatto ${food.name} costa ${food.price} €`));

// 20. Usa filter() + forEach() per stampare solo i nomi dei cibi con rating >= 90 e prezzo <= 10€.

const goodAndEconomicFoods = foods.filter(food => food.rating >= 90 && food.price <= 10);

goodAndEconomicFoods.forEach(food => console.log(food.name));