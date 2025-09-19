# 🎲 Esercizi JavaScript: Metodi degli Array con Giochi da Tavolo

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi degli array di oggetti** in JavaScript, usando come esempio una lista di **giochi da tavolo**.  

L’obiettivo è allenarsi a **contare**, **accedere**, **trasformare**, **filtrare** e **trovare** dati in vari modi.

---

## 📝 Elenco esercizi

| #  | Metodo / Tipo             | Descrizione                                                                 |
|----|--------------------------|-----------------------------------------------------------------------------|
| 1  | `length`                  | Stampare quanti giochi ci sono nell’array.                                  |
| 2  | Accesso                  | Stampare il nome del primo gioco.                                           |
| 3  | Accesso                  | Stampare il nome e la complessità dell’ultimo gioco.                        |
| 4  | `for`                     | Stampare tutti i nomi dei giochi con un ciclo `for`.                        |
| 5  | `for`                     | Calcolare la somma totale della durata di tutti i giochi.                   |
| 6  | `for`                     | Stampare i giochi che durano più di 100 minuti.                             |
| 7  | `map`                     | Creare un array con solo i nomi dei giochi.                                 |
| 8  | `map`                     | Creare un array di frasi tipo: `"[name] supporta [players] giocatori"`.     |
| 9  | `filter`                  | Ottenere tutti i giochi disponibili.                                        |
| 10 | `filter`                  | Ottenere tutti i giochi che durano meno di 60 minuti.                       |
| 11 | `filter`                  | Ottenere tutti i giochi per più di 4 giocatori.                             |
| 12 | `find`                    | Trovare il primo gioco pubblicato dopo il 2000.                             |
| 13 | `find`                    | Trovare il gioco chiamato `"Risiko"`.                                       |
| 14 | `forEach`                 | Stampare per ogni gioco: `"[name] dura [duration] minuti"`.                 |
| 15 | `forEach`                 | Stampare solo i nomi dei giochi in maiuscolo.                               |
| 16 | Funzione                  | Scrivere una funzione che restituisce la media della durata dei giochi.     |
| 17 | Funzione                  | Scrivere una funzione che restituisce i giochi più vecchi del 1950.         |
| 18 | Funzione                  | Scrivere una funzione che restituisce il nome del gioco più lungo.          |
| 19 | Misti (`filter` + `map`)  | Ottenere i nomi dei giochi di complessità “Medio” o superiore.              |
| 20 | Misti (`reduce`)          | Trovare il gioco con il maggior numero di giocatori.                        |

---

## 🔹 Array di partenza

```javascript
const boardGames = [
  { name: "Catan", players: 4, duration: 90, complexity: "Medio", year: 1995, available: true },
  { name: "Monopoly", players: 6, duration: 120, complexity: "Basso", year: 1935, available: false },
  { name: "Carcassonne", players: 5, duration: 45, complexity: "Medio", year: 2000, available: true },
  { name: "Scacchi", players: 2, duration: 60, complexity: "Alto", year: 1475, available: true },
  { name: "Ticket to Ride", players: 5, duration: 75, complexity: "Medio", year: 2004, available: false },
  { name: "Risiko", players: 6, duration: 180, complexity: "Medio-Alto", year: 1957, available: true },
  { name: "Dixit", players: 6, duration: 30, complexity: "Basso", year: 2008, available: true }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.