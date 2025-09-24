// 🔹 ARRAY DI PARTENZA

const travels = [
    { id: 1, destination: "Parigi", duration: 5, price: 750, airline: "Air France" },
    { id: 2, destination: "Roma", duration: 3, price: 500, airline: "Alitalia" },
    { id: 3, destination: "Tokyo", duration: 10, price: 1500, airline: "Japan Airlines" },
    { id: 4, destination: "New York", duration: 7, price: 1200, airline: "Delta" },
    { id: 5, destination: "Sydney", duration: 12, price: 1800, airline: "Qantas" },
    { id: 6, destination: "Londra", duration: 4, price: 700, airline: "British Airways" },
];

// ----------------------
// CICLO FOR
// ----------------------

// 1. Usa un ciclo for per stampare tutte le destinazioni dei viaggi.

for (let i = 0; i < travels.length; i++) {

    console.log(travels[i].destination);
}

// 2. Calcola la somma totale dei prezzi di tutti i viaggi usando un ciclo for.

let sum = 0;

for (let i = 0; i < travels.length; i++) {

    const currentPrice = travels[i].price;

    sum += currentPrice;
}

console.log(sum);

// ----------------------
// METODI ARRAY
// ----------------------

// 3. Stampare il prezzo di ogni viaggio.

travels.forEach(travel => console.log(`Prezzo: ${travel.price}€`));

// 4. Creare un array di tutte le destinazioni dei viaggi.

const travelsDestinations = travels.map(travel => travel.destination);
console.log(travelsDestinations);

// 5. Ottenere tutti i viaggi che costano meno di 1000 euro.

const lessExpensiveTravels = travels.filter(travel => travel.price < 1000);
console.log(lessExpensiveTravels);

// 6. Trovare il primo viaggio con durata maggiore di 10 giorni.

const firstLongTravel = travels.find(travel => travel.duration > 10);
console.log(firstLongTravel);

// 7. Creare un array solo delle compagnie aeree dei viaggi.

const airlines = travels.map(travel => travel.airline);
console.log(airlines);

// 8. Stampare una frase per ogni viaggio:"Parigi dura 5 giorni e costa 750 euro."

travels.forEach(travel => console.log(`${travel.destination} dura ${travel.duration} giorni e costa ${travel.price} euro`));

// 9. Calcola il totale della durata di tutti i viaggi

const totDuration = travels.reduce((tot, currentTravel) => tot + currentTravel.duration, 0);
console.log(`Durata totale viaggi: ${totDuration} giorni`);

// 10. Calcolare il prezzo medio dei viaggi

const totPrice = travels.reduce((tot, currentTravel) => tot + currentTravel.price, 0);

const priceAverage = totPrice / travels.length;
console.log(`Prezzo medio dei viaggi: ${priceAverage} €`);

// 11. Calcolare la somma totale dei prezzi dei viaggi

console.log(`Prezzo totale dei viaggi: ${totPrice} €`);

// ----------------------
// FUNZIONI
// ----------------------

// 12. Scrivi una funzione che restituisce un nuovo array contenente solo le destinazioni dei viaggi
// il cui prezzo è maggiore di 1000 euro.

function getDestination(array) {

    return array.filter(e => e.price > 1000).map(e => e.destination);
}

console.log(getDestination(travels));

// 13. Scrivi una funzione che prende il nome di una destinazione e usa find per restituire l’oggetto viaggio corrispondente.

function getCity(destination) {

    return travels.find(e => e.destination === destination);

}

console.log(getCity('Roma'));

// ----------------------
// METODI COMBINATI
// ----------------------

// 14. Creare un array con i viaggi che durano più di 5 giorni e poi ottenere solo le destinazioni

const destinations = travels.filter(travel => travel.duration > 5).map(travel => travel.destination);
console.log(destinations);

// 15. Conta quanti viaggi durano meno di 6 giorni usando filter e la proprietà length.

const shortTravels = travels.filter(travel => travel.duration < 6);

const shortTravelsNumber = shortTravels.length;
console.log(shortTravelsNumber);

// 16. Contare quanti viaggi hanno durata maggiore di 7 giorni

const longTravels = travels.filter(travel => travel.duration > 7);

console.log('Numero viaggi che durano più di 7 giorni:', longTravels.length);

// ----------------------
// LENGTH & ACCESSO
// ----------------------

// 17. Accedi al primo viaggio nell'array e stampa la sua destinazione

const firstTravel = travels[0];
console.log('Destinazione primo viaggio:', firstTravel.destination)

// 18. Accedi all'ultimo viaggio nell'array e stampa la sua destinazione

const lastTravel = travels[travels.length - 1];
console.log('Destinazione ultimo viaggio:', lastTravel.destination);

// 19. Accedi al penultimo viaggio nell'array e stampa la sua destinazione

const secondLastTravel = travels[travels.length - 2];
console.log('Destinazione penultimo viaggio:', secondLastTravel.destination);

// 20. Accedi al terzo viaggio nell'array e stampa la sua durata

const thirdTravel = travels[2];
console.log(`Durata terzo viaggio: ${thirdTravel.duration} giorni`);