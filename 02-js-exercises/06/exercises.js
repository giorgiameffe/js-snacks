// 🔹 ARRAY DI PARTENZA

const travels = [
    { id: 1, destination: "Parigi", duration: 5, price: 750, company: "Air France" },
    { id: 2, destination: "Roma", duration: 3, price: 500, company: "Alitalia" },
    { id: 3, destination: "Tokyo", duration: 10, price: 1500, company: "Japan Airlines" },
    { id: 4, destination: "New York", duration: 7, price: 1200, company: "Delta" },
    { id: 5, destination: "Sydney", duration: 12, price: 1800, company: "Qantas" },
    { id: 6, destination: "Londra", duration: 4, price: 700, company: "British Airways" },
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

// 4. Creare un array di tutte le destinazioni dei viaggi.

// 5. Ottenere tutti i viaggi che costano meno di 1000 euro.

// 6. Trovare il primo viaggio con durata maggiore di 10 giorni.

// 7. Creare un array solo delle compagnie aeree dei viaggi.

// 8. Stampare una frase per ogni viaggio:"Parigi dura 5 giorni e costa 750 euro."

// ----------------------
// FUNZIONI
// ----------------------

// 9. Scrivi una funzione che restituisce un nuovo array contenente solo le destinazioni dei viaggi
// il cui prezzo è maggiore di 1000 euro.

// 10. Scrivi una funzione che prende il nome di una destinazione e usa find per restituire l’oggetto viaggio corrispondente.

// ----------------------
// METODI COMBINATI
// ----------------------

// 11. Creare un array con i viaggi che durano più di 5 giorni e poi  ottenere solo le destinazioni.

// 12. Conta quanti viaggi durano meno di 6 giorni usando filter e la proprietà length.