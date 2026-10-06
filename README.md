# Exercício ES6 — Alunos

Exercício do módulo 25 do curso de Engenharia Front-End. Código armazenado na branch `exercicio_es6` do repositório do curso.

## Executar

Com o Node.js instalado, execute:

```sh
npm start
```

Também é possível executar `node demonstracao.js`. Não é necessário instalar dependências, extensões ou executar `npm install`.

## Requisitos

| Pedido do exercício | Implementação |
| --- | --- |
| Array de objetos com nome e nota dos alunos | `alunos`, em `alunos.js`, com oito alunos fictícios |
| Função que retorne apenas quem teve nota maior ou igual a 6 | `filtrarAlunosAprovados(listaAlunos)`, usando `filter` e `nota >= 6` |
| Armazenar no repositório do curso | Branch `exercicio_es6` |

A função retorna os objetos completos e mantém a ordem dos alunos. O array original não é alterado. O resultado é um novo array; seus objetos continuam sendo os mesmos objetos da lista de entrada.

São utilizados `const`, funções de seta, desestruturação de objetos, métodos de arrays, módulos JavaScript e template literals. A execução usa os recursos nativos do Node.js, sem necessidade de transpilar com Babel.

## Resultado da demonstração

| Nome | Nota |
| --- | --- |
| Ana | 8 |
| Carla | 6 |
| Diego | 9,5 |
| Gabriela | 10 |

A nota 6 está incluída. As notas abaixo de 6, como 5,9 e 5,5, ficam fora do resultado. A lista de exemplo contém notas de 0 a 10.

## Organização

- `alunos.js`: dados fictícios, validação de entrada e função de filtragem.
- `demonstracao.js`: exibição da lista completa e do resultado da função.
- `package.json`: comando de execução e configuração dos módulos JavaScript.

Uma lista vazia retorna um array vazio. Entradas inválidas geram `TypeError`, evitando comparação de notas textuais ou dados incompletos.

Referência: [Array.prototype.filter — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
