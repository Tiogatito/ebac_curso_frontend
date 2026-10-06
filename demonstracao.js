import { alunos, filtrarAlunosAprovados } from './alunos.js';

console.log('Lista completa de alunos:');
console.table(alunos);

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log('\nAlunos com nota maior ou igual a 6:');
console.table(alunosAprovados);

console.log(`\nTotal de alunos: ${alunos.length}`);
console.log(`Total com nota maior ou igual a 6: ${alunosAprovados.length}`);

alunosAprovados.forEach(({ nome, nota }) => {
    console.log(`${nome}: nota ${nota}`);
});
