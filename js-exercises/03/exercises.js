// ====================
// Esercizio 1: Filtrare numeri pari
// ====================
// Consegna: Dato un array di numeri, crea un nuovo array che contenga solo i numeri pari usando .filter()

const numbers = [12, 3, 28, 6, 8, 17];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


// ====================
// Esercizio 2: Sommare tutti i numeri
// ====================
// Consegna: Usando .reduce(), calcola la somma di tutti i numeri dell'array.

const sumNumbers = numbers.reduce((acc, currentValue) => {

    return acc + currentValue;
}, 0)

console.log(sumNumbers);


// ====================
// Esercizio 3: Filtrare prodotti costosi
// ====================
// Consegna: Dato un array di oggetti prodotto con proprietà nome e prezzo,
// restituisci solo i prodotti con prezzo superiore a 50.

const products = [
    {
        name: "Boardgame",
        price: 50
    },
    {
        name: "Computer",
        price: 500
    },
    {
        name: "Table",
        price: 100
    }
];

const filteredProducts = products.filter(product => product.price > 50);
console.log(filteredProducts);


// ====================
// Esercizio 4: Ottenere solo i nomi dei prodotti
// ====================
// Consegna: Usando .map(), crea un array contenente solo i nomi dei prodotti.

const productsName = products.map(product => product.name);
console.log(productsName);


// ====================
// Esercizio 5: Calcolare il prezzo totale
// ====================
// Consegna: Usando .reduce(), calcola la somma dei prezzi di tutti i prodotti.

