'use strict';

const { Veiculo, Carro, Moto } = require('./veiculos');

// Três objetos diferentes, criados com as duas classes herdeiras.
const carroDoJoao = new Carro('Hyundai', 'HB20', 2024, 4);
const carroDaMaria = new Carro('Chevrolet', 'Onix', 2022, 4);
const motoDoCesar = new Moto('Yamaha', 'Fazer', 2023, 250);
const veiculos = [carroDoJoao, carroDaMaria, motoDoCesar];

console.log('ORIENTAÇÃO A OBJETOS — VEÍCULOS\n');

console.log('1. Instâncias e polimorfismo');
veiculos.forEach(function (veiculo) {
    console.log(veiculo.getDescricao());
});

console.log('\n2. Tipos, classes e herança');
veiculos.forEach(function (veiculo) {
    console.log(veiculo.modelo + ': tipo ' + typeof veiculo
        + ', classe ' + veiculo.constructor.name
        + ', instância de Veiculo: ' + (veiculo instanceof Veiculo));
});
console.log('HB20 é Carro:', carroDoJoao instanceof Carro);
console.log('Fazer é Moto:', motoDoCesar instanceof Moto);

console.log('\n3. Acesso aos atributos');
console.log('Marca por notação de ponto:', carroDoJoao.marca);
console.log('Modelo por notação de colchetes:', carroDoJoao['modelo']);
console.log('Portas do Onix:', carroDaMaria.numeroPortas);
console.log('Cilindradas da Fazer:', motoDoCesar.cilindradas);

console.log('\n4. Métodos herdados e estado encapsulado');
veiculos.forEach(function (veiculo, indice) {
    console.log(veiculo.ligar());
    console.log(veiculo.rodar((indice + 1) * 10));
    console.log('Quilometragem:', veiculo.getQuilometragem(), 'km');
    console.log(veiculo.desligar());
    console.log('Ligado:', veiculo.estaLigado());
});

console.log('\nCada objeto mantém sua própria quilometragem:');
console.log('HB20:', carroDoJoao.getQuilometragem(), 'km');
console.log('Onix:', carroDaMaria.getQuilometragem(), 'km');
console.log('Fazer:', motoDoCesar.getQuilometragem(), 'km');
