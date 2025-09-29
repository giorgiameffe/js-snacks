// 🔹 ARRAY DI PARTENZA

const painters = [
    { name: "Leonardo da Vinci", movement: "Renaissance", birth: 1452, death: 1519 },
    { name: "Michelangelo", movement: "Renaissance", birth: 1475, death: 1564 },
    { name: "Caravaggio", movement: "Baroque", birth: 1571, death: 1610 },
    { name: "Rembrandt", movement: "Baroque", birth: 1606, death: 1669 },
    { name: "Claude Monet", movement: "Impressionism", birth: 1840, death: 1926 },
    { name: "Vincent van Gogh", movement: "Post-Impressionism", birth: 1853, death: 1890 },
    { name: "Pablo Picasso", movement: "Cubism", birth: 1881, death: 1973 },
    { name: "Jackson Pollock", movement: "Abstract Expressionism", birth: 1912, death: 1956 },
];


// ----------------------
// LENGHT & INDICI
// ----------------------

// 1. Stampa quanti pittori ci sono nell’array

console.log('Numero pittori:', painters.length);

// 2. Stampa il nome del primo pittore

const firstPainter = painters[0];
console.log(firstPainter.name);

// 3. Stampa il movimento dell’ultimo pittore

const lastPainter = painters[painters.length - 1];
console.log(lastPainter.movement);

// 4. Stampa il nome del secondo pittore usando la dot notation

const secondPainter = painters[1];
console.log(secondPainter.name);

// 5. Stampa l’anno di nascita del terzo pittore usando la bracket notation

const thirdPainter = painters[2];
console.log(thirdPainter['birth']);


// ----------------------
// METODI ARRAY
// ----------------------

// 6. Crea un array con solo i nomi dei pittori

const paintersNames = painters.map(p => p.name);
console.log(paintersNames);

// 7. Crea un array con le età di ciascun pittore (death - birth)

const birthDeathPainters = painters.map(p => `${p.birth} - ${p.death}`);
console.log(birthDeathPainters);

// 8. Filtra i pittori nati prima del 1600

const paintersBefore1600 = painters.filter(p => p.birth < 1600);
console.log(paintersBefore1600);

// 9. Filtra i pittori del movimento "Baroque"

const baroquePainters = painters.filter(p => p.movement === 'Baroque');
console.log(baroquePainters);

// 10. Stampa una frase per ogni pittore, tipo "X appartiene al movimento Y"

painters.forEach(p => console.log(`${p.name} appartiene al movimento ${p.movement}`));

// 11. Stampa l’indice e il nome di ciascun pittore

painters.forEach((p, i) => console.log(`Indice: ${i} - Nome: ${p.name}`));

// 12. Trova il primo pittore del movimento "Cubism"

const firstCubismPainter = painters.find(p => p.movement === 'Cubism');
console.log(firstCubismPainter);

// 13. Trova il pittore nato nel 1881

const painter1881 = painters.find(p => p.birth === 1881);
console.log(painter1881);

// ----------------------
// FUNZIONI
// ----------------------

// 14. Scrivi una funzione che ritorna tutti i nomi in maiuscolo

function getUppercaseNames(arr) {

    return arr.forEach(e => console.log(e.name.toUpperCase()));
}

getUppercaseNames(painters);

// 15. Scrivi una funzione che ritorna tutti i pittori nati dopo il 1800

function getMostRecentPainters(arr) {

    return arr.filter(e => e.birth > 1800);
}

console.log(getMostRecentPainters(painters));

// ----------------------
// METODI COMBINATI
// ----------------------

// 16. Ottieni i nomi dei pittori nati dopo il 1850 (filter + map)

const names = painters
    .filter(p => p.birth > 1850)
    .map(p => p.name);

console.log(names);

// 17. Trova il nome del primo pittore impressionista (filter + map + find)

const firstImpressionismPainter = painters
    .filter(p => p.movement === 'Impressionism')
    .map(p => p.name)
    .find(name => name);

console.log(firstImpressionismPainter);

// 18. Stampa i pittori che hanno vissuto meno di 50 anni (filter + forEach)

const paintersDeadYoung = painters.filter(p => p.death - p.birth < 50);

paintersDeadYoung.forEach(p => console.log(p));

// 19. Ottieni i nomi in maiuscolo dei pittori nati prima del 1600 (filter + map)

const paintersUppercase = paintersBefore1600.map(p => p.name.toUpperCase());
console.log(paintersUppercase);

// 20. Calcola il numero totale di anni vissuti da tutti i pittori (map + reduce)

const totalYears = painters
    .map(p => p.death - p.birth)
    .reduce((tot, a) => tot + a, 0);

console.log('Somma anni vissuti:', totalYears);