# Orientação a objetos com JavaScript

Exercício do módulo 24 do curso de Engenharia Front-End, na branch `oo_js`.

## Executar

Com o Node.js instalado, execute na pasta do projeto:

```sh
npm start
```

Também é possível executar `node demonstracao.js` diretamente. O projeto não utiliza dependências externas e não precisa de `npm install`.

## Requisitos do exercício

| Requisito | Implementação |
| --- | --- |
| Criar uma classe de uma abstração | `Veiculo`, com marca, modelo, ano e comportamentos comuns |
| Criar pelo menos duas classes herdeiras | `Carro` e `Moto`, ambas derivadas de `Veiculo` |
| Criar pelo menos três instâncias | `carroDoJoao`, `carroDaMaria` e `motoDoCesar` |
| Armazenar no repositório do curso | Branch `oo_js` em `ebac_curso_frontend` |

O tema segue o exemplo de veículos apresentado no material de apoio `FrontEnd m24_supportmaterial01 OO JS.pdf`. As classes são representadas por funções construtoras, seguindo a abordagem da aula de criação de objetos.

## Conceitos do módulo

- **Abstração:** `Veiculo` concentra os atributos e comportamentos compartilhados.
- **Instanciação:** os três objetos são criados com `new` e conservam estados independentes.
- **Herança:** `Veiculo.call(this, ...)` inicializa os atributos comuns; `Object.create(Veiculo.prototype)` conecta os protótipos de `Carro` e `Moto` à classe base.
- **Tipos e instâncias:** a demonstração utiliza `typeof`, `constructor` e `instanceof`.
- **Atributos:** exemplos de acesso por ponto e por colchetes, além dos atributos específicos de cada classe herdeira.
- **Encapsulamento:** `ligado` e `quilometragem` são variáveis locais do construtor, acessíveis pelos métodos da instância. Não são propriedades públicas.
- **Polimorfismo:** `Carro` e `Moto` implementam versões próprias de `getDescricao()`, reutilizando a descrição comum da classe base.
- **Validação:** os construtores rejeitam atributos inválidos; o veículo precisa estar ligado para percorrer uma distância positiva.

## Organização

- `veiculos.js`: classe base, classes herdeiras, métodos e validações.
- `demonstracao.js`: as três instâncias e exemplos de uso dos conceitos.
- `package.json`: comando de execução, sem bibliotecas externas.

A saída da demonstração mostra as três descrições, a relação de herança e as quilometragens finais de 10, 20 e 30 km.

Referência técnica: [herança e cadeia de protótipos em JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).
