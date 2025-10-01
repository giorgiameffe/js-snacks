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
// 2. Stampa il nome del primo hobby
// 3. Stampa il tipo dell’ultimo hobby
// 4. Stampa il nome del terzo hobby
// 5. Stampa le ore settimanali del quarto hobby


// ----------------------
// METODI ARRAY
// ----------------------

// 6. Crea un array con solo i nomi degli hobby
// 7. Crea un array con solo le ore settimanali
// 8. Filtra gli hobby con meno di 5 ore settimanali
// 9. Filtra gli hobby che si praticano indoor
// 10. Stampa una frase per ogni hobby del tipo: "X è un Y che richiede Z ore a settimana"
// 11. Stampa indice e nome di ciascun hobby
// 12. Trova il primo hobby outdoor
// 13. Trova l’hobby che occupa esattamente 8 ore a settimana


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