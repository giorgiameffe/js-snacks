// 🔹 ARRAY DI PARTENZA

const boardGames = [
    { name: "Catan", players: 4, duration: 90, complexity: "Medio", year: 1995, available: true },
    { name: "Monopoly", players: 6, duration: 120, complexity: "Basso", year: 1935, available: false },
    { name: "Carcassonne", players: 5, duration: 45, complexity: "Medio", year: 2000, available: true },
    { name: "Scacchi", players: 2, duration: 60, complexity: "Alto", year: 1475, available: true },
    { name: "Ticket to Ride", players: 5, duration: 75, complexity: "Medio", year: 2004, available: false },
    { name: "Risiko", players: 6, duration: 180, complexity: "Medio-Alto", year: 1957, available: true },
    { name: "Dixit", players: 6, duration: 30, complexity: "Basso", year: 2008, available: true }
];


// ----------------------
// CICLO FOR
// ----------------------

// 1. Stampare il numero totale di giochi

let totalBoardgames = 0;

for (let i = 0; i < boardGames.length; i++) {

    totalBoardgames++
}

console.log('Numero di giochi:', totalBoardgames);


// 2. Stampare tutti i nomi dei giochi uno sotto l’altro

for (let i = 0; i < boardGames.length; i++) {

    console.log(boardGames[i].name);
}

// 3. Stampare tutti i giochi che durano più di 100 minuti

for (let i = 0; i < boardGames.length; i++) {

    if (boardGames[i].duration > 100) {
        console.log(boardGames[i]);

    }
}

// 4. Stampare la somma totale della durata di tutti i giochi

let sum = 0;

for (let i = 0; i < boardGames.length; i++) {

    const currentBoardgame = boardGames[i];

    sum += currentBoardgame.duration
}

console.log('Somma durata dei giochi:', sum);


// ----------------------
// LENGTH & ACCESSO
// ----------------------

// 5. Stampare il nome del primo e dell’ultimo gioco

const firstBoardgame = boardGames[0];
const lastBoardgame = boardGames[boardGames.length - 1];

console.log('Primo gioco:', firstBoardgame, 'Ultimo gioco:', lastBoardgame);


// ----------------------
// METODI ARRAY
// ----------------------

// 6. Creare un array con solo i nomi dei giochi

const boardgamesNames = boardGames.map(b => b.name);
console.log(boardgamesNames);

// 7. Creare un array di stringhe tipo: "NOME – X giocatori – COMPLESSITÀ"

const descriptions = boardGames.map(b => `${b.name.toUpperCase()} - ${b.players} giocatori - ${b.complexity.toUpperCase()}`);
console.log(descriptions);

// 8. Ottenere tutti i giochi disponibili

const availableBoardgames = boardGames.filter(b => b.available);
console.log('Giochi disponibili:', availableBoardgames);

// 9. Ottenere tutti i giochi che durano meno di 60 minuti

const shortBoardgames = boardGames.filter(b => b.duration < 60);
console.log('Giochi corti:', shortBoardgames);

// 10. Ottenere tutti i giochi per più di 4 giocatori

const boardgamesManyPlayers = boardGames.filter(b => b.players > 4);
console.log(boardgamesManyPlayers);

// 11. Trovare il primo gioco pubblicato dopo il 2000

const firstRecentGame = boardGames.find(b => b.year > 2000);
console.log(firstRecentGame);

// 12. Trovare il gioco chiamato "Risiko"

const findRisiko = boardGames.find(b => b.name === 'Risiko');
console.log(findRisiko);

// 13. Stampare per ogni gioco: "[Nome] dura [durata] minuti"

boardGames.forEach(b => console.log(`${b.name} dura ${b.duration} minuti`));

// 14. Stampare tutti i nomi dei giochi in maiuscolo

boardGames.forEach(b => console.log(b.name.toUpperCase()));

// 15. Troviamo tutti i giochi con complessità "Alto" o "Medio-Alto"

const difficultBoardgames = boardGames.filter(b => b.complexity === 'Alto' || b.complexity === 'Medio-Alto');
console.log(difficultBoardgames);


// ----------------------
// MISTI
// ----------------------

// 16. Stampare solo i nomi dei giochi disponibili

availableBoardgames.forEach(b => console.log(b.name));
console.log('----');

// 17. Ottenere i nomi dei giochi di complessità "Medio" o superiore

const mediumAndDifficultGames = boardGames.filter(b => b.complexity === 'Medio' || b.complexity === 'Medio-Alto' || b.complexity === 'Alto');

mediumAndDifficultGames.forEach(b => console.log(b.name));

// 18. Calcolare la media della durata dei soli giochi disponibili

const durationSum = availableBoardgames.reduce((tot, currentValue) => tot + currentValue.duration, 0);

const durationAverage = durationSum / availableBoardgames.length;
console.log('Media durata:', durationAverage);

// 19. Creare un array di stringhe: "[Nome] – anno [year]" per i giochi dopo il 1990

const gamesAfter1990 = boardGames.filter(b => b.year > 1990).map(b => `${b.name} - anno ${b.year}`);
console.log(gamesAfter1990);

// 20. Sommare il numero totale di giocatori per i giochi disponibili e con durata maggiore di 60 minuti

const totalPalyersAvailableGames = boardGames.filter(b => b.available && b.duration > 60).reduce((tot, currentGame) => {

    return tot += currentGame.players;
}, 0)

console.log(`Numero totale di giocatori per giochi disponibili: ${totalPalyersAvailableGames}`);