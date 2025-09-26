# 🐾 Esercizi JavaScript:Manipolare Array di Oggetti Animali

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi degli array di oggetti** in JavaScript, usando come esempio una lista di **animali**.  

L’obiettivo è allenarsi a **contare**, **accedere**, **trasformare**, **filtrare** e **trovare** dati in vari modi.

---

## 📝 Elenco esercizi

| #  | Metodo / Tipo             | Descrizione                                                                 |
|----|--------------------------|-----------------------------------------------------------------------------|
| 1  | `length`                  | Stampare quanti animali ci sono nell’array.                                 |
| 2  | Accesso                  | Stampare il nome del primo animale.                                         |
| 3  | Accesso                  | Stampare il nome e la specie dell’ultimo animale.                           |
| 4  | `for`                     | Stampare tutti i nomi degli animali con un ciclo `for`.                     |
| 5  | `for`                     | Calcolare la somma di tutti i pesi degli animali.                            |
| 6  | `for`                     | Stampare gli animali che pesano più di 500 kg.                               |
| 7  | `map`                     | Creare un array con solo i nomi degli animali.                               |
| 8  | `map`                     | Creare un array di frasi tipo: `"[name] è un [species]"`.                   |
| 9  | `filter`                  | Ottenere tutti gli animali in pericolo.                                      |
| 10 | `filter`                  | Ottenere tutti gli animali che pesano meno di 100 kg.                        |
| 11 | `filter`                  | Ottenere solo gli uccelli.                                                  |
| 12 | `find`                    | Trovare il primo animale in pericolo.                                        |
| 13 | `find`                    | Trovare l’animale chiamato `"Canguro"`.                                      |
| 14 | `forEach`                 | Stampare per ogni animale: `"[name] pesa [weight] kg"`.                      |
| 15 | `forEach`                 | Stampare solo i nomi degli animali in maiuscolo.                              |
| 16 | Funzione                  | Scrivere una funzione che restituisce la media dei pesi.                     |
| 17 | Funzione                  | Scrivere una funzione che restituisce un array con i nomi degli animali più giovani di 5 anni. |
| 18 | Funzione                  | Scrivere una funzione che restituisce il nome dell’animale più pesante.      |
| 19 | Misti (`forEach` + cond.) | Stampare con `forEach` solo gli animali in pericolo.                         |
| 20 | Misti (`map`)             | Creare un array di stringhe tipo: `"[name] ([species]) – [age] anni"`       |

---

## 🔹 Array di partenza

```javascript
const animals = [
    { name: "Elefante", species: "Mammifero", age: 10, weight: 5000, endangered: true },
    { name: "Tigre", species: "Mammifero", age: 5, weight: 220, endangered: true },
    { name: "Cammello", species: "Mammifero", age: 7, weight: 600, endangered: false },
    { name: "Pinguino", species: "Uccello", age: 3, weight: 30, endangered: false },
    { name: "Squalo", species: "Pesce", age: 15, weight: 800, endangered: true },
    { name: "Foca", species: "Mammifero", age: 8, weight: 150, endangered: false },
    { name: "Canguro", species: "Mammifero", age: 6, weight: 85, endangered: false },
    { name: "Fenicottero", species: "Uccello", age: 4, weight: 3, endangered: false }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.