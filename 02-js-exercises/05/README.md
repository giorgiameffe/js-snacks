# 📚 Esercizi JavaScript: Manipolare Array di Oggetti Libri

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi degli array di oggetti** in JavaScript, usando come esempio una lista di **libri**.  

L’obiettivo è allenarsi a **contare**, **accedere**, **trasformare**, **filtrare** e **trovare** dati in vari modi, combinando cicli e metodi degli array.

---

## 📝 Elenco esercizi

| #  | Metodo / Tipo               | Descrizione                                                                 |
|----|----------------------------|-----------------------------------------------------------------------------|
| 1  | `for`                      | Stampare tutti i titoli dei libri.                                          |
| 2  | `for`                      | Sommare tutti i prezzi dei libri.                                           |
| 3  | `for`                      | Stampare i libri pubblicati prima del 1900.                                 |
| 4  | `forEach`                  | Stampare l’autore di ogni libro.                                            |
| 5  | `map`                      | Creare un array con solo i titoli dei libri.                                 |
| 6  | `filter`                   | Ottenere tutti i libri con rating >= 90.                                    |
| 7  | `find`                     | Trovare il primo libro con rating 95.                                       |
| 8  | `map`                      | Creare un array di frasi tipo: `"[title] è un libro di [author]"`.          |
| 9  | `filter`                   | Ottenere tutti i libri del genere "Fantasy".                                 |
| 10 | `find`                     | Trovare un libro specifico (ad esempio "Moby Dick").                         |
| 11 | `forEach`                  | Stampare il titolo e il prezzo di ogni libro.                                |
| 12 | `map`                      | Creare un array con solo gli anni di pubblicazione dei libri.                |
| 13 | Accesso                    | Stampare il titolo del primo libro.                                         |
| 14 | Accesso                    | Stampare il titolo dell’ultimo libro.                                       |
| 15 | `length`                   | Stampare quanti libri ci sono nell’array.                                    |
| 16 | Accesso                    | Stampare il titolo e l’autore del penultimo libro.                           |
| 17 | Condizione                  | Verificare se l’array è vuoto e stampare un messaggio.                      |
| 18 | Misti (`filter` + `map`)    | Creare un array con i titoli dei libri che hanno rating >= 90.               |
| 19 | Misti (`filter` + `forEach`)| Stampare i libri del genere "Fiction" con frase tipo `"[title] scritto da [author]"`. |
| 20 | Misti (`filter` + `forEach`)| Stampare i titoli dei libri del genere "Fiction" che costano meno di 15€.  |

---

## 🔹 Array di partenza

```javascript
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
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.