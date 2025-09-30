// 🔹 ARRAY DI PARTENZA

const drinks = [
    { name: "Coca Cola", type: "Soft Drink", calories: 140, caffeine: true },
    { name: "Pepsi", type: "Soft Drink", calories: 150, caffeine: true },
    { name: "Orange Juice", type: "Juice", calories: 110, caffeine: false },
    { name: "Espresso", type: "Coffee", calories: 5, caffeine: true },
    { name: "Green Tea", type: "Tea", calories: 2, caffeine: true },
    { name: "Water", type: "Natural", calories: 0, caffeine: false },
    { name: "Red Bull", type: "Energy Drink", calories: 160, caffeine: true },
    { name: "Milkshake", type: "Dessert", calories: 300, caffeine: false },
];


// ----------------------
// LUNGHEZZA & INDICI
// ----------------------

// 1. Stampa quanti drinks ci sono nell’array

console.log(drinks.length);

// 2. Stampa il nome del primo drink

const firstDrink = drinks[0];
console.log('Primo drink:', firstDrink.name)

// 3. Stampa il tipo dell’ultimo drink

const lastDrink = drinks[drinks.length - 1];
console.log('Tipo ultimo drink:', lastDrink.type)

// 4. Stampa il nome del terzo drink

const thirdDrink = drinks[2];
console.log('Terzo drink:', thirdDrink.name);

// 5. Stampa le calorie del quarto drink

const fourthDrink = drinks[3];
console.log('Calorie quarto elemento:', fourthDrink.calories);

// ----------------------
// METODI ARRAY
// ----------------------

// 6. Crea un array con solo i nomi dei drinks

const drinksNames = drinks.map(drink => drink.name);
console.log(drinksNames);

// 7. Crea un array con solo le calorie dei drinks

const drinksCalories = drinks.map(drink => drink.calories);
console.log(drinksCalories);

// 8. Filtra i drinks con meno di 100 calorie

const drinksLowCalories = drinks.filter(drink => drink.calories < 100);
console.log(drinksLowCalories);

// 9. Filtra i drinks che contengono caffeina

const drinksWithCaffeine = drinks.filter(drink => drink.caffeine);
console.log(drinksWithCaffeine);

// 10. Stampa una frase per ogni drink del tipo: "X è un Y con Z calorie"

drinks.forEach(drink => console.log(`${drink.name} è un ${drink.type} con ${drink.calories} calorie`));

// 11. Stampa indice e nome di ciascun drink

drinks.forEach((drink, i) => console.log(`Indice: ${i} - Nome: ${drink.name}`));

// 12. Trova il primo drink senza caffeina

const firstDrikNoCaffeine = drinks.find(drink => drink.caffeine !== true);
console.log(firstDrikNoCaffeine);

// 13. Trova il drink che ha 160 calorie

const drink160Calories = drinks.find(drink => drink.calories === 160);
console.log(drink160Calories);


// ----------------------
// FUNZIONI
// ----------------------

// 14. Scrivi una funzione che ritorna tutti i nomi in maiuscolo
// 15. Scrivi una funzione che ritorna tutti i drinks senza caffeina


// ----------------------
// METODI COMBINATI
// ----------------------

// 16. Ottieni i nomi dei drinks con più di 100 calorie (filter + map)
// 17. Trova il nome del primo Energy Drink (filter + map + find)
// 18. Stampa i drinks con meno di 50 calorie (filter + forEach)
// 19. Ottieni i nomi in maiuscolo dei drinks senza caffeina (filter + map)
// 20. Calcola il totale delle calorie di tutti i drinks (map + reduce)