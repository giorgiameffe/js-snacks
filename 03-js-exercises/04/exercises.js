// 🔹 ARRAY DI PARTENZA

const hobbies = [
    { name: "Calcio", type: "Sport", weeklyHours: 5, indoor: false },
    { name: "Lettura", type: "Culturale", weeklyHours: 7, indoor: true },
    { name: "Videogiochi", type: "Intrattenimento", weeklyHours: 10, indoor: true },
    { name: "Nuoto", type: "Sport", weeklyHours: 4, indoor: true },
    { name: "Escursionismo", type: "Outdoor", weeklyHours: 6, indoor: false },
    { name: "Fotografia", type: "Creativo", weeklyHours: 3, indoor: false },
    { name: "Cucina", type: "Pratico", weeklyHours: 8, indoor: true },
    { name: "Yoga", type: "Benessere", weeklyHours: 4, indoor: true },
];


// ----------------------
// LUNGHEZZA & INDICI
// ----------------------

// 1. Quanti hobby ci sono nell’array?

console.log('Numero hobby:', hobbies.length);

// 2. Stampa il nome del primo hobby

const firstHobby = hobbies[0];
console.log(firstHobby.name);

// 3. Stampa il tipo dell’ultimo hobby

const lastHobby = hobbies[hobbies.length - 1];
console.log(lastHobby.type);

// 4. Stampa il nome del terzo hobby

const thirdHobby = hobbies[2];
console.log(thirdHobby.name);

// 5. Stampa le ore settimanali del quarto hobby

const fourthHobby = hobbies[3];
console.log(fourthHobby.weeklyHours);


// ----------------------
// METODI ARRAY
// ----------------------

// 6. Crea un array con solo i nomi degli hobby

const hobbiesNames = hobbies.map(h => h.name);
console.log(hobbiesNames);

// 7. Crea un array con solo le ore settimanali

const weeklyHours = hobbies.map(h => h.weeklyHours);
console.log(weeklyHours);

// 8. Filtra gli hobby con meno di 5 ore settimanali

const shorHobbies = hobbies.filter(h => h.weeklyHours < 5);
console.log(shorHobbies);

// 9. Filtra gli hobby che si praticano indoor

const indoorHobbies = hobbies.filter(h => h.indoor);
console.log(indoorHobbies);

// 10. Stampa una frase per ogni hobby del tipo: "X è un Y che richiede Z ore a settimana"

hobbies.forEach(h => console.log(`${h.name} è un ${h.type} che richiede ${h.weeklyHours} a settimana`));

// 11. Stampa indice e nome di ciascun hobby

hobbies.forEach((h, i) => console.log(`Indice: ${i} - Nome: ${h.name}`));

// 12. Trova il primo hobby outdoor

const firstOutdoorHobby = hobbies.find(h => h.indoor === false);
console.log(firstOutdoorHobby);

// 13. Trova l’hobby che occupa esattamente 8 ore a settimana

const eightHoursHobby = hobbies.find(h => h.weeklyHours === 8);
console.log(eightHoursHobby);


// ----------------------
// FUNZIONI
// ----------------------

// 14. Scrivi una funzione che ritorna tutti i nomi in maiuscolo
// 15. Scrivi una funzione che ritorna tutti gli hobby indoor


// ----------------------
// METODI COMBINATI
// ----------------------

// 16. Ottieni i nomi degli hobby con più di 6 ore settimanali (filter + map)
// 17. Trova il nome del primo hobby di tipo "Sport" (filter + map + find)
// 18. Stampa gli hobby con meno di 5 ore settimanali (filter + forEach)
// 19. Ottieni i nomi in maiuscolo degli hobby outdoor (filter + map)
// 20. Calcola il totale delle ore settimanali di tutti gli hobby (map + reduce)