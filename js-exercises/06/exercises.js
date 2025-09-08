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

console.log(students[0].name);
console.log(students[students.length - 1].age);

// 3. Crea un array contenente solo i nomi degli studenti

const studentsName = students.map(student => student.name);
console.log(studentsName);

// 4. Filtra gli studenti maggiorenni (età ≥ 21)

const filteredStudents = students.filter(student => student.age >= 21);
console.log(filteredStudents);

// 5. Trova Marta (oggetto con nome: "Marta")

// 6. Calcola la somma dei voti di Alice

// 7. Crea un array di oggetti con { nome, mediaVoti } per ogni studente

// 8. Trova lo studente con la media più alta

// 9. Verifica se tutti gli studenti hanno almeno un voto ≥ 18

// 10. Conta quanti studenti hanno media maggiore o uguale a 28
