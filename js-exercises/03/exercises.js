// Esercizio 1: Filtrare numeri pari
// Consegna: Dato un array di numeri, crea un nuovo array che contenga solo i numeri pari usando .filter()

const numbers = [12, 3, 28, 6, 8, 23];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


// Esercizio 2: Sommare tutti i numeri
// Consegna: Usando .reduce(), calcola la somma di tutti i numeri dell'array.

const sumNumbers = numbers.reduce((acc, currentValue) => {

    return acc + currentValue;
}, 0)

console.log(sumNumbers);


// Esercizio 3: Filtrare prodotti costosi
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


// Esercizio 4: Ottenere solo i nomi dei prodotti
// Consegna: Usando .map(), crea un array contenente solo i nomi dei prodotti.

const productsName = products.map(product => product.name);
console.log(productsName);


// Esercizio 5: Calcolare il prezzo totale
// Consegna: Usando .reduce(), calcola la somma dei prezzi di tutti i prodotti.

const totalPrice = products.reduce((acc, product) => {

    return acc + product.price;
}, 0)

console.log(totalPrice);


// Esercizio 6: Trovare un elemento
// Consegna: Usa .find() per ottenere il primo numero maggiore di 20 nell'array.

const foundNumber = numbers.find(number => number > 20);
console.log(foundNumber);


// Esercizio 7: Controllare se un valore esiste
// Consegna: Usa .some() per verificare se nell'array ci sono numeri negativi.

const verifyNegativeNumbers = numbers.some(number => number < 0);
console.log(verifyNegativeNumbers);


// Esercizio 8: Studenti con nomi in maiuscolo e voti alti
// Consegna: Ottieni solo gli studenti con voto >= 7 e trasforma il loro nome in maiuscolo.

const studentsList = [
    {
        name: "Luca",
        grade: 8
    },
    {
        name: "Marco",
        grade: 6
    },
    {
        name: "Sara",
        grade: 9
    },
    {
        name: "Anna",
        grade: 5
    }
];

const goodStudents = studentsList.filter(student => student.grade >= 7)
    .map(student => student.name.toUpperCase());
console.log(goodStudents);


// Esercizio 9: Somma prezzi prodotti disponibili
// Consegna: Filtra i prodotti disponibili e calcola la somma totale dei loro prezzi.

const productStock = [
    {
        name: "Tablet",
        price: 200,
        inStock: true
    },
    {
        name: "Telefono",
        price: 350,
        inStock: false
    },
    {
        name: "Caricatore",
        price: 20,
        inStock: true
    }
];

const totPriceAvailableProducts = productStock.filter(product => product.inStock)
    .reduce((acc, product) => {

        return acc + product.price
    }, 0)

console.log(totPriceAvailableProducts);


// Esercizio 10: Stampare nomi di prodotti scontati
// Consegna: Filtra i prodotti con prezzo >= 100, applica uno sconto del 20%,
// poi stampa nome e nuovo prezzo in console.

const items = [
    {
        name: "Laptop",
        price: 1000
    },
    {
        name: "Stampante",
        price: 80
    },
    {
        name: "TV",
        price: 500
    }
];

const discountItems = items.filter(item => item.price >= 100)
    .map(item => ({
        ...item,
        price: item.price * 0.8
    }))

discountItems.forEach(item => {

    console.log(`Nome: ${item.name}, Prezzo: ${item.price}`)
})