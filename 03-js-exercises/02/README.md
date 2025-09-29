# 🐾 Esercizi JavaScript: Manipolare Array di Oggetti Pets

Questa raccolta di esercizi serve per fare pratica con i principali **metodi sugli array di oggetti** in JavaScript, usando come esempio una lista di **pets** (cani, gatti, conigli, pappagalli).  

L’obiettivo è allenarsi a **iterare**, **accedere**, **trasformare**, **filtrare**, **trovare** e **combinare** dati in vari modi.  

---

## 📝 Elenco esercizi

| #  | Tipo / Argomento          | Descrizione                                                                 |
|----|---------------------------|-----------------------------------------------------------------------------|
| 1  | `for`                     | Stampare tutti i nomi dei pets.                                              |
| 2  | `for` + somma             | Sommare tutte le età dei pets.                                               |
| 3  | `for` + condizione        | Stampare i pets che pesano più di 10 kg.                                     |
| 4  | `forEach`                 | Stampare tipo e paese di ogni pet.                                           |
| 5  | `map`                     | Creare un array con solo i nomi dei pets.                                    |
| 6  | `filter`                  | Ottenere tutti i gatti (`type === "Cat"`).                                   |
| 7  | `find`                    | Trovare il primo pet con meno di 2 anni.                                     |
| 8  | `forEach` + template      | Stampare frasi tipo `"Buddy è un Dog proveniente da USA"`.                   |
| 9  | `filter`                  | Ottenere solo i pets provenienti dagli USA.                                  |
| 10 | `find`                    | Trovare un pet specifico (ad esempio `"Buddy"`).                             |
| 11 | `forEach`                 | Stampare il nome e l’età di ogni pet.                                        |
| 12 | `map`                     | Creare un array con solo i pesi dei pets.                                    |
| 13 | `reduce`                  | Calcolare la somma totale dei pesi.                                          |
| 14 | Accesso                   | Stampare il nome del primo pet.                                              |
| 15 | Accesso                   | Stampare il nome dell’ultimo pet.                                            |
| 16 | `length`                  | Stampare quanti pets ci sono nell’array.                                     |
| 17 | Accesso                   | Stampare nome e tipo del penultimo pet.                                      |
| 18 | `filter` + `map`          | Creare un array con i nomi dei pets che pesano meno di 10 kg.                |
| 19 | `filter` + `forEach`      | Stampare i cani con frase tipo `"Il cane Max ha 8 anni"`.                    |
| 20 | `filter` + `map`          | Stampare i nomi dei pets con età >= 3 e peso <= 7 kg.                        |

---

## 🔹 Array di partenza

```javascript
const pets = [
  { name: "Buddy", type: "Dog", age: 4, country: "USA", weight: 25 },
  { name: "Milo", type: "Cat", age: 2, country: "UK", weight: 6 },
  { name: "Charlie", type: "Dog", age: 7, country: "Canada", weight: 30 },
  { name: "Luna", type: "Cat", age: 3, country: "Italy", weight: 5 },
  { name: "Rocky", type: "Dog", age: 6, country: "USA", weight: 28 },
  { name: "Bella", type: "Rabbit", age: 1, country: "France", weight: 2 },
  { name: "Kiwi", type: "Parrot", age: 5, country: "Brazil", weight: 1 },
  { name: "Max", type: "Dog", age: 8, country: "Germany", weight: 35 },
  { name: "Oliver", type: "Cat", age: 4, country: "Spain", weight: 7 },
  { name: "Coco", type: "Parrot", age: 2, country: "Mexico", weight: 1 }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.