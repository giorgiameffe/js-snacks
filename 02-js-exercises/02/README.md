# 🏙️ Esercizi JavaScript: Metodi degli Array con Città

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi degli array di oggetti** in JavaScript, usando come esempio una lista di **città**.  

L’obiettivo è allenarsi a **contare**, **accedere**, **trasformare**, **filtrare** e **trovare** dati in vari modi.

---

## 📝 Elenco esercizi

| #  | Metodo / Tipo       | Descrizione                                                                 |
|----|-------------------|-----------------------------------------------------------------------------|
| 1  | `for`             | Stampare i nomi di tutte le città.                                         |
| 2  | `for`             | Stampare nome e paese di tutte le città.                                   |
| 3  | `for`             | Calcolare la popolazione totale di tutte le città.                         |
| 4  | Funzione          | Funzione che prende una città e stampa: `"La città [name] si trova in [country]"`. |
| 5  | Funzione          | Funzione che restituisce un array con i nomi di tutte le città.            |
| 6  | Funzione          | Funzione che filtra le città con rating >= 4.8.                             |
| 7  | `map`             | Creare un array con le stringhe: `"Nome (Paese)"`.                          |
| 8  | `map`             | Creare un array con solo le popolazioni delle città.                        |
| 9  | `map`             | Creare un array di frasi tipo: `"[name] ha [population] abitanti su [area] km²"`. |
| 10 | `filter`          | Ottenere le città con più di 5 milioni di abitanti.                         |
| 11 | `filter`          | Ottenere le città con area maggiore di 2000 km².                             |
| 12 | `filter`          | Ottenere le città che non sono in Italia.                                   |
| 13 | `find`            | Trovare la prima città con popolazione esattamente 5230000.                 |
| 14 | `find`            | Trovare la città che si chiama `"Parigi"`.                                   |
| 15 | `forEach`         | Stampare tutte le città con formato: `"[name], [country], [population] abitanti"`. |
| 16 | `forEach`         | Stampare solo i nomi delle città.                                           |
| 17 | `forEach`         | Stampare per ciascuna città una frase: `"[name] ha rating [rating]"`.       |
| 18 | Misti (`filter`+`map`) | Creare un array di nomi delle città con rating >= 4.8.                    |
| 19 | Misti (`filter`+`forEach`) | Stampare con `forEach` tutte le città con più di 5 milioni di abitanti. |
| 20 | Misti (`funzione`+`filter`+`map`) | Funzione che restituisce un array di nomi delle città con popolazione > 5 milioni e rating > 4.7. |

---

## 🎯 Obiettivi didattici

- Allenarsi con i metodi degli array:
  - `.map()` → **trasforma** un array in un altro array  
  - `.filter()` → **seleziona** elementi secondo una condizione  
  - `.find()` → **trova il primo elemento** che soddisfa una condizione  
  - `.forEach()` → **iterazione** su ogni elemento senza creare un nuovo array  
- Allenarsi con **ciclo for** per elaborazioni manuali  
- Scrivere **funzioni** riutilizzabili  
- Combinare più metodi array in esercizi **misti**  
- Stampare dati in console usando **template literals**  

---

## 🔹 Array di partenza

```javascript
const cities = [
    { name: "Roma", country: "Italia", population: 2873000, area: 1285, rating: 4.8 },
    { name: "Tokyo", country: "Giappone", population: 13960000, area: 2194, rating: 4.9 },
    { name: "New York", country: "USA", population: 8419000, area: 783, rating: 4.7 },
    { name: "Parigi", country: "Francia", population: 2148000, area: 105, rating: 4.8 },
    { name: "Sydney", country: "Australia", population: 5230000, area: 12368, rating: 4.6 }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.