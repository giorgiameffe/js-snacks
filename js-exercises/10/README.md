# 📚 Esercizi JavaScript: Metodi degli Array (`map`, `filter`, `find`, `forEach`)

Questa raccolta di esercizi aiuta a fare pratica con i principali metodi per lavorare sugli **array di oggetti** in JavaScript.  
L’obiettivo è allenarsi ad **estrarre**, **filtrare**, **trovare** e **stampare** dati in vari modi.

---

## 📝 Elenco esercizi

| #  | Metodo        | Descrizione                                                                                     |
|----|--------------|-------------------------------------------------------------------------------------------------|
| 1  | `.length`    | Trovare quanti libri ci sono nell'array.                                                        |
| 2  | Accesso      | Accedere al **primo libro**.                                                                    |
| 3  | Accesso      | Accedere all'**ultimo libro**.                                                                  |
| 4  | Accesso      | Accedere al **penultimo libro**.                                                                |
| 5  | Dot notation | Stampare **titolo e autore del primo libro** usando dot notation.                               |
| 6  | Bracket notation | Stampare **titolo e autore del secondo libro** usando bracket notation.                      |
| 7  | `.map()`     | Creare un array con tutti i **titoli dei libri**.                                              |
| 8  | `.map()`     | Creare un array di stringhe descrittive tipo: `"Il nome della rosa di Umberto Eco, 512 pagine, rating 4.8"`. |
| 9  | `.filter()`  | Ottenere libri con più di **300 pagine**.                                                       |
| 10 | `.filter()`  | Ottenere libri pubblicati **dopo il 1950**.                                                    |
| 11 | `.filter()`  | Filtrare tutti i libri che **non sono di Tolkien**.                                            |
| 12 | `.filter()`  | Ottenere libri con **rating maggiore di 4.7**.                                                 |
| 13 | `.find()`    | Trovare il libro intitolato `"1984"`.                                                          |
| 14 | `.find()`    | Trovare il libro con **esattamente 223 pagine**.                                               |
| 15 | `.find()`    | Trovare il primo libro con **rating 4.9**.                                                    |
| 16 | `.forEach()` | Stampare tutti i **titoli uno per uno**.                                                       |
| 17 | `.forEach()` | Stampare una frase per ciascun libro, tipo: `"Il libro 'Il Signore degli Anelli' ha 1216 pagine"`. |
| 18 | `.forEach()` | Stampare `"Titolo: [title], Autore: [author], Anno: [year]"` per ciascun libro.                |
| 19 | Mix        | Stampare **titolo e rating dell'ultimo libro**.                                                |
| 20 | Mix         | Creare un array con i **titoli dei libri pubblicati prima del 1950**.                          |

---

## 🎯 Obiettivi didattici

- Allenarsi con i metodi:  
  - `.map()` per trasformare gli elementi di un array  
  - `.filter()` per selezionare elementi in base a condizioni  
  - `.find()` per cercare il **primo elemento** che soddisfa una condizione  
  - `.forEach()` per eseguire operazioni su ogni elemento  
- Lavorare con **array di oggetti**  
- Stampare dati formattati in console  
- Accedere al **primo, ultimo e penultimo elemento**  
- Contare e filtrare risultati usando `.length`  

---

## 🔹 Array di partenza

```javascript
const books = [
    { title: "Il nome della rosa", author: "Umberto Eco", year: 1980, pages: 512, rating: 4.8 },
    { title: "1984", author: "George Orwell", year: 1949, pages: 328, rating: 4.7 },
    { title: "Harry Potter e la Pietra Filosofale", author: "J.K. Rowling", year: 1997, pages: 223, rating: 4.9 },
    { title: "Il Signore degli Anelli", author: "J.R.R. Tolkien", year: 1954, pages: 1216, rating: 4.9 },
    { title: "Il piccolo principe", author: "Antoine de Saint-Exupéry", year: 1943, pages: 96, rating: 4.6 }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.