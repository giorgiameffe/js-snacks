// 🔹 ARRAY DI PARTENZA

const students = [
    { name: "Alice", age: 20, votes: [28, 30, 27] },
    { name: "Luca", age: 22, votes: [25, 26, 24] },
    { name: "Marta", age: 19, votes: [30, 30, 29] },
    { name: "Giorgio", age: 21, votes: [18, 22, 20] }
];

// 📝 ESERCIZI

// 1. Stampa in console quanti studenti ci sono

console.log(students.length);

// 2. Stampa il nome del primo studente e l’età dell’ultimo
//    Suggerimento: studenti[0], studenti[studenti.length - 1]

// 3. Crea un array contenente solo i nomi degli studenti
//    Usa .map()

// 4. Filtra gli studenti maggiorenni (età ≥ 21)
//    Usa .filter()

// 5. Trova Marta (oggetto con nome: "Marta")
//    Usa .find()

// 6. Calcola la somma dei voti di Alice
//    Usa .find() e .reduce()

// 7. Crea un array di oggetti con { nome, mediaVoti } per ogni studente
//    Usa .map() e .reduce()

// 8. Trova lo studente con la media più alta
//    Usa .map() e .reduce()

// 9. Verifica se tutti gli studenti hanno almeno un voto ≥ 18
//    Usa .every() o .some()

// 10. Conta quanti studenti hanno media maggiore o uguale a 28
//     Usa .filter() e .length
