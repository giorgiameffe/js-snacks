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

const findStudent = students.find(student => student.name === 'Marta');
console.log(findStudent);

// 6. Calcola la somma dei voti di Alice

const votesAlice = students.find(student => student.name === 'Alice').votes;
const sumVotes = votesAlice.reduce((accumulator, currentValue) => accumulator += currentValue, 0);
console.log(sumVotes);

// 7. Stampa solo i voti del primo studente

console.log(students[0].votes)

// 8. Stampa il nome dello studente più giovane

const yougestStudent = students.reduce((student, min) => student.age < min.age ? student : min);
console.log(yougestStudent);

// 9. Controlla se esiste uno studente di 19 anni

const youngStudent = students.some(student => student.age === 19);
console.log(youngStudent);

// 10. Conta quanti studenti hanno almeno un voto pari a 30

const goodStudents = students.filter(student => student.votes.includes(30));
console.log(goodStudents.length);
