// 1. ARRAY – Trova la lunghezza
// Dato l’array:
// const fruits = ["cocomero", "pera", "mela", "mango"];
// Stampa il numero totale di elementi contenuti nell’array.

const fruits = ['cocomero', 'pera', 'mela', 'mango'];
console.log(fruits.length);

//  2. OGGETTI – Crea e accedi a un oggetto persona
// Crea un oggetto chiamato person con tre proprietà: name, age, job
// Stampa solo il nome della persona

const person = {
    name: 'Ambra',
    age: 30,
    job: 'designer'
}

console.log(`Nome: ${person.name}`);

// 3. METODI ARRAY – Raddoppia ogni numero usando .map()
// Dato un array di numeri, crea un nuovo array con ogni numero moltiplicato per 2.

const numbers = [3, 8, 5, 9];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// 4. METODI ARRAY – Filtra solo i numeri pari
// Usa .filter() per ottenere un nuovo array contenente solo i numeri pari da un array di numeri.

{
    const numbers = [8, 5, 16, 9, 28];

    const filteredNumbers = numbers.filter(number => number % 2 === 0);
    console.log(filteredNumbers);
}

// 5. ARRAY DI OGGETTI – Estrai solo i nomi da un array
// Hai un array di oggetti, ognuno con un nome e un’età.
// Devi creare un nuovo array che contiene solo i nomi.

const people = [
    {
        name: 'Valentina',
        age: 23
    },
    {
        name: 'Dario',
        age: 30
    },
    {
        name: 'Sofia',
        age: 14
    },
    {
        name: 'Giacomo',
        age: 10
    }
]

const peopleNames = people.map(person => person.name);
console.log(peopleNames);

// 6. FUNZIONI – Conta le vocali in una stringa
// Scrivi una funzione chiamata countVowels che prende una stringa
// e restituisce il numero di vocali presenti (a, e, i, o, u, anche maiuscole).

function countVowels(word) {

    let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < word.length; i++) {

        const currentLetter = word[i];

        if (vowels.includes(currentLetter)) {
            count++
        }
    }

    return count;
}

console.log(countVowels('Funzioni'));

// 7. CICLO FOR – Calcola la somma totale di numeri in un array
// Dato un array di numeri, usa un ciclo for per calcolare e stampare la somma totale di tutti i valori.

{
    const numbers = [1, 5, 3, 7];

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        const currentNumber = numbers[i];
        sum += currentNumber;
    }

    console.log(sum)

}

// 8. BONUS – Trova la persona più anziana
// Hai un array di oggetti, ognuno con un nome e un’età.
// Scrivi un algoritmo che trovi la persona più anziana e stampi il suo nome.

{
    const people = [
        {
            name: 'Giuseppe',
            age: 40
        },
        {
            name: 'Silvia',
            age: 28
        },
        {
            name: 'Roberto',
            age: 51
        }
    ];

    let olderPerson = people[0];

    for (let i = 0; i < people.length; i++) {

        if (people[i].age > olderPerson.age) {
            olderPerson = people[i]
        }
    }

    console.log(olderPerson.name);
}