// 🔹 ARRAY DI PARTENZA
const fashionItems = [
    { name: "T-Shirt", type: "Top", price: 20, size: "M" },
    { name: "Jeans", type: "Bottom", price: 50, size: "L" },
    { name: "Sneakers", type: "Shoes", price: 80, size: "42" },
    { name: "Jacket", type: "Outerwear", price: 120, size: "XL" },
    { name: "Cap", type: "Accessory", price: 15, size: "One Size" },
    { name: "Dress", type: "Top", price: 70, size: "S" },
    { name: "Sandals", type: "Shoes", price: 40, size: "39" },
    { name: "Scarf", type: "Accessory", price: 25, size: "One Size" },
];


// ----------------------
// LUNGHEZZA & INDICI
// ----------------------

// 1. Stampa quanti articoli ci sono nell’array

console.log(fashionItems.length);

// 2. Stampa il nome del primo articolo

const firstItem = fashionItems[0];
console.log(firstItem.name);

// 3. Stampa il tipo dell’ultimo articolo

const lastItem = fashionItems[fashionItems.length - 1];
console.log(lastItem.type);

// 4. Stampa il prezzo del terzo articolo

const thirdItem = fashionItems[2];
console.log(thirdItem.price);

// 5. Stampa la taglia del quarto articolo

const forthItem = fashionItems[3];
console.log(forthItem.size);


// ----------------------
// CICLI
// ----------------------

// 6. Stampa tutti i nomi degli articoli

for (let i = 0; i < fashionItems.length; i++) {

    console.log(fashionItems[i].name);
}

// 7. Calcola la somma dei prezzi di tutti gli articoli

let sum = 0;

for (let i = 0; i < fashionItems.length; i++) {

    sum += fashionItems[i].price;
}

console.log(sum);

// 8. Trova l’articolo più costoso

let expensiveItem = fashionItems[0];

for (let i = 0; i < fashionItems.length; i++) {

    if (fashionItems[i].price > expensiveItem.price) {

        expensiveItem = fashionItems[i];
    }
}

console.log('Articolo più costoso:', expensiveItem);

// 9. Trova l’articolo meno costoso

let cheapItem = fashionItems[0];

for (let i = 0; i < fashionItems.length; i++) {

    if (fashionItems[i].price < cheapItem.price) {

        cheapItem = fashionItems[i];
    }
}

console.log('Articolo meno costoso:', cheapItem);


// ----------------------
// ARRAY
// ----------------------

// 10. Crea un nuovo array con solo i nomi degli articoli

const itemsNames = fashionItems.map(i => i.name);
console.log(itemsNames);

// 11. Crea un nuovo array con solo i prezzi degli articoli

const itemsPrices = fashionItems.map(i => i.price);
console.log(itemsPrices);

// 12. Trova tutti gli articoli che costano meno di 50

const cheapItems = fashionItems.filter(i => i.price < 50);
console.log(cheapItems);

// 13. Trova tutti gli articoli di tipo "Shoes"

const shoes = fashionItems.filter(i => i.type === 'Shoes');
console.log(shoes);

// 14. Trova il primo articolo di tipo "Accessory"

const firstAccessory = fashionItems.find(i => i.type === 'Accessory');
console.log(firstAccessory);

// 15. Calcola il totale dei prezzi di tutti gli articoli

const sumPrices = fashionItems.reduce((tot, a) => tot + a.price, 0);
console.log(sumPrices);

// ----------------------
// FUNZIONI
// ----------------------

// 16. Scrivi una funzione che ritorna tutti i nomi in maiuscolo

function getUppercaseNames(arr) {

    arr.forEach(e => console.log(e.name.toUpperCase()));
}

getUppercaseNames(fashionItems);

// 17. Scrivi una funzione che ritorna tutti gli articoli di un certo tipo passato come parametro

function getTypes(arr, type) {

    return arr.filter(e => e.type === type);
}

console.log(getTypes(fashionItems, "Shoes"));

// 18. Scrivi una funzione che ritorna tutti gli articoli sotto un certo prezzo passato come parametro

function getPrices(arr, price) {

    return arr.filter(e => e.price < price);
}

console.log(getPrices(fashionItems, 50));


// ----------------------
// COMBINAZIONI
// ----------------------

// 19. Ottieni i nomi degli articoli che costano più di 60
// 20. Trova il nome del primo articolo con taglia "One Size"
// 21. Stampa tutti gli articoli con prezzo inferiore a 30
// 22. Crea un nuovo array con i prezzi raddoppiati
// 23. Calcola il totale dei prezzi degli articoli di tipo "Top"



// ----------------------
// BONUS
// ----------------------

// ----------------------
// PUSH & UNSHIFT (aggiungere articoli)
// ----------------------

// 24. Aggiungi un articolo alla fine dell'array con push
// 25. Aggiungi un articolo all'inizio dell'array con unshift


// ----------------------
// POP & SHIFT (rimuovere articoli)
// ----------------------

// 26. Rimuovi l'ultimo articolo con pop e stampa il nome dell'articolo rimosso
// 27. Rimuovi il primo articolo con shift e stampa il nome dell'articolo rimosso


// ----------------------
// COMBINAZIONI AVANZATE
// ----------------------

// 28. Aggiungi due articoli alla fine e rimuovi il primo: stampa il nuovo array
// 29. Rimuovi due articoli dall'inizio e aggiungi uno nuovo alla fine: stampa il nuovo array
// 30. Rimuovi l'ultimo articolo e aggiungi uno nuovo all'inizio in un'unica sequenza: stampa l'array finale