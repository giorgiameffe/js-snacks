// 🔹 ARRAY DI PARTENZA

const students = [
    { name: "Mario", age: 20, course: "Informatica", votes: [28, 30, 26] },
    { name: "Elene", age: 22, course: "Matematica", votes: [25, 27, 29] },
    { name: "Veronica", age: 19, course: "Fisica", votes: [30, 30, 28] },
    { name: "Giorgia", age: 21, course: "Informatica", votes: [24, 25, 26] }
];

// ================================
// ESERCIZI SUI METODI ARRAY
// ================================

// 1. Trova, utilizzando .find(), lo studente che ha 22 anni.

const student = students.find(student => student.age === 22);
console.log(student);

// 2. Con .find(), individua il primo studente iscritto al corso di Informatica.

const firstStudent = students.find(student => student.course === 'Informatica');
console.log(firstStudent);

// 3. Con .filter(), crea un nuovo array contenente solo gli studenti
//    di età pari o superiore a 21 anni.

const filteredStudents = students.filter(student => student.age >= 21);
console.log(filteredStudents);

// 4. Con .filter(), seleziona tutti gli studenti che hanno almeno un voto pari a 30.

const goodStudents = students.filter(student => student.votes.includes(30));
console.log(goodStudents);

// 5. Usa .map() per generare un array con solo i nomi degli studenti.

const studentsNames = students.map(student => student.name);
console.log(studentsNames);

// 6. Con .forEach(), stampa una frase con nome ed età di ogni studente.

students.forEach(student => console.log(`Ciao sono ${student.name} e ho ${student.age} anni`));

// 7. Con .forEach(), calcola la somma totale delle età di tutti gli studenti.

let sum = 0;

students.forEach(student => {

    sum += student.age;
})

console.log('Somma età:', sum);

// 8. Con .length, mostra il numero totale di studenti nell'array.

console.log('Numero studenti:', students.length);

// 9. Con .length, stampa per ogni studente quanti voti ha ricevuto.

students.forEach(student => console.log(`${student.name} ha ricevuto ${student.votes.length} voti`))

// 10. Combina .filter() e .length per contare quanti studenti fanno Informatica.

const itStudents = students.filter(student => student.course === 'Informatica');
console.log('Numero studenti IT:', itStudents.length);



// ================================
// ESERCIZI SU CICLO FOR E FUNZIONI
// ================================

// Riutilizziamo l'array studenti

// 1. Usa un ciclo for per stampare i nomi di tutti gli studenti.

for (let i = 0; i < students.length; i++) {

    console.log(students[i].name);
}

// 2. Usa un ciclo for per calcolare la media delle età degli studenti.

let sumAges = 0;

for (let i = 0; i < students.length; i++) {

    sumAges += students[i].age;
}

const averageAges = sumAges / students.length;
console.log(averageAges);

// 3. Crea una funzione findStudent(name) che restituisca l'oggetto dello studente con quel nome.

function findStudent(name) {

    return students.find(student => student.name === name);
}

console.log(findStudent('Veronica'));

// 4. Crea una funzione studentsInProgress(course) che restituisca un array con gli studenti iscritti a quel corso.

function studentsInProgress(course) {

    return students.filter(student => student.course === course);
}

console.log(studentsInProgress('Informatica'));

// 5. Crea una funzione printStudent() che stampi in console ogni studente così:
//    "Luca - 20 anni - Informatica"

function printStudent() {

    students.forEach(student => console.log(`${student.name} - ${student.age} anni - ${student.course}`))
}

printStudent();

// 6. Crea una funzione countStudents() che restituisca il numero totale di studenti.

function countStudents() {

    console.log(students.length);
}

countStudents();