# 🌱 Esercizi JavaScript: Metodi degli Array con Piante

Questa raccolta di esercizi aiuta a fare pratica con i principali **metodi sugli array di oggetti** in JavaScript, usando come esempio una lista di **piante**.  

L’obiettivo è allenarsi a **iterare**, **accedere**, **trasformare**, **filtrare**, **trovare** e **combinare** dati in vari modi.  

---

## 📝 Elenco esercizi

| #  | Tipo / Argomento        | Descrizione                                                                 |
|----|-------------------------|-----------------------------------------------------------------------------|
| 1  | Ciclo `for`             | Stampare tutti i nomi delle piante.                                         |
| 2  | Ciclo `for`             | Sommare tutte le quantità di acqua necessaria.                               |
| 3  | Ciclo `for`             | Stampare le piante alte più di 100 cm.                                       |
| 4  | Metodi array            | Stampare specie e altezza di ogni pianta.                                    |
| 5  | Metodi array            | Creare un array con solo i nomi delle piante.                                |
| 6  | Metodi array            | Filtrare tutte le piante con lifespan maggiore o uguale a 15 anni.          |
| 7  | Metodi array            | Trovare la prima pianta che richiede meno di 3 litri di acqua.               |
| 8  | Metodi array            | Creare frasi tipo: `"[name] appartiene alla specie [species] e ha altezza [height] cm"`. |
| 9  | Metodi array            | Ottenere solo le piante Succulenta.                                         |
| 10 | Metodi array            | Trovare una pianta specifica (ad esempio "Orchidea").                        |
| 11 | Metodi array            | Stampare nome e lifespan di ogni pianta.                                     |
| 12 | Metodi array            | Creare un array con solo le altezze delle piante.                             |
| 13 | Metodi array / reduce   | Calcolare la somma totale dell’altezza delle piante.                         |
| 14 | Accesso                 | Stampare il nome della prima pianta.                                         |
| 15 | Accesso                 | Stampare il nome dell’ultima pianta.                                         |
| 16 | `length`                | Stampare quante piante ci sono nell’array.                                   |
| 17 | Accesso                 | Stampare nome e specie della penultima pianta.                               |
| 18 | Metodi combinati        | Creare un array con i nomi delle piante alte meno di 100 cm.                 |
| 19 | Metodi combinati        | Stampare le piante Succulenta con frase tipo: `"La pianta [name] ha bisogno di [waterNeeds] litri d'acqua"`. |
| 20 | Metodi combinati        | Stampare i nomi delle piante con lifespan >= 10 anni e altezza <= 60 cm.    |

---

## 🔹 Array di partenza

```javascript
const plants = [
    { name: "Ficus", species: "Ficus lyrata", height: 150, waterNeeds: 4, lifespan: 25 },
    { name: "Aloe Vera", species: "Succulenta", height: 40, waterNeeds: 2, lifespan: 12 },
    { name: "Monstera", species: "Monstera deliciosa", height: 120, waterNeeds: 5, lifespan: 20 },
    { name: "Cactus", species: "Succulenta", height: 30, waterNeeds: 1, lifespan: 15 },
    { name: "Bamboo", species: "Bambusoideae", height: 200, waterNeeds: 6, lifespan: 10 },
    { name: "Orchidea", species: "Orchidaceae", height: 60, waterNeeds: 3, lifespan: 8 },
    { name: "Palma", species: "Arecaceae", height: 180, waterNeeds: 7, lifespan: 30 },
    { name: "Pothos", species: "Epipremnum aureum", height: 100, waterNeeds: 4, lifespan: 12 },
    { name: "Lavanda", species: "Lavandula", height: 50, waterNeeds: 3, lifespan: 15 },
    { name: "Sedum", species: "Succulenta", height: 20, waterNeeds: 1, lifespan: 10 }
];
```

---

## 🛠️ Come usare questi esercizi

1. Crea un file chiamato `exercises.js`.  
2. Copia il codice degli esercizi al suo interno.  
3. Apri il file con **VS Code** o un qualsiasi editor JavaScript.  
4. Esegui ogni esercizio uno per uno usando `console.log()` per vedere il risultato.  
5. Puoi testare il codice anche nella **console del browser** o con **Node.js**.