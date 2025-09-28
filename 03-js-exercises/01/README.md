# 🎨 Esercizi JavaScript: Manipolare Array di Oggetti Pittori

Questa raccolta di esercizi serve per fare pratica con i principali **metodi sugli array di oggetti** in JavaScript, usando come esempio una lista di **pittori famosi**.  

L’obiettivo è allenarsi a **iterare**, **accedere**, **trasformare**, **filtrare**, **trovare** e **combinare** dati in vari modi. 

---

## 📝 Elenco esercizi

| #  | Tipo / Argomento        | Descrizione                                                                 |
|----|-------------------------|-----------------------------------------------------------------------------|
| 1  | `length`                  | Stampare quanti pittori ci sono nell’array.                                 |
| 2  | Accesso                 | Stampare il nome del primo pittore.                                         |
| 3  | Accesso                 | Stampare il movimento dell’ultimo pittore.                                  |
| 4  | Accesso (dot)           | Stampare il nome del secondo pittore usando la **dot notation**.             |
| 5  | Accesso (bracket)       | Stampare l’anno di nascita del terzo pittore usando la **bracket notation**. |
| 6  | `map`                     | Creare un array con solo i nomi dei pittori.                                |
| 7  | `map`                     | Creare un array con le età di ciascun pittore (death - birth).              |
| 8  | `filter`                  | Filtrare i pittori nati prima del 1600.                                     |
| 9  | `filter`                  | Filtrare i pittori del movimento "Baroque".                                 |
| 10 | `forEach `                | Stampare una frase per ogni pittore, tipo `"X appartiene al movimento Y"`.  |
| 11 | `forEach` + index         | Stampare l’indice e il nome di ciascun pittore.                             |
| 12 | `find`                  | Trovare il primo pittore del movimento "Cubism".                            |
| 13 | `find `                   | Trovare il pittore nato nel 1881.                                           |
| 14 | Funzione + `map`          | Scrivere una funzione che ritorna tutti i nomi in maiuscolo.                |
| 15 | Funzione + `filter`      | Scrivere una funzione che ritorna tutti i pittori nati dopo il 1800.        |
| 16 | `filter` + `map`            | Ottenere i nomi dei pittori nati dopo il 1850.                              |
| 17 | `filter` + `map` + `find`     | Trovare il nome del primo pittore impressionista.                           |
| 18 | `filter` + `forEach`        | Stampare i pittori che hanno vissuto meno di 50 anni.                       |
| 19 | `filter` + `map`            | Ottenere i nomi in maiuscolo dei pittori nati prima del 1600.               |
| 20 | `map` + `reduce`            | Calcolare l’età media di tutti i pittori.                                   |

---

## 🔹 Array di partenza

```javascript
const painters = [
  { name: "Leonardo da Vinci", movement: "Renaissance", birth: 1452, death: 1519 },
  { name: "Michelangelo", movement: "Renaissance", birth: 1475, death: 1564 },
  { name: "Caravaggio", movement: "Baroque", birth: 1571, death: 1610 },
  { name: "Rembrandt", movement: "Baroque", birth: 1606, death: 1669 },
  { name: "Claude Monet", movement: "Impressionism", birth: 1840, death: 1926 },
  { name: "Vincent van Gogh", movement: "Post-Impressionism", birth: 1853, death: 1890 },
  { name: "Pablo Picasso", movement: "Cubism", birth: 1881, death: 1973 },
  { name: "Jackson Pollock", movement: "Abstract Expressionism", birth: 1912, death: 1956 },
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.