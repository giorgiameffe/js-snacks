# 🚀 Esercizi JavaScript: Array di Oggetti e Funzioni

Questa raccolta di esercizi serve per allenarsi con **array di oggetti** in JavaScript, utilizzando i metodi `.find()`, `.filter()`, `.map()`, `.forEach()`, e le funzioni personalizzate.  
Gli esercizi sono divisi in due sezioni: **metodi array** e **ciclo for/funzioni**.

---

## 📝 Elenco Esercizi

| #   | Descrizione                                                                                     |
|-----|-------------------------------------------------------------------------------------------------|
| 1   | Trova con `.find()` lo studente che ha 22 anni                                                 |
| 2   | Trova con `.find()` il primo studente iscritto a Informatica                                   |
| 3   | Filtra con `.filter()` gli studenti con età ≥ 21                                               |
| 4   | Filtra con `.filter()` gli studenti che hanno almeno un voto pari a 30                         |
| 5   | Crea un array con solo i nomi degli studenti usando `.map()`                                   |
| 6   | Stampa nome ed età di ogni studente usando `.forEach()`                                        |
| 7   | Calcola la somma totale delle età di tutti gli studenti usando `.forEach()`                    |
| 8   | Mostra il numero totale di studenti con `.length`                                              |
| 9   | Stampa per ogni studente quanti voti ha ricevuto                                               |
| 10  | Conta quanti studenti frequentano Informatica usando `.filter()` e `.length`                  |
| 11  | Usa un ciclo `for` per stampare i nomi di tutti gli studenti                                  |
| 12  | Calcola la media delle età degli studenti con un ciclo `for`                                  |
| 13  | Crea `findStudent(name)` per trovare lo studente con un certo nome                            |
| 14  | Crea `studentsInProgress(course)` per trovare gli studenti iscritti a un certo corso          |
| 15  | Crea `printStudent()` per stampare ogni studente in formato: `Nome - Età anni - Corso`        |
| 16  | Crea `countStudents()` per restituire il numero totale di studenti                           |

---

## 🎯 Obiettivi didattici

- Ripassare l’uso dei **metodi degli array** (`find`, `filter`, `map`, `forEach`)  
- Usare **cicli for** per manipolare array manualmente  
- Creare **funzioni riutilizzabili** per filtrare e trovare elementi  
- Accedere e stampare **proprietà degli oggetti** in un array  
- Calcolare **valori aggregati** come somma e media  
- Contare elementi in base a **condizioni personalizzate**

---

## 🔹 Array di partenza

```javascript
const students = [
    { name: "Mario", age: 20, course: "Informatica", votes: [28, 30, 26] },
    { name: "Elene", age: 22, course: "Matematica", votes: [25, 27, 29] },
    { name: "Veronica", age: 19, course: "Fisica", votes: [30, 30, 28] },
    { name: "Giorgia", age: 21, course: "Informatica", votes: [24, 25, 26] }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.