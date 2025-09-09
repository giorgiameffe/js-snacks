// 🔹 ARRAY DI PARTENZA

const students = [
    { name: "Alice", age: 20, votes: [28, 30, 27] },
    { name: "Luca", age: 22, votes: [25, 26, 24] },
    { name: "Marta", age: 19, votes: [30, 30, 29] },
    { name: "Giorgio", age: 21, votes: [18, 22, 20] }
];

// ================================
// ESERCIZI SUI METODI ARRAY
// ================================

// 1. Trova, utilizzando .find(), lo studente che ha 22 anni.

const findStudent = students.find(student => student.age === 22);
console.log(findStudent);

// 2. Con .find(), individua il primo studente iscritto al corso di Informatica.



// 3. Con .filter(), crea un nuovo array contenente solo gli studenti
//    di età pari o superiore a 21 anni.



// 4. Con .filter(), seleziona tutti gli studenti che hanno almeno un voto pari a 30.



// 5. Usa .map() per generare un array con solo i nomi degli studenti.



// 6. Con .map(), crea un array di oggetti che contengano nome e media voti di ogni studente.



// 7. Con .forEach(), stampa una frase con nome ed età di ogni studente.



// 8. Con .forEach(), calcola la somma totale delle età di tutti gli studenti.



// 9. Con .length, mostra il numero totale di studenti nell'array.



// 10. Con .length, stampa per ogni studente quanti voti ha ricevuto.



// 11. Combina .filter() e .length per contare quanti studenti fanno Informatica.



// ================================
// ESERCIZI SU CICLO FOR E FUNZIONI
// ================================

// Riutilizziamo l'array studenti
const studenti = [
  { nome: "Luca", eta: 20, corso: "Informatica", voti: [28, 30, 26] },
  { nome: "Sara", eta: 22, corso: "Matematica", voti: [25, 27, 29] },
  { nome: "Marco", eta: 19, corso: "Fisica", voti: [30, 30, 28] },
  { nome: "Giulia", eta: 21, corso: "Informatica", voti: [24, 25, 26] }
];


// 1. Usa un ciclo for per stampare i nomi di tutti gli studenti.


 
// 2. Usa un ciclo for per calcolare la media delle età degli studenti.




// 3. Crea una funzione findStudent(name) che restituisca l'oggetto dello studente con quel nome.




// 4. Crea una funzione studentsInProgress(course) che restituisca un array con gli studenti iscritti a quel corso.




// 5. Crea una funzione studentsVotesAvg(nome) che calcoli e restituisca la media dei voti dello studente.




// 6. Crea una funzione goodStudents(e) che restituisca
//    un array con tutti gli studenti che hanno almeno un voto superiore alla soglia.



// 7. Crea una funzione printStudent() che stampi in console ogni studente così:
//    "Luca - 20 anni - Informatica"


 
// 8. Crea una funzione countStudents() che restituisca il numero totale di studenti.





