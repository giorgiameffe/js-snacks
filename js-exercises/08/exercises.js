// 🔹 ARRAY DI PARTENZA

const movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2 },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
    { title: "Parasite", year: 2019, genre: "Thriller", rating: 8.6 },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 }
];

// ================================
// 📝 ESERCIZI
// ================================

// 1. Usa .map() per creare un array con solo i titoli dei film.

const moviesTitles = movies.map(movie => movie.title);
console.log(moviesTitles);

// 2. Usa .map() per creare un array di stringhe in formato: "Titolo - Anno".

const stringArray = movies.map(movie => `${movie.title} - ${movie.year}`);
console.log(stringArray);

// 3. Usa .filter() per ottenere i film usciti dopo il 2010.

const recentMovies = movies.filter(movie => movie.year > 2010);
console.log(recentMovies);

// 4. Usa .filter() per ottenere tutti i film di genere "Crime".

// 5. Usa .find() per trovare il film con rating 9.0.

// 6. Usa .find() per trovare il primo film uscito prima del 2000.

// 7. Usa .forEach() per stampare: "Titolo ha un voto di X" per ogni film.

// 8. Usa .forEach() per stampare il numero totale dei film nell'array.

// 9. Usa .filter() e .map() per creare un array con i titoli dei film con rating > 8.8.

// 10. Usa .filter() per ottenere i film con titoli lunghi almeno 12 caratteri.
