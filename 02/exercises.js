// =======================================
// 🔁 ESERCIZI SUI CICLI FOR
// =======================================

/* 
1. Somma dei numeri da 1 a 100
   Scrivi un ciclo for che calcoli e stampi la somma di tutti i numeri da 1 a 100.
*/

let sum = 0;

for (let i = 1; i <= 100; i++) {
   sum += i
}

console.log(sum)


/* 
2. Numeri pari da 1 a 50
   Scrivi un ciclo for che stampi solo i numeri pari compresi tra 1 e 50.
*/

for (let i = 1; i <= 50; i++) {

   if (i % 2 === 0) {
      console.log(i);
   }
}


/* 
3. Tabellina del 5
   Scrivi un ciclo for che stampi la tabellina del 5, dalla moltiplicazione per 1 fino a 10.
   Esempio output: 
   5 x 1 = 5
   5 x 2 = 10
   ...
   5 x 10 = 50
*/

const number = 5;

for (let i = 1; i <= 10; i++) {

   console.log(`${number} x ${i} = ${number * i}`);
}


// =======================================
// 🧩 ESERCIZI SULLE FUNZIONI
// =======================================

/*
4. Funzione somma(a, b)
   Crea una funzione che accetta due numeri come parametri e restituisce la loro somma.
*/


function somma(num1, num2) {

   return num1 + num2;
}

console.log(somma(10, 7));


/*
5. Funzione isPari(numero)
   Scrivi una funzione che ritorni true se il numero passato è pari, altrimenti false.
*/




/*
6. Funzione media(array)
   Crea una funzione che prende in input un array di numeri e ritorna la media aritmetica.
*/




// =======================================
// 📦 ESERCIZI SU ARRAY & METODI
// =======================================

/*
7. Trova il numero massimo in un array
   Dato un array di numeri, trova il numero più grande usando un ciclo oppure Math.max().
*/




/*
8. Filtra numeri pari
   Usa .filter() per creare un nuovo array che contenga solo i numeri pari di un array di partenza.
*/




/*
9. Moltiplica per 2 ogni elemento
   Usa .map() per creare un nuovo array in cui ogni elemento è il doppio di quello originale.
*/




/*
10. Somma tutti gli elementi
    Usa .reduce() per calcolare la somma di tutti gli elementi in un array numerico.
*/




// =======================================
// 🧱 ESERCIZI SUGLI OGGETTI
// =======================================

/*
11. Oggetto persona
    Crea un oggetto chiamato persona con le proprietà: firstname, lastname, age.
    Stampa una frase come: "Ciao, mi chiamo Mario Rossi e ho 30 anni".
*/




/*
12. Filtro utenti maggiorenni
    Dato un array di oggetti con name ed age, usa .filter() per ottenere un nuovo array con solo gli utenti maggiorenni.
*/

const users = [
   { name: "Alice", age: 25 },
   { name: "Bob", age: 17 },
   { name: "Carla", age: 30 }
];



/*
13. Cerca utente per nome (con .find())
    Hai un array di oggetti con nome ed email.
    Scrivi una funzione findUser(nome) che ritorni l'oggetto utente con quel nome usando .find().
*/

{
   const users = [
      { name: "Luca", email: "luca@example.com" },
      { name: "Giulia", email: "giulia@example.com" },
      { name: "Marco", email: "marco@example.com" }
   ];
}