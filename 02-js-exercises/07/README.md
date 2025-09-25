# 🍔 Esercizi JavaScript: Metodi degli Array con Cibi

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi degli array di oggetti** in JavaScript, usando come esempio una lista di **cibi**.  

L’obiettivo è allenarsi a **contare**, **accedere**, **trasformare**, **filtrare** e **trovare** dati in vari modi, combinando cicli e metodi degli array.

---

## 📝 Elenco esercizi

| #  | Metodo / Tipo               | Descrizione                                                                 |
|----|-----------------------------|-----------------------------------------------------------------------------|
| 1  | `for`                      | Stampare tutti i nomi dei cibi.                                             |
| 2  | `for`                      | Sommare tutte le calorie e stampare il totale.                              |
| 3  | `for`                      | Stampare i cibi che costano più di 10€.                                     |
| 4  | `forEach`                  | Stampare il tipo di ogni cibo.                                              |
| 5  | `map`                      | Creare un array con solo i nomi dei cibi.                                   |
| 6  | `filter`                   | Ottenere tutti i cibi con rating >= 90.                                     |
| 7  | `find`                     | Ottenere il primo cibo con meno di 400 calorie.                             |
| 8  | `map`                      | Creare un array di frasi tipo: `"[name] è un piatto [type]"`.               |
| 9  | `filter`                   | Ottenere tutti i cibi giapponesi.                                           |
| 10 | `find`                     | Trovare un cibo specifico (ad esempio "Gelato").                            |
| 11 | `forEach`                  | Stampare il nome e il prezzo di ogni cibo.                                  |
| 12 | `map`                      | Creare un array con solo le calorie dei cibi.                               |
| 13 | `reduce`                   | Calcolare la somma totale dei prezzi di tutti i cibi.                       |
| 14 | Accesso                    | Stampare il nome del primo cibo.                                            |
| 15 | Accesso                    | Stampare il nome dell’ultimo cibo.                                          |
| 16 | `length`                   | Stampare quanti cibi ci sono nell’array.                                    |
| 17 | Accesso                    | Stampare nome e tipo del penultimo cibo.                                    |
| 18 | Misti (`filter` + `map`)    | Creare un array con i nomi dei cibi con calorie < 600.                      |
| 19 | Misti (`filter` + `forEach`)| Stampare i cibi italiani con frase tipo: `"Il piatto [name] costa [price]€"`.|
| 20 | Misti (`filter` + `forEach`)| Stampare i nomi dei cibi con rating >= 90 e prezzo <= 10€.                  |

---

## 🔹 Array di partenza

```javascript
const foods = [
    { name: "Pizza Margherita", type: "Italian", calories: 850, price: 8, rating: 92 },
    { name: "Sushi Mix", type: "Japanese", calories: 600, price: 15, rating: 95 },
    { name: "Cheeseburger", type: "American", calories: 900, price: 7, rating: 85 },
    { name: "Paella", type: "Spanish", calories: 750, price: 12, rating: 90 },
    { name: "Croissant", type: "French", calories: 300, price: 3, rating: 88 },
    { name: "Pad Thai", type: "Thai", calories: 700, price: 10, rating: 91 },
    { name: "Falafel", type: "Middle Eastern", calories: 400, price: 6, rating: 89 },
    { name: "Tacos", type: "Mexican", calories: 500, price: 5, rating: 87 },
    { name: "Ramen", type: "Japanese", calories: 550, price: 9, rating: 93 },
    { name: "Gelato", type: "Italian", calories: 250, price: 4, rating: 94 }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.