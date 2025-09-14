# 🎬 Esercizi JavaScript: Metodi degli Array (`map`, `filter`, `find`, `forEach`)

Questa raccolta di esercizi aiuta a fare pratica con i principali metodi per lavorare sugli **array di oggetti** in JavaScript.  
L’obiettivo è allenarsi ad **estrarre**, **filtrare**, **trovare** e **stampare** dati in vari modi.

---

## 📝 Elenco esercizi

| #  | Metodo                | Descrizione                                                                                           |
|----|----------------------|-----------------------------------------------------------------------------------------------------|
| 1  | `.map()`             | Crea un array con solo i titoli dei film.                                                           |
| 2  | `.map()`             | Crea un array di stringhe in formato: `"Titolo - Anno"`.                                            |
| 3  | `.filter()`          | Ottieni i film usciti **dopo il 2010**.                                                             |
| 4  | `.filter()`          | Ottieni tutti i film di genere **Crime**.                                                          |
| 5  | `.find()`            | Trova il film con rating **9.0**.                                                                  |
| 6  | `.find()`            | Trova il **primo film** uscito **prima del 2000**.                                                 |
| 7  | `.forEach()`         | Stampa una frase per ogni film: `"Titolo ha un voto di X"`.                                        |
| 8  | `.forEach()`         | Stampa il **numero totale** dei film nell’array.                                                   |
| 9  | `.filter()` + `.map()`| Crea un array con i titoli dei film che hanno rating **maggiore di 8.8**.                          |
| 10 | `.filter()`          | Ottieni i film con titoli **lunghi almeno 12 caratteri**.                                          |

---

## 🎯 Obiettivi didattici

- Allenarsi con i metodi:  
  - `.map()` per trasformare gli elementi di un array  
  - `.filter()` per selezionare elementi in base a condizioni  
  - `.find()` per cercare il **primo elemento** che soddisfa una condizione  
  - `.forEach()` per eseguire operazioni su ogni elemento  
- Lavorare con **array di oggetti**  
- Stampare dati formattati in console  
- Contare e filtrare risultati  

---

## 🔹 Array di partenza

```javascript
const movies = [
    { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8 },
    { title: "The Godfather", year: 1972, genre: "Crime", rating: 9.2 },
    { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6 },
    { title: "Parasite", year: 2019, genre: "Thriller", rating: 8.6 },
    { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0 },
    { title: "Pulp Fiction", year: 1994, genre: "Crime", rating: 8.9 }
];
```
---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.