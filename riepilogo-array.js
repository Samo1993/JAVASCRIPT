const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

studenti.forEach(studente => console.log(studente.nome));

const higherGrade = studenti.find(studente => studente.voto > 90);
console.log(higherGrade);

const averageGrades = studenti.reduce((a, studente) => a + studente.voto, 0);
console.log(averageGrades);

const uppercaseNames = studenti.map(studente => studente.nome.toUpperCase());
console.log(uppercaseNames);

const highRating = studenti.filter(studente => studente.voto > 85);
console.log(highRating);
