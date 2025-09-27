// 🔹 ARRAY DI PARTENZA

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

// ----------------------
// CICLO FOR
// ----------------------

// 1. Stampare tutti i nomi delle piante.

for (let i = 0; i < plants.length; i++) {

    console.log(plants[i].name);
}

// 2. Sommare tutte le quantità di acqua necessaria.

let sum = 0;

for (let i = 0; i < plants.length; i++) {

    sum += plants[i].waterNeeds;
}

console.log('Totale acqua necessaria:', sum);

// 3. Stampare le piante alte più di 100 cm.

for (let i = 0; i < plants.length; i++) {

    if (plants[i].height > 100) {
        console.log(plants[i]);
    }
}

// ----------------------
// METODI ARRAY
// ----------------------

// 4. Stampare specie e altezza di ogni pianta.

plants.forEach(plant => console.log(`Specie: ${plant.species} - ALtezza: ${plant.height} cm`));

// 5. Creare un array con solo i nomi delle piante.

const plantsNames = plants.map(plant => plant.name);
console.log(plantsNames);

// 6. Filtrare tutte le piante con lifespan maggiore o uguale a 15 anni.

const plantsGoodLifespan = plants.filter(plant => plant.lifespan >= 15);
console.log(plantsGoodLifespan);

// 7. Trovare la prima pianta che richiede meno di 3 litri di acqua.

const findPlant = plants.find(plant => plant.waterNeeds < 30);
console.log(findPlant);

// 8. Creare frasi tipo: "[name] appartiene alla specie [species] e ha altezza [height] cm".

plants.forEach(plant => console.log(`${plant.name} appartiene alla specie ${plant.species} e ha altezza ${plant.height} cm`));

// 9. Ottenere solo le piante Succulenta.

const succulentaPlants = plants.filter(plant => plant.species === 'Succulenta');
console.log(succulentaPlants);

// 10. Trovare una pianta specifica (ad esempio "Orchidea").

const orchidea = plants.find(plant => plant.name === 'Orchidea');
console.log(orchidea);

// 11. Stampare nome e lifespan di ogni pianta.

plants.forEach(plant => console.log(`Nome: ${plant.name} - Aspettativa di vita: ${plant.lifespan}`));

// 12. Creare un array con solo le altezze delle piante.

const plantsHeights = plants.map(plant => plant.height);
console.log(plantsHeights);

// 13. Calcolare la somma totale dell’altezza delle piante.

const sumPlantsHeights = plants.reduce((tot, a) => tot + a.height, 0);
console.log('Somma altezza piante:', sumPlantsHeights);

// ----------------------
// ACCESSO & LENGTH
// ----------------------

// 14. Stampare il nome della prima pianta.

const firstPlant = plants[0];
console.log(firstPlant.name);

// 15. Stampare il nome dell’ultima pianta.

const lastPlant = plants[plants.length - 1];
console.log(lastPlant.name);

// 16. Stampare quante piante ci sono nell’array.

console.log('Numero piante:', plants.length);

// 17. Stampare nome e specie della penultima pianta.

const secondLastPlant = plants[plants.length - 2];
console.log(`Nome: ${secondLastPlant.name} - Specie: ${secondLastPlant.species}`);

// ----------------------
// METODI COMBINATI
// ----------------------

// 18. Creare un array con i nomi delle piante alte meno di 100 cm.

const shortPlants = plants.filter(plant => plant.height < 100);

const shortPlantsNames = shortPlants.map(plant => plant.name);
console.log(shortPlantsNames);

// 19. Stampare le piante Succulenta con frase tipo: "La pianta [name] ha bisogno di [waterNeeds] litri d'acqua".

succulentaPlants.forEach(plant => console.log(`La pianta ${plant.name} ha bisogno di ${plant.waterNeeds} litri d'acqua`));

// 20. Stampare i nomi delle piante con lifespan >= 10 anni e altezza <= 60 cm.

const filteredPlants = plants.filter(plant => plant.lifespan >= 10 && plant.height <= 60);

filteredPlants.forEach(plant => console.log(plant.name));