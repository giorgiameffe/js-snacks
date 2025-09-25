# 🏅 Esercizi JavaScript: Metodi degli Array con Atleti

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi sugli array di oggetti** in JavaScript, usando come esempio una lista di **atleti famosi**.  

L’obiettivo è allenarsi a **iterare**, **accedere**, **trasformare**, **filtrare**, **trovare** e **combinare** dati in vari modi.

---

## 📝 Elenco esercizi

| #  | Tipo / Argomento        | Descrizione                                                                 |
|----|-------------------------|-----------------------------------------------------------------------------|
| 1  | Ciclo `for`             | Stampare tutti i nomi degli atleti.                                         |
| 2  | Ciclo `for`             | Calcolare la somma totale delle medaglie vinte.                             |
| 3  | Ciclo `for`             | Stampare gli atleti con più di 30 anni.                                     |
| 4  | Metodi array            | Stampare sport e nazione di ogni atleta.                                    |
| 5  | Metodi array            | Creare un array con solo i nomi.                                            |
| 6  | Metodi array            | Ottenere tutti i tennisti.                                                  |
| 7  | Metodi array            | Trovare il primo atleta con meno di 30 anni.                                |
| 8  | Metodi array            | Creare frasi tipo: `"[name] pratica [sport] ed è della [country]"`.         |
| 9  | Metodi array            | Ottenere solo gli atleti degli USA.                                         |
| 10 | Metodi array            | Trovare un atleta specifico (ad esempio "Lionel Messi").                    |
| 11 | Metodi array            | Stampare il nome e il numero di medaglie di ogni atleta.                    |
| 12 | Metodi array            | Creare un array con solo le età.                                            |
| 13 | Metodi array            | Calcolare la media delle età.                                               |
| 14 | Accesso                 | Stampare il nome del primo atleta.                                          |
| 15 | Accesso                 | Stampare il nome dell’ultimo atleta.                                        |
| 16 | `length`                | Stampare quanti atleti ci sono nell’array.                                  |
| 17 | Accesso                 | Stampare nome e sport del penultimo atleta.                                 |
| 18 | Metodi combinati        | Creare un array con i nomi degli atleti che hanno più di 25 medaglie.       |
| 19 | Metodi combinati        | Stampare i tennisti con frase tipo: `"Il tennista [name] ha vinto [medals]"`.|
| 20 | Metodi combinati        | Stampare i nomi degli atleti under 30 con più di 15 medaglie.               |

---

## 🔹 Array di partenza

```javascript
const athletes = [
    { name: "Usain Bolt", sport: "Athletics", age: 37, country: "Jamaica", medals: 8 },
    { name: "Michael Phelps", sport: "Swimming", age: 39, country: "USA", medals: 28 },
    { name: "Serena Williams", sport: "Tennis", age: 42, country: "USA", medals: 23 },
    { name: "Lionel Messi", sport: "Football", age: 38, country: "Argentina", medals: 42 },
    { name: "Roger Federer", sport: "Tennis", age: 44, country: "Switzerland", medals: 20 },
    { name: "Simone Biles", sport: "Gymnastics", age: 28, country: "USA", medals: 32 },
    { name: "Cristiano Ronaldo", sport: "Football", age: 40, country: "Portugal", medals: 35 },
    { name: "Novak Djokovic", sport: "Tennis", age: 38, country: "Serbia", medals: 24 },
    { name: "Katie Ledecky", sport: "Swimming", age: 28, country: "USA", medals: 21 },
    { name: "Rafael Nadal", sport: "Tennis", age: 39, country: "Spain", medals: 22 }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.