// Dados fictícios usados na demonstração do exercício.
export const alunos = [
    { nome: 'Ana', nota: 8 },
    { nome: 'Bruno', nota: 5.5 },
    { nome: 'Carla', nota: 6 },
    { nome: 'Diego', nota: 9.5 },
    { nome: 'Elisa', nota: 5.9 },
    { nome: 'Felipe', nota: 0 },
    { nome: 'Gabriela', nota: 10 },
    { nome: 'Hugo', nota: 4 }
];

// Retorna os objetos completos dos alunos com nota maior ou igual a 6.
export const filtrarAlunosAprovados = (listaAlunos) => {
    if (!Array.isArray(listaAlunos)) {
        throw new TypeError('Informe um array de alunos.');
    }

    listaAlunos.forEach((aluno) => {
        if (!aluno || typeof aluno.nome !== 'string' || aluno.nome.trim() === ''
            || typeof aluno.nota !== 'number' || !Number.isFinite(aluno.nota)
            || aluno.nota < 0 || aluno.nota > 10) {
            throw new TypeError('Cada aluno deve ter nome e nota numérica entre 0 e 10.');
        }
    });

    return listaAlunos.filter(({ nota }) => nota >= 6);
};
