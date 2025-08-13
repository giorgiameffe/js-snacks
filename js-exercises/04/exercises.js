// ======================
// 🌀 CICLO FOR
// ======================

// Esercizio 1 - Somma degli elementi di un array
// Consegna: Dato un array di numeri, calcola la somma di tutti i valori usando un ciclo for.

const numbers = [3, 7, 2, 9];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {

    const currentNumber = numbers[i];

    sum += currentNumber;
}

console.log(sum);

// Esercizio 2 - Conta i numeri pari
// Consegna: Dato un array di numeri, conta quanti sono pari usando un ciclo for.

{
    const numbers = [1, 4, 6, 9, 12];

    let count = 0;

    for (let i = 0; i < numbers.length; i++) {

        const currentNumber = numbers[i];

        if (currentNumber % 2 === 0) {
            count++
        }
    }

    console.log(count);
}


// ======================
// 🔧 METODI BASE SUGLI ARRAY
// ======================

// Esercizio 3 - Filtra numeri maggiori di 5
// Consegna: Dato un array di numeri, crea un nuovo array contenente solo quelli maggiori di 5.

{
    const numbers = [2, 8, 4, 10, 1];

    const filteredNumbers = numbers.filter(number => number > 5);
    console.log(filteredNumbers);
}

// Esercizio 4 - Doppia i valori
// Consegna: Dato un array di numeri, crea un nuovo array dove ogni numero è raddoppiato.

{
    const numbers = [3, 5, 7, 9];

    const doubledNumbers = numbers.map(number => number * 2);
    console.log(doubledNumbers);
}

// Esercizio 5 - Trova il massimo
// Consegna: Dato un array di numeri, trova il valore massimo usando Math.max.


// ======================
// 🧩 METODI CONCATENATI
// ======================

// Esercizio 6 - Somma dei numeri pari
// Consegna: Dato un array di numeri, calcola la somma solo dei numeri pari usando filter e reduce.

// Esercizio 7 - Parole in maiuscolo ordinate
// Consegna: Dato un array di parole, filtra quelle lunghe più di 3 lettere, trasformale in maiuscolo e ordinane l’elenco.


// ======================
// 👥 ARRAY DI OGGETTI
// ======================

// Esercizio 8 - Estrai i nomi
// Consegna: Dato un array di oggetti persona, estrai un array contenente solo i loro nomi.


// Esercizio 9 - Filtra maggiorenni
// Consegna: Dato un array di persone, crea un array con solo i maggiorenni.


// ======================
// 🛠️ MANIPOLAZIONE AVANZATA
// ======================

// Esercizio 10 - Conta le occorrenze
// Consegna: Dato un array di stringhe, conta quante volte appare ogni elemento.
