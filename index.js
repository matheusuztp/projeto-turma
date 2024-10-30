const Aluno = require('./models/Aluno');
const Turma = require('./models/Turma');
const TurmaPresencial = require('./models/TurmaPresencial');

const aluno1 = new Aluno('Maria Silva', 'maria.silva', '2023001');

const turma1 = new Turma('TURMA1', 8.5);
console.log(`Turma ${turma1.codigo} aprovado? ${turma1.aprovado()}`); // true

const turmaPresencial1 = new TurmaPresencial('TURMA2', 6.5, 80);
console.log(`Turma Presencial ${turmaPresencial1.codigo} aprovado? ${turmaPresencial1.aprovado()}`); // false (nota < 7)
