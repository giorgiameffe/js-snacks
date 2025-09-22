// 🔹 ARRAY DI PARTENZA

const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Fiction", rating: 88, price: 10 },
    { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian", rating: 92, price: 15 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction", rating: 95, price: 12 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance", rating: 90, price: 8 },
    { title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure", rating: 85, price: 20 },
    { title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical", rating: 93, price: 25 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction", rating: 85, price: 18 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy", rating: 96, price: 14 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954, genre: "Fantasy", rating: 98, price: 35 },
    { title: "The Book Thief", author: "Markus Zusak", year: 2005, genre: "Historical", rating: 90, price: 16 }
];


// ----------------------
// CICLO FOR
// ----------------------

// 1. Stampare tutti i titoli dei libri
// Usa un ciclo `for` per stampare tutti i titoli dei libri.

for (let i = 0; i < books.length; i++) {

    console.log(books[i].title);
}

// 2. Sommare tutti i prezzi dei libri
// Usa un ciclo `for` per sommare il prezzo di tutti i libri.

let sum = 0;

for (let i = 0; i < books.length; i++) {

    const currentBook = books[i];

    sum += currentBook.price;
}

console.log('Somma prezzi:', sum);

// 3. Stampare i libri usciti prima del 1900
// Usa un ciclo `for` per trovare e stampare i libri pubblicati prima del 1900.

for (let i = 0; i < books.length; i++) {

    const currentBook = books[i];

    if (currentBook.year < 1900) {
        console.log(currentBook);
    }
}


// ----------------------
// METODI ARRAY
// ----------------------

// 4. Stampare l’autore di ogni libro
// Usa il metodo `forEach` per stampare l’autore di ogni libro.

books.forEach(book => console.log('Autori:', book.author));

// 5. Creare un array con solo i titoli dei libri
// Usa il metodo `map` per creare un nuovo array contenente solo i titoli dei libri.

const booksTitles = books.map(book => book.title);
console.log(booksTitles);

// 6. Filtrare i libri con rating >= 90
// Usa il metodo `filter` per ottenere un array con i libri che hanno un rating maggiore o uguale a 90.

const goodBooks = books.filter(book => book.rating >= 90);
console.log(goodBooks);

// 7. Trova il primo libro con rating 95
// Usa il metodo `find` per ottenere il primo libro con un rating di 95.

const findBook = books.find(book => book.rating === 95);
console.log(findBook);

// 8. Creare una frase del tipo "[title] è un libro di [author]"
// Usa il metodo `map` per creare un array di frasi che contengono il titolo e l'autore di ogni libro.

const booksDescriptions = books.map(book => `${book.title} è un libro di ${book.author}`);
console.log(booksDescriptions);

// 9. Ottenere solo i libri del genere "Fantasy"
// Usa il metodo `filter` per ottenere tutti i libri del genere "Fantasy".

const fantasyBooks = books.filter(book => book.genre === 'Fantasy');
console.log(fantasyBooks);

// 10. Trovare un libro specifico (ad esempio "Moby Dick")
// Usa il metodo `find` per cercare un libro specifico per titolo (ad esempio "Moby Dick").

const findMobyDick = books.find(book => book.title === 'Moby Dick');
console.log(findMobyDick);

// 11. Stampare il titolo e il prezzo di ogni libro
// Usa `forEach` per stampare il titolo e il prezzo di ogni libro.

books.forEach(book => console.log(`Titolo: ${book.title} - Prezzo: ${book.price}€`));

// 12. Creare un array con solo gli anni di pubblicazione dei libri
// Usa il metodo `map` per creare un array contenente solo gli anni di pubblicazione dei libri.

const booksYears = books.map(book => book.year);
console.log(booksYears);


// ----------------------
// LENGTH & ACCESSO
// ----------------------

// 13. Accesso al primo elemento – Stampare il titolo del primo libro
// Usa l'accesso tramite indice per ottenere il primo libro e stampare il suo titolo.

const firstBook = books[0];
console.log(firstBook.title);

// 14. Accesso all'ultimo elemento – Stampare il titolo dell'ultimo libro
// Usa l'accesso tramite indice per ottenere l'ultimo libro e stampare il suo titolo.

const lastBook = books[books.length - 1];
console.log(lastBook.title)

// 15. Stampare la lunghezza dell'array – Stampare quanti libri ci sono nell'array
// Usa la proprietà `length` per ottenere il numero di libri presenti nell'array.

console.log('Numero libri:', books.length);

// 16. Accesso al penultimo elemento – Stampare il titolo e l'autore del penultimo libro
// Usa l'accesso tramite indice per ottenere il penultimo libro e stampare il suo titolo e autore.

const secondLastBook = books[books.length - 1];
console.log(`Libro: ${secondLastBook.title} - Autore: ${secondLastBook.author}`);

// 17. Verifica se l'array è vuoto – Controlla se l'array `books` è vuoto e stampare un messaggio
// Verifica se l'array è vuoto e stampare un messaggio appropriato.

if (books.length === 0) {
    console.log("L'array è vuoto");
} else {
    console.log("L'array contiene dei libri");
}


// ----------------------
// MISTI
// ----------------------

// 18. Creare un array con i titoli dei libri che hanno rating >= 90
// Usa `filter()` per selezionare i libri con rating >= 90 e poi `map()` per ottenere solo i titoli.

const highRatingBooks = books.filter(book => book.rating >= 90).map(book => book.title);
console.log(highRatingBooks);

// 19. Stampare con `forEach()` i libri del genere "Fiction" mostrando una frase tipo:
// "[title] scritto da [author]"
// Usa `filter()` per selezionare i libri fantasy e poi `forEach()` per stampare la frase per ciascuno.

const fictionBooks = books.filter(book => book.genre === 'Fiction');

fictionBooks.forEach(book => console.log(`${book.title} scritto da ${book.author}`));

// 20. Stampare con `forEach` solo i titoli dei libri del genere "Fiction" che costano meno di 15€
// Usa `filter()` per selezionare i libri che soddisfano entrambe le condizioni e poi `forEach()` per stampare solo i titoli.

const cheapFictionBooks = books.filter(book => book.genre === 'Fiction' && book.price < 15);

cheapFictionBooks.forEach(book => console.log(`Titoli: ${book.title}`));