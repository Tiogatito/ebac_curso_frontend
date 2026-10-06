'use strict';

function validarTexto(valor, atributo) {
    if (typeof valor !== 'string' || valor.trim() === '') {
        throw new TypeError(atributo + ' deve ser um texto não vazio.');
    }
}

function validarNumeroPositivo(valor, atributo) {
    if (typeof valor !== 'number' || !Number.isFinite(valor) || valor <= 0) {
        throw new TypeError(atributo + ' deve ser um número positivo.');
    }
}

// Classe base: reúne os atributos e comportamentos comuns dos veículos.
function Veiculo(marca, modelo, ano) {
    validarTexto(marca, 'Marca');
    validarTexto(modelo, 'Modelo');
    validarNumeroPositivo(ano, 'Ano');
    if (!Number.isInteger(ano)) {
        throw new TypeError('Ano deve ser um número inteiro.');
    }

    this.marca = marca.trim();
    this.modelo = modelo.trim();
    this.ano = ano;

    // Variáveis locais ficam encapsuladas e pertencem a cada instância.
    let ligado = false;
    let quilometragem = 0;

    this.estaLigado = function () {
        return ligado;
    };

    this.getQuilometragem = function () {
        return quilometragem;
    };

    this.ligar = function () {
        ligado = true;
        return this.modelo + ' ligado.';
    };

    this.desligar = function () {
        ligado = false;
        return this.modelo + ' desligado.';
    };

    this.rodar = function (distancia) {
        validarNumeroPositivo(distancia, 'Distância');
        if (!ligado) {
            throw new Error('Ligue o veículo antes de rodar.');
        }
        if (!Number.isFinite(quilometragem + distancia)) {
            throw new RangeError('A quilometragem ultrapassa o limite numérico.');
        }
        quilometragem += distancia;
        return this.modelo + ' percorreu ' + distancia + ' km.';
    };
}

Veiculo.prototype.getDescricao = function () {
    return this.marca + ' ' + this.modelo + ' (' + this.ano + ')';
};

// Classe herdeira: reutiliza o construtor e os métodos de Veiculo.
function Carro(marca, modelo, ano, numeroPortas) {
    validarNumeroPositivo(numeroPortas, 'Número de portas');
    if (!Number.isInteger(numeroPortas)) {
        throw new TypeError('Número de portas deve ser um número inteiro.');
    }

    Veiculo.call(this, marca, modelo, ano);
    this.numeroPortas = numeroPortas;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

// Polimorfismo: cada classe especializa o mesmo método getDescricao.
Carro.prototype.getDescricao = function () {
    return 'Carro: ' + Veiculo.prototype.getDescricao.call(this)
        + ' — ' + this.numeroPortas + ' portas';
};

function Moto(marca, modelo, ano, cilindradas) {
    validarNumeroPositivo(cilindradas, 'Cilindradas');
    Veiculo.call(this, marca, modelo, ano);
    this.cilindradas = cilindradas;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.getDescricao = function () {
    return 'Moto: ' + Veiculo.prototype.getDescricao.call(this)
        + ' — ' + this.cilindradas + ' cilindradas';
};

module.exports = { Veiculo, Carro, Moto };
