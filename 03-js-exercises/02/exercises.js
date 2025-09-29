// 🔹 ARRAY DI PARTENZA

const pets = [
    { name: "Buddy", type: "Dog", age: 4, country: "USA", weight: 25 },
    { name: "Milo", type: "Cat", age: 2, country: "UK", weight: 6 },
    { name: "Charlie", type: "Dog", age: 7, country: "Canada", weight: 30 },
    { name: "Luna", type: "Cat", age: 3, country: "Italy", weight: 5 },
    { name: "Rocky", type: "Dog", age: 6, country: "USA", weight: 28 },
    { name: "Bella", type: "Rabbit", age: 1, country: "France", weight: 2 },
    { name: "Kiwi", type: "Parrot", age: 5, country: "Brazil", weight: 1 },
    { name: "Max", type: "Dog", age: 8, country: "Germany", weight: 35 },
    { name: "Oliver", type: "Cat", age: 4, country: "Spain", weight: 7 },
    { name: "Coco", type: "Parrot", age: 2, country: "Mexico", weight: 1 }
];


// ----------------------
// CICLO FOR
// ----------------------

// 1. Stampare tutti i nomi dei pets.

for (let i = 0; i < pets.length; i++) {

    console.log(pets[i].name);
}

// 2. Sommare tutte le età dei pets.

let sum = 0;

for (let i = 0; i < pets.length; i++) {

    sum += pets[i].age;
}

console.log('Somma età:', sum);

// 3. Stampare i pets che pesano più di 10 kg.

for (let i = 0; i < pets.length; i++) {

    if (pets[i].weight > 10) {

        console.log(pets[i]);
    }
}


// ----------------------
// METODI ARRAY
// ----------------------

// 4. Stampare tipo e paese di ogni pet.

pets.forEach(pet => console.log(`Tipo: ${pet.type} - Paese: ${pet.country}`));

// 5. Creare un array con solo i nomi dei pets.

const petsNames = pets.map(pet => pet.name);
console.log(petsNames);

// 6. Ottenere tutti i gatti (type === "Cat").

const cats = pets.filter(pet => pet.type === 'Cat');
console.log(cats);

// 7. Trovare il primo pet con meno di 2 anni.

const firstYoungPet = pets.find(pet => pet.age < 2);
console.log(firstYoungPet);

// 8. Creare frasi tipo: "[name] è un [type] proveniente da [country]".

pets.forEach(pet => console.log(`${pet.name} è un ${pet.type} proveniente da ${pet.country}`));

// 9. Ottenere solo i pets provenienti dagli USA.

const petsUSA = pets.filter(pet => pet.country === 'USA');
console.log(petsUSA);

// 10. Trovare un pet specifico (ad esempio "Buddy").

const buddy = pets.find(pet => pet.name === 'Buddy');
console.log(buddy);

// 11. Stampare il nome e l’età di ogni pet.

pets.forEach(pet => console.log(`Nome: ${pet.name} - Età: ${pet.age} anni`));

// 12. Creare un array con solo i pesi dei pets.

const petsWeights = pets.map(pet => pet.weight);
console.log(petsWeights);

// 13. Calcolare la somma totale dei pesi.

const sumWeights = pets.reduce((tot, a) => tot + a.weight, 0);
console.log('Somma pesi:', sumWeights);

// ----------------------
// ACCESSO & LENGTH
// ----------------------

// 14. Stampare il nome del primo pet.
// 15. Stampare il nome dell’ultimo pet.
// 16. Stampare quanti pets ci sono nell’array.
// 17. Stampare nome e tipo del penultimo pet.


// ----------------------
// METODI COMBINATI
// ----------------------

// 18. Creare un array con i nomi dei pets che pesano meno di 10 kg.
// 19. Stampare i cani con frase tipo: "Il cane [name] ha [age] anni".
// 20. Stampare i nomi dei pets con età >= 3 e peso <= 7 kg.