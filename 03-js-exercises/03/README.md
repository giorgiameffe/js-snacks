# 🍹 Esercizi JavaScript: Manipolare Array di Oggetti Drinks

Questa raccolta di esercizi serve per fare pratica con i principali **metodi sugli array di oggetti** in JavaScript, usando come esempio una lista di **drinks** (bibite, succhi, caffè, tè, energy drink).  

L’obiettivo è allenarsi a **iterare**, **accedere**, **trasformare**, **filtrare**, **trovare** e **combinare** dati in vari modi.  

---

## 📝 Elenco esercizi

| #  | Tipo / Argomento          | Descrizione                                                                 |
|----|---------------------------|-----------------------------------------------------------------------------|
| 1  | `length`                  | Stampare quanti drinks ci sono nell’array.                                  |
| 2  | Accesso                   | Stampare il nome del primo drink.                                           |
| 3  | Accesso                   | Stampare il tipo dell’ultimo drink.                                         |
| 4  | Accesso                   | Stampare il nome del terzo drink.                                           |
| 5  | Accesso                   | Stampare le calorie del quarto drink.                                       |
| 6  | `map`                     | Creare un array con solo i nomi dei drinks.                                 |
| 7  | `map`                     | Creare un array con solo le calorie dei drinks.                             |
| 8  | `filter`                  | Ottenere i drinks con meno di 100 calorie.                                  |
| 9  | `filter`                  | Ottenere i drinks che contengono caffeina.                                  |
| 10 | `forEach`                 | Stampare frasi tipo `"X è un Y con Z calorie"`.                             |
| 11 | `forEach`                 | Stampare l’indice e il nome di ciascun drink.                               |
| 12 | `find`                    | Trovare il primo drink senza caffeina.                                      |
| 13 | `find`                    | Trovare il drink che ha esattamente 160 calorie.                            |
| 14 | Funzione                  | Restituire tutti i nomi dei drinks in maiuscolo.                            |
| 15 | Funzione                  | Restituire tutti i drinks senza caffeina.                                   |
| 16 | `filter` + `map`          | Ottenere i nomi dei drinks con più di 100 calorie.                          |
| 17 | `filter` + `map` + `find` | Trovare il nome del primo drink di tipo `"Energy Drink"`.                   |
| 18 | `filter` + `forEach`      | Stampare i drinks con meno di 50 calorie.                                   |
| 19 | `filter` + `map`          | Stampare i nomi in maiuscolo dei drinks senza caffeina.                     |
| 20 | `map` + `reduce`          | Calcolare il totale delle calorie di tutti i drinks.                        |

---

## 🔹 Array di partenza

```javascript
const drinks = [
  { name: "Coca Cola", type: "Soft Drink", calories: 140, caffeine: true },
  { name: "Pepsi", type: "Soft Drink", calories: 150, caffeine: true },
  { name: "Orange Juice", type: "Juice", calories: 110, caffeine: false },
  { name: "Espresso", type: "Coffee", calories: 5, caffeine: true },
  { name: "Green Tea", type: "Tea", calories: 2, caffeine: true },
  { name: "Water", type: "Natural", calories: 0, caffeine: false },
  { name: "Red Bull", type: "Energy Drink", calories: 160, caffeine: true },
  { name: "Milkshake", type: "Dessert", calories: 300, caffeine: false }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.