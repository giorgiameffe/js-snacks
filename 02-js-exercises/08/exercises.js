// 🔹 ARRAY DI PARTENZA

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


// ----------------------
// CICLO FOR
// ----------------------

// 1. Stampa tutti i nomi degli atleti.

for (let i = 0; i < athletes.length; i++) {

    console.log(athletes[i].name);
}

// 2. Calcola la somma totale delle medaglie vinte.

let sum = 0;

for (let i = 0; i < athletes.length; i++) {

    sum += athletes[i].medals;
}

console.log('Totale medaglie:', sum);

// 3. Stampa gli atleti con più di 30 anni.

for (let i = 0; i < athletes.length; i++) {

    if (athletes[i].age > 30) {
        console.log(athletes[i]);
    }
}


// ----------------------
// METODI ARRAY
// ----------------------

// 4. Stampa sport e nazione di ogni atleta.

athletes.forEach(a => console.log(`Sport: ${a.sport} - Nazione: ${a.country}`));

// 5. Crea un array con solo i nomi.

const athletesNames = athletes.map(a => a.name);
console.log(athletesNames);

// 6. Ottieni tutti i tennisti.

const tennisAthletes = athletes.filter(a => a.sport === 'Tennis');
console.log(tennisAthletes);

// 7. Trova il primo atleta con meno di 30 anni.

const firstYoungAthlete = athletes.find(a => a.age < 30);
console.log(firstYoungAthlete);

// 8. Crea frasi tipo: "[name] pratica [sport] ed è della [country]".

athletes.forEach(a => console.log(`${a.name} pratica ${a.sport} ed è della ${a.country}`));

// 9. Ottieni solo gli atleti degli USA.

const usaAthletes = athletes.filter(a => a.country === 'USA');
console.log(usaAthletes);

// 10. Trova un atleta specifico (es. "Lionel Messi").

const findAthlete = athletes.find(a => a.name === 'Lionel Messi');
console.log(findAthlete);

// 11. Stampa nome e numero di medaglie di ogni atleta.

athletes.forEach(a => console.log(`Nome: ${a.name} - Medaglie: ${a.medals}`));

// 12. Crea un array con solo le età.

const athletesAges = athletes.map(a => a.age);
console.log(athletesAges);

// 13. Calcola la somma delle età degli atleti.

const sumAges = athletes.reduce((tot, currentAthlete) => tot += currentAthlete.age, 0);
console.log('Totale età:', sumAges);


// ----------------------
// LENGTH & ACCESSO
// ----------------------

// 14. Stampa il nome del primo atleta.

const firstAthlete = athletes[0];
console.log(firstAthlete.name);

// 15. Stampa il nome dell’ultimo atleta.

const lastAthlete = athletes[athletes.length - 1];
console.log(lastAthlete.name);

// 16. Stampa quanti atleti ci sono nell’array.

console.log('Numero atleti:', athletes.length);

// 17. Stampa nome e sport del penultimo atleta.

const secondLastAthlete = athletes[athletes.length - 2];
console.log(`Nome: ${secondLastAthlete.name} - Sport: ${secondLastAthlete.sport}`);

// ----------------------
// METODI COMBINATI
// ----------------------

// 18. Crea un array con i nomi degli atleti che hanno più di 25 medaglie.

const strongAthletes = athletes.filter(a => a.medals > 25);

const strongAthletesNames = strongAthletes.map(a => a.name);
console.log(strongAthletesNames);

// 19. Seleziona i tennisti e stampa frasi tipo: "Il tennista [name] ha vinto [medals] medaglie".

tennisAthletes.forEach(a => console.log(`Il tennista ${a.name} ha vinto ${a.medals} medaglie`));

// 20. Stampa i nomi degli atleti under 30 che hanno più di 15 medaglie.

const youngAndWinnersAthletes = athletes.filter(a => a.age < 30 && a.medals > 15);

youngAndWinnersAthletes.forEach(a => console.log(a.name));