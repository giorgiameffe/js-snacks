# ✈️ **Esercizi JavaScript: Metodi degli Array con Viaggi**

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi degli array di oggetti** in JavaScript, utilizzando come esempio una lista di **viaggi**.

L’obiettivo è allenarsi a **contare**, **accedere**, **trasformare**, **filtrare** e **trovare** dati in vari modi, combinando cicli e metodi degli array.

---

## 📝 **Elenco esercizi**

| #  | Metodo / Tipo               | Descrizione                                                                 |
|----|-----------------------------|-----------------------------------------------------------------------------|
| 1  | `for`                       | Stampare tutte le destinazioni dei viaggi.                                  |
| 2  | `for`                       | Calcolare la somma totale dei prezzi di tutti i viaggi.                      |
| 3  | `forEach`                   | Stampare il prezzo di ogni viaggio.                                         |
| 4  | `map`                       | Creare un array di tutte le destinazioni dei viaggi.                        |
| 5  | `filter`                    | Ottenere tutti i viaggi che costano meno di 1000 euro.                      |
| 6  | `find`                      | Trovare il primo viaggio con durata maggiore di 10 giorni.                  |
| 7  | `map`                       | Creare un array solo delle compagnie aeree dei viaggi.                      |
| 8  | `forEach`                   | Stampare una frase per ogni viaggio: `"Parigi dura 5 giorni e costa 750 euro."` |
| 9  | `filter` + `map`            | Creare un array con le destinazioni dei viaggi il cui prezzo è maggiore di 1000 euro. |
| 10 | `find`                      | Trovare l’oggetto viaggio corrispondente a una destinazione specifica.      |
| 11 | `filter` + `map`            | Creare un array con le destinazioni dei viaggi che durano più di 5 giorni. |
| 12 | `filter`                    | Contare quanti viaggi durano meno di 6 giorni.                              |
| 13 | `filter` + `length`                   | Contare quanti viaggi hanno durata maggiore di 7 giorni.                    |
| 14 | `array access`              | Accedere al primo viaggio nell'array e stampare la sua destinazione         |
| 15 | `array access`              | Accedere all'ultimo viaggio nell'array e stampare la sua destinazione      |
| 16 | `array access`              | Accedere al penultimo viaggio nell'array e stampare la sua destinazione    |
| 17 | `array access`              | Accedere al terzo viaggio nell'array e stampare la sua durata              |
| 18 | `reduce`                    | Calcolare la somma totale della durata di tutti i viaggi                    |
| 19 | `reduce`                    | Calcolare la somma totale dei prezzi dei viaggi                             |
| 20 | `reduce`                    | Calcolare il prezzo medio dei viaggi                                        |

---

## 🔹 **Array di partenza**

```javascript
const travels = [
    { id: 1, destination: "Parigi", duration: 5, price: 750, airline: "Air France" },
    { id: 2, destination: "Roma", duration: 3, price: 500, airline: "Alitalia" },
    { id: 3, destination: "Tokyo", duration: 10, price: 1500, airline: "Japan Airlines" },
    { id: 4, destination: "New York", duration: 7, price: 1200, airline: "Delta" },
    { id: 5, destination: "Sydney", duration: 12, price: 1800, airline: "Qantas" },
    { id: 6, destination: "Londra", duration: 4, price: 700, airline: "British Airways" },
];

```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.