# 👗 Esercizi JavaScript: Manipolare Array di Oggetti Moda  

Questa raccolta di esercizi serve per fare pratica con i principali **metodi sugli array di oggetti** in JavaScript, usando come esempio una lista di **articoli di moda** (vestiti, scarpe, accessori).  

L’obiettivo è allenarsi a **iterare**, **accedere**, **trasformare**, **filtrare**, **trovare** e **combinare** dati in vari modi.  

---

## 📝 Elenco esercizi

| #  | Metodo / Argomento        | Descrizione                                                                 |
|----|---------------------------|-----------------------------------------------------------------------------|
| 1  | `length`                  | Stampare quanti articoli ci sono nell’array.                                |
| 2  | Accesso                   | Stampare il nome del primo articolo.                                        |
| 3  | Accesso                   | Stampare il tipo dell’ultimo articolo.                                      |
| 4  | Accesso                   | Stampare il prezzo del terzo articolo.                                      |
| 5  | Accesso                   | Stampare la taglia del quarto articolo.                                     |
| 6  | `for`                     | Stampare tutti i nomi degli articoli.                                       |
| 7  | `for`                     | Calcolare la somma dei prezzi di tutti gli articoli.                        |
| 8  | `for`                     | Trovare l’articolo più costoso.                                             |
| 9  | `for`                     | Trovare l’articolo meno costoso.                                            |
| 10 | `map`                     | Creare un nuovo array con solo i nomi degli articoli.                       |
| 11 | `map`                     | Creare un nuovo array con solo i prezzi degli articoli.                     |
| 12 | `filter`                  | Trovare tutti gli articoli che costano meno di 50.                          |
| 13 | `filter`                  | Trovare tutti gli articoli di tipo `"Shoes"`.                               |
| 14 | `find`                    | Trovare il primo articolo di tipo `"Accessory"`.                            |
| 15 | `reduce`                  | Calcolare il totale dei prezzi di tutti gli articoli.                       |
| 16 | `filter` + `map`          | Trovare tutti gli articoli con prezzo maggiore di 50 e stampare i nomi.     |
| 17 | `map` + `find`            | Creare un array con solo nome e taglia e trovare il primo articolo con taglia `"M"`. |
| 18 | Funzione + `forEach`      | Restituire tutti i nomi in maiuscolo.                                       |
| 19 | Funzione + `filter`       | Restituire tutti gli articoli di un certo tipo passato come parametro.      |
| 20 | Funzione + `filter`       | Restituire tutti gli articoli sotto un certo prezzo passato come parametro. |
| 21 | `filter` + `map`          | Ottenere i nomi degli articoli che costano più di 60.                       |
| 22 | `filter` + `find`         | Trovare il nome del primo articolo con taglia `"One Size"`.                 |
| 23 | `filter` + `forEach`      | Stampare tutti gli articoli con prezzo inferiore a 30.                      |
| 24 | `map`                     | Creare un nuovo array con i prezzi raddoppiati.                             |
| 25 | `filter` + `reduce`       | Calcolare il totale dei prezzi degli articoli di tipo `"Top"`.              |

---

## 🔹 Bonus: Metodi Push, Pop, Shift, Unshift

| #  | Metodo / Argomento        | Descrizione                                                                 |
|----|---------------------------|-----------------------------------------------------------------------------|
| 26 | `push`                    | Aggiungere un articolo alla fine dell'array.                                 |
| 27 | `unshift`                 | Aggiungere un articolo all'inizio dell'array.                                |
| 28 | `pop`                     | Rimuovere l'ultimo articolo e stampare il nome dell'articolo rimosso.       |
| 29 | `shift`                   | Rimuovere il primo articolo e stampare il nome dell'articolo rimosso.       |
| 30 | Combinazione              | Aggiungere due articoli alla fine e rimuovere il primo: stampare il nuovo array. |

---

## 🔹 Array di partenza

```javascript
const fashionItems = [
  { name: "T-Shirt", type: "Top", price: 20, size: "M" },
  { name: "Jeans", type: "Bottom", price: 50, size: "L" },
  { name: "Sneakers", type: "Shoes", price: 80, size: "42" },
  { name: "Jacket", type: "Outerwear", price: 120, size: "XL" },
  { name: "Cap", type: "Accessory", price: 15, size: "One Size" },
  { name: "Dress", type: "Top", price: 70, size: "S" },
  { name: "Sandals", type: "Shoes", price: 40, size: "39" },
  { name: "Scarf", type: "Accessory", price: 25, size: "One Size" },
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.