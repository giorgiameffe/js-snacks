# 🎯 Esercizi JavaScript: Manipolare Array di Oggetti Hobbies

Questa raccolta di esercizi serve per fare pratica con i principali **metodi sugli array di oggetti** in JavaScript, usando come esempio una lista di **hobby** (sport, attività culturali, creative, outdoor).  

L’obiettivo è allenarsi a **iterare**, **accedere**, **trasformare**, **filtrare**, **trovare** e **combinare** dati in vari modi.  

---

## 📝 Elenco esercizi

| #  | Tipo / Argomento          | Descrizione                                                                 |
|----|---------------------------|-----------------------------------------------------------------------------|
| 1  | `length`                  | Stampare quanti hobby ci sono nell’array.                                   |
| 2  | Accesso                   | Stampare il nome del primo hobby.                                           |
| 3  | Accesso                   | Stampare il tipo dell’ultimo hobby.                                         |
| 4  | Accesso                   | Stampare il nome del terzo hobby.                                           |
| 5  | Accesso                   | Stampare le ore settimanali del quarto hobby.                               |
| 6  | `map`                     | Creare un array con solo i nomi degli hobby.                                |
| 7  | `map`                     | Creare un array con solo le ore settimanali.                                |
| 8  | `filter`                  | Ottenere gli hobby con meno di 5 ore settimanali.                           |
| 9  | `filter`                  | Ottenere gli hobby che si praticano indoor.                                 |
| 10 | `forEach`                 | Stampare frasi tipo `"X è un Y che richiede Z ore a settimana"`.            |
| 11 | `forEach`                 | Stampare l’indice e il nome di ciascun hobby.                               |
| 12 | `find`                    | Trovare il primo hobby outdoor.                                             |
| 13 | `find`                    | Trovare l’hobby che occupa esattamente 8 ore a settimana.                   |
| 14 | Funzione                  | Restituire tutti i nomi degli hobby in maiuscolo.                           |
| 15 | Funzione                  | Restituire tutti gli hobby indoor.                                          |
| 16 | `filter` + `map`          | Ottenere i nomi degli hobby con più di 6 ore settimanali.                   |
| 17 | `filter` + `map` + `find` | Trovare il nome del primo hobby di tipo `"Sport"`.                          |
| 18 | `filter` + `forEach`      | Stampare gli hobby con meno di 5 ore settimanali.                           |
| 19 | `filter` + `map`          | Stampare i nomi in maiuscolo degli hobby outdoor.                           |
| 20 | `map` + `reduce`          | Calcolare il totale delle ore settimanali di tutti gli hobby.               |

---

## 🔹 Array di partenza

```javascript
const hobbies = [
  { name: "Calcio", type: "Sport", weeklyHours: 5, indoor: false },
  { name: "Lettura", type: "Culturale", weeklyHours: 7, indoor: true },
  { name: "Videogiochi", type: "Intrattenimento", weeklyHours: 10, indoor: true },
  { name: "Nuoto", type: "Sport", weeklyHours: 4, indoor: true },
  { name: "Escursionismo", type: "Outdoor", weeklyHours: 6, indoor: false },
  { name: "Fotografia", type: "Creativo", weeklyHours: 3, indoor: false },
  { name: "Cucina", type: "Pratico", weeklyHours: 8, indoor: true },
  { name: "Yoga", type: "Benessere", weeklyHours: 4, indoor: true }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.