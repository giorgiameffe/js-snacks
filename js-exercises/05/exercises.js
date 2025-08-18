// ============================
// 🌀 CICLO FOR
// ============================


// 1. Stampa i numeri da 0 a 4
// CONSEGNA: Scrivi un ciclo for che stampi i numeri da 0 a 4.

for (let i = 0; i <= 4; i++) {

    console.log(i);
}


// 2. Fai un countdown da 5 a 1
// CONSEGNA: Scrivi un ciclo for che conti da 5 fino a 1.

for (let i = 5; i >= 1; i--) {

    console.log(i);
}


// 3. Stampa solo i numeri pari da 0 a 10
// CONSEGNA: Scrivi un ciclo for che stampi solo i numeri pari da 0 a 10.

for (let i = 0; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }
}


// 4. Calcola la somma dei numeri da 1 a 5
// CONSEGNA: Scrivi un ciclo for che calcoli la somma dei numeri da 1 a 5
// e alla fine stampi il risultato.

let sum = 0;

for (let i = 1; i <= 5; i++) {

    sum += i;
}

console.log(sum);


// 5. Stampa tutti gli elementi di un array
// CONSEGNA: Dato l’array ["🍎", "🍌", "🍇", "🍑"], stampane gli elementi uno per uno.

const fruits = ["🍎", "🍌", "🍇", "🍑"];

for (let i = 0; i < fruits.length; i++) {

    const currentFruit = fruits[i];
    console.log(currentFruit);
}


// 6. Interrompi il ciclo con break
// CONSEGNA: Scrivi un ciclo for che conta da 1 a 10 ma si ferma quando arriva a 5.


// 7. Trova il quadrato dei primi 10 numeri
// CONSEGNA: Scrivi un ciclo for che stampi i quadrati dei numeri da 1 a 10.
// (es: 1, 4, 9, 16, ...)

