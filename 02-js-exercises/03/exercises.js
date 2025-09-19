// 🔹 ARRAY DI PARTENZA

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


// ----------------------
// LENGTH & ACCESSO
// ----------------------

// 1. Stampare quanti animali ci sono nell’array

const arrayLength = animals.length;
console.log('Lunghezza array:', arrayLength);

// 2. Stampare il nome del primo animale

const firstAnimal = animals[0];
console.log('Primo animale:', firstAnimal);

// 3. Stampare il nome e la specie dell’ultimo animale

const lastAnimalName = animals[animals.length - 1].name;
const lastAnimalSPecies = animals[animals.length - 1].species;
console.log(`Nome ultimo animale: ${lastAnimalName} - Specie ultimo animale: ${lastAnimalSPecies}`);


// ----------------------
// CICLO FOR
// ----------------------

// 4. Stampare tutti i nomi degli animali con un ciclo for

for (let i = 0; i < animals.length; i++) {

    console.log(animals[i].name);
}

// 5. Calcolare la somma di tutti i pesi degli animali

let sum = 0;

for (let i = 0; i < animals.length; i++) {

    const currentWeight = animals[i].weight;

    sum += currentWeight;
}

console.log(sum);

// 6. Stampare gli animali che pesano più di 500 kg

let sumWeight = 0;

for (let i = 0; i < animals.length; i++) {

    const currentWeight = animals[i].weight;

    if (currentWeight > 500) {

        sumWeight += currentWeight;
    }
}

console.log(sumWeight);


// ----------------------
// MAP
// ----------------------

// 7. Creare un array con solo i nomi degli animali

const animalsNames = animals.map(animal => animal.name);
console.log(animalsNames);

// 8. Creare un array di frasi tipo: "[name] è un [species]"

const animalsDescription = animals.map(animal => `${animal.name} è un ${animal.species}`);
console.log(animalsDescription);


// ----------------------
// FILTER
// ----------------------

// 9. Ottenere tutti gli animali in pericolo

const endangeredAnimals = animals.filter(animal => animal.endangered);
console.log(endangeredAnimals);

// 10. Ottenere tutti gli animali che pesano meno di 100 kg

const lightestAnimals = animals.filter(animal => animal.weight < 100);
console.log(lightestAnimals);


// 11. Ottenere solo gli uccelli

const birds = animals.filter(animal => animal.species === 'Uccello');
console.log(birds);


// ----------------------
// FIND
// ----------------------

// 12. Trovare il primo animale in pericolo

const firstEndangeredAnimal = animals.find(animal => animal.endangered);
console.log(firstEndangeredAnimal);

// 13. Trovare l’animale chiamato "Canguro"

const kangaroo = animals.find(animal => animal.name === 'Canguro');
console.log(kangaroo);


// ----------------------
// FOREACH
// ----------------------

// 14. Stampare per ogni animale: "[name] pesa [weight] kg"

animals.forEach(animal => console.log(`${animal.name} pesa ${animal.weight} kg`));

// 15. Stampare solo i nomi degli animali in maiuscolo

animals.forEach(animal => console.log(animal.name.toUpperCase()));


// ----------------------
// FUNZIONI / MISTI
// ----------------------

// 16. Scrivere una funzione che restituisce la media dei pesi

// 17. Scrivere una funzione che restituisce un array con i nomi degli animali più giovani di 5 anni

// 18. Scrivere una funzione che restituisce il nome dell’animale più pesante

// 19. Stampare con forEach solo gli animali in pericolo

// 20. Creare un array di stringhe tipo: "[name] ([species]) – [age] anni"