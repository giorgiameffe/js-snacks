# 🚗 Esercizi JavaScript: Metodi degli Array (`map`, `filter`, `find`, `forEach`)

Questa raccolta di esercizi aiuta a fare pratica con i principali metodi per lavorare sugli **array di oggetti** in JavaScript.  
L’obiettivo è allenarsi ad **estrarre**, **filtrare**, **trovare** e **stampare** dati in vari modi.

---

## 📝 Elenco esercizi

| #  | Metodo        | Descrizione                                                                                   |
|----|--------------|-----------------------------------------------------------------------------------------------|
| 1  | `.map()`     | Crea un array con tutti i **modelli** delle auto.                                              |
| 2  | `.map()`     | Crea un array di stringhe descrittive tipo: `"Toyota Yaris del 2018 costa 12000€"`.           |
| 3  | `.map()`     | Crea un array con solo gli **anni di produzione**.                                             |
| 4  | `.filter()`  | Ottieni solo le auto con **prezzo maggiore di 20000€**.                                        |
| 5  | `.filter()`  | Ottieni le auto costruite **dopo il 2020**.                                                    |
| 6  | `.filter()`  | Filtra tutte le auto che **non sono Tesla**.                                                   |
| 7  | `.find()`    | Trova l’auto con marca **"Fiat"**.                                                             |
| 8  | `.find()`    | Trova l’auto con **prezzo esatto di 15000€**.                                                  |
| 9  | `.forEach()` | Stampa in console tutti i **modelli delle auto** uno per uno.                                  |
| 10 | `.forEach()` | Stampa una frase per ciascuna auto, tipo: `"La BMW X3 costa 38000€"`.                         |

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
const cars = [
    { brand: "Toyota", model: "Yaris", year: 2018, price: 12000 },
    { brand: "Fiat", model: "Panda", year: 2020, price: 10000 },
    { brand: "Tesla", model: "Model 3", year: 2022, price: 45000 },
    { brand: "Ford", model: "Focus", year: 2019, price: 15000 },
    { brand: "BMW", model: "X3", year: 2021, price: 38000 }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.

