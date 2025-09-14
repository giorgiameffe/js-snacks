// 🔹 ARRAY DI PARTENZA

const books = [
    { title: "Il nome della rosa", author: "Umberto Eco", year: 1980, pages: 512, rating: 4.8 },
    { title: "1984", author: "George Orwell", year: 1949, pages: 328, rating: 4.7 },
    { title: "Harry Potter e la Pietra Filosofale", author: "J.K. Rowling", year: 1997, pages: 223, rating: 4.9 },
    { title: "Il Signore degli Anelli", author: "J.R.R. Tolkien", year: 1954, pages: 1216, rating: 4.9 },
    { title: "Il piccolo principe", author: "Antoine de Saint-Exupéry", year: 1943, pages: 96, rating: 4.6 }
];

// ----------------------
// LENGTH & ACCESSO ELEMENTI
// ----------------------

// 1. Quanti libri ci sono nell'array?

const booksNumber = books.length;
console.log(`Ci sono ${booksNumber} libri`);

// 2. Accedere al primo libro

const firstBook = books[0];
console.log(firstBook);

// 3. Accedere all'ultimo libro

// 4. Accedere al penultimo libro


// ----------------------
// DOT NOTATION & BRACKET NOTATION
// ----------------------

// 5. Stampare titolo e autore del primo libro usando dot notation

// 6. Stampare titolo e autore del secondo libro usando bracket notation

// ----------------------
// MAP
// ----------------------

// 7. Creare un array con tutti i titoli dei libri

// 8. Creare un array di stringhe descrittive tipo:
// "Il nome della rosa di Umberto Eco, 512 pagine, rating 4.8"

// ----------------------
// FILTER
// ----------------------

// 9. Ottenere libri con più di 300 pagine

// 10. Ottenere libri pubblicati dopo il 1950

// 11. Filtrare tutti i libri che non sono di Tolkien

// 12. Ottenere libri con rating maggiore di 4.7

// ----------------------
// FIND
// ----------------------

// 13. Trovare il libro intitolato "1984"

// 14. Trovare il libro con esattamente 223 pagine

// 15. Trovare il primo libro con rating 4.9

// ----------------------
// FOREACH
// ----------------------

// 16. Stampare tutti i titoli uno per uno

// 17. Stampare una frase per ciascun libro, tipo:
// "Il libro 'Il Signore degli Anelli' ha 1216 pagine"

// 18. Stampare "Titolo: [title], Autore: [author], Anno: [year]" per ciascun libro

// ----------------------
// MIXED EXERCISES
// ----------------------

// 19. Stampare titolo e rating dell'ultimo libro

// 20. Creare un array con i titoli dei libri pubblicati prima del 1950