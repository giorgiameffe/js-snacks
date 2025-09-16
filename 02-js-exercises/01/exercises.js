const products = [
    { id: "p001", name: "Laptop", category: "Elettronica", price: 1200, inStock: true },
    { id: "p002", name: "Mouse Wireless", category: "Accessori", price: 25, inStock: false },
    { id: "p003", name: "Smartphone", category: "Elettronica", price: 800, inStock: true },
    { id: "p004", name: "Tastiera Meccanica", category: "Accessori", price: 150, inStock: true },
    { id: "p005", name: "Cuffie Bluetooth", category: "Elettronica", price: 90, inStock: true },
    { id: "p006", name: "Webcam", category: "Elettronica", price: 65, inStock: false },
    { id: "p007", name: "Monitor 4K", category: "Elettronica", price: 450, inStock: true }
];

// ----------------------
// ESERCIZI: LUNGHEZZA & ACCESSO
// ----------------------

// 1. Quanti prodotti ci sono nell'array?
// TODO: Dichiara una variabile 'totalProducts' e usa il metodo .length.

const totalProducts = products.length;
console.log(`Numero totale di prodotti: ${totalProducts}`);

// 2. Accedi al primo prodotto dell'array.
// TODO: Dichiara una variabile 'firstProduct' e usa l'indice corretto.

const firstProduct = products[0];
console.log('Primo prodotto:', firstProduct);

// 3. Accedi all'ultimo prodotto dell'array.
// TODO: Dichiara una variabile 'lastProduct' e usa l'indice basato su .length.

const lastProduct = products[products.length - 1];
console.log('Ultimo prodotto:', lastProduct);

// 4. Accedi al secondo prodotto della lista.
// TODO: Dichiara una variabile 'secondProduct' e usa l'indice corretto.

const secondProduct = products[1];
console.log('Secondo prodotto:', secondProduct);

// ----------------------
// ESERCIZI: MAP
// ----------------------

// 5. Crea un array contenente solo i nomi dei prodotti.
// TODO: Usa il metodo .map() per creare un nuovo array con i nomi dei prodotti.

const productsNames = products.map(product => product.name);
console.log('Nomi dei prodotti:', productsNames);

// 6. Crea un array di stringhe descrittive, ad esempio: "Laptop - 1200€" per ogni prodotto.
// TODO: Usa il metodo .map() e i template literals per creare l'array di stringhe.

const productsDescriptions = products.map(product => `${product.name} - ${product.price}€`)
console.log('Descrizioni dei prodotti:', productsDescriptions);

// ----------------------
// ESERCIZI: FILTER
// ----------------------

// 7. Ottieni un array di tutti i prodotti che sono al momento disponibili in magazzino.
// TODO: Usa .filter() e la proprietà 'inStock' per trovare i prodotti disponibili.

const productsInStock = products.filter(product => product.inStock === true);
console.log('Prodotti disponibili:', productsInStock);

// 8. Ottieni un array di tutti i prodotti della categoria "Elettronica".
// TODO: Usa .filter() e la proprietà 'category'.

const electronicProducts = products.filter(product => product.category === 'Elettronica');
console.log('Prodotti di elettronica:', electronicProducts);

// 9. Ottieni un array di prodotti con un prezzo inferiore a 100€.
// TODO: Usa .filter() e la proprietà 'price'.

const cheapProducts = products.filter(product => product.price < 100);
console.log('Prodotti economici:', cheapProducts);

// 10. Ottieni un array dei prodotti che non sono "Elettronica" e che sono disponibili in magazzino.
// TODO: Usa .filter() con una condizione complessa che combina 'category' e 'inStock'.


console.log('Prodotti non-elettronici e disponibili:');

// ----------------------
// ESERCIZI: FIND
// ----------------------

// 11. Trova l'oggetto del prodotto con l'ID "p004".
// TODO: Usa .find() e la proprietà 'id' per trovare il prodotto specifico.


console.log('Prodotto con ID p004:');

// 12. Trova il primo prodotto che costa meno di 100€ ed è al momento disponibile.
// TODO: Usa .find() con una condizione che combina 'price' e 'inStock'.


console.log('Primo prodotto economico e disponibile:');