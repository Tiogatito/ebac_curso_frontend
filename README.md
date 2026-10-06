# Exercício de TypeScript — módulo 26

Implementação das duas funções solicitadas no curso Profissão: Engenheiro Front-end.

## Funções

O arquivo `src/funcoes.ts` contém:

| Função | Argumentos | Retorno |
| --- | --- | --- |
| `multiplicar` | Dois valores do tipo `number` | Produto dos números, do tipo `number` |
| `saudar` | Um nome do tipo `string` | Concatenação exata de `"Olá " + nome`, do tipo `string` |

Os tipos dos argumentos e do retorno são declarados explicitamente, conforme a aula de tipagem em funções. A saudação preserva o nome recebido e não adiciona pontuação.

## Executar

Com Node.js 18 ou superior e npm instalados, execute na raiz do projeto:

```sh
npm ci
npm start
```

O comando compila os arquivos TypeScript e executa a demonstração em JavaScript. Saída:

```text
Multiplicação de inteiros: 6 × 7 = 42
Multiplicação com decimal: 2.5 × 4 = 10
Multiplicação com negativo: -3 × 5 = -15
Multiplicação com zero: 0 × 10 = 0
Olá Mateus
```

Para somente compilar:

```sh
npm run build
```

## Organização

```text
src/
  funcoes.ts        # As duas funções com tipagem explícita
  demonstracao.ts   # Exemplos de uso
package.json       # Dependência e comandos
package-lock.json  # Versões de instalação
tsconfig.json      # Configuração da compilação
```

O compilador é uma dependência local do projeto. A configuração habilita verificação estrita de tipos e impede a geração de JavaScript quando há erros de compilação. Os arquivos gerados ficam em `dist/`, que não é versionado.

## Entrega

Branch do exercício: [exercicio_ts](https://github.com/Tiogatito/ebac_curso_frontend/tree/exercicio_ts).
