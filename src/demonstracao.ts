import { multiplicar, saudar } from './funcoes.js';

const produtoInteiros: number = multiplicar(6, 7);
const produtoDecimais: number = multiplicar(2.5, 4);
const produtoNegativo: number = multiplicar(-3, 5);
const produtoComZero: number = multiplicar(0, 10);
const saudacao: string = saudar('Mateus');

console.log('Multiplicação de inteiros: 6 × 7 =', produtoInteiros);
console.log('Multiplicação com decimal: 2.5 × 4 =', produtoDecimais);
console.log('Multiplicação com negativo: -3 × 5 =', produtoNegativo);
console.log('Multiplicação com zero: 0 × 10 =', produtoComZero);
console.log(saudacao);
