// 🔹 ARRAY DI PARTENZA

const horses = [
    { name: "Seabiscuit", breed: "Thoroughbred", age: 7, country: "USA", height: 155 },
    { name: "Black Caviar", breed: "Sprinter", age: 9, country: "Australia", height: 160 },
    { name: "Man o' War", breed: "Thoroughbred", age: 10, country: "USA", height: 163 },
    { name: "Frankel", breed: "Thoroughbred", age: 8, country: "UK", height: 165 },
    { name: "American Pharoah", breed: "Thoroughbred", age: 6, country: "USA", height: 158 },
    { name: "Red Rum", breed: "Chaser", age: 12, country: "UK", height: 170 },
    { name: "Phar Lap", breed: "Thoroughbred", age: 7, country: "Australia", height: 162 },
    { name: "Winx", breed: "Thoroughbred", age: 8, country: "Australia", height: 159 },
    { name: "Arkle", breed: "Steeplechaser", age: 11, country: "Ireland", height: 168 },
    { name: "Ruffian", breed: "Thoroughbred", age: 5, country: "USA", height: 157 }
];

// ----------------------
// CICLO FOR
// ----------------------

// 1. Stampare tutti i nomi dei cavalli.

for (let i = 0; i < horses.length; i++) {

    console.log(horses[i].name);
}

// 2. Sommare tutte le età dei cavalli.

let sum = 0;

for (let i = 0; i < horses.length; i++) {

    sum += horses[i].age;
}

console.log('Somma età:', sum);

// 3. Stampare i cavalli con altezza superiore a 160 cm.

for (let i = 0; i < horses.length; i++) {

    if (horses[i].height > 160) {
        console.log(horses[i]);
    }
}

// ----------------------
// METODI ARRAY
// ----------------------

// 4. Stampare razza e paese di origine di ogni cavallo.

horses.forEach(horse => console.log(`Razza: ${horse.breed} - Paese: ${horse.country}`));

// 5. Creare un array con solo i nomi dei cavalli.

const horsesNames = horses.map(horse => horse.name);
console.log(horsesNames);

// 6. Ottenere tutti i cavalli di razza "Thoroughbred".

const thoroughbredHorses = horses.filter(horse => horse.breed === 'Thoroughbred');
console.log(thoroughbredHorses);

// 7. Trovare il primo cavallo con meno di 5 anni.

const firstYoungHorse = horses.find(horse => horse.age < 5);
console.log(firstYoungHorse);

// 8. Creare frasi tipo: "[name] è un cavallo [breed] proveniente da [country]".

horses.forEach(horse => console.log(`${horse.name} è un cavallo ${horse.breed} proveniente da ${horse.country}`));

// 9. Ottenere solo i cavalli provenienti dagli USA.

const usaHorses = horses.filter(horse => horse.country === 'USA');
console.log(usaHorses);

// 10. Trovare un cavallo specifico (ad esempio "Seabiscuit").

const seabiscuit = horses.find(horse => horse.name === 'Seabiscuit');
console.log(seabiscuit);

// 11. Stampare il nome e l’età di ogni cavallo.

horses.forEach(horse => console.log(`Nome: ${horse.name} - Età: ${horse.age} anni`));

// 12. Creare un array con solo le altezze dei cavalli.

const horsesHeight = horses.map(horse => horse.height);
console.log(horsesHeight);

// 13. Calcolare la somma totale delle altezze dei cavalli.

const sumHeights = horses.reduce((tot, a) => tot += a.height, 0);
console.log('Somma altezze:', sumHeights);

// ----------------------
// ACCESSO & LENGTH
// ----------------------

// 14. Stampare il nome del primo cavallo.

const firstHorse = horses[0];
console.log(firstHorse.name);

// 15. Stampare il nome dell’ultimo cavallo.

const lastHorse = horses[horses.length - 1];
console.log(lastHorse.name);

// 16. Stampare quanti cavalli ci sono nell’array.

console.log('Numero cavalli:', horses.length);

// 17. Stampare nome e razza del penultimo cavallo.

const secondLastHorse = horses[horses.length - 2];
console.log(`Nome: ${secondLastHorse.name} - Razza: ${secondLastHorse.breed}`);


// ----------------------
// METODI COMBINATI
// ----------------------

// 18. Creare un array con i nomi dei cavalli con altezza inferiore a 160 cm.

const shortHorses = horses
    .filter(horse => horse.height < 160)
    .map(horse => horse.name);

console.log(shortHorses);

// 19. Stampare i cavalli Thoroughbred con frase tipo: "Il cavallo [name] ha [age] anni".

thoroughbredHorses.forEach(horse => console.log(`Il cavallo ${horse.name} ha ${horse.age} anni`));

// 20. Stampare i nomi dei cavalli con età >= 5 e altezza <= 160 cm.

const shortAndAdultHorses = horses.filter(horse => horse.age >= 5 && horse.height <= 160);
console.log(shortAndAdultHorses);