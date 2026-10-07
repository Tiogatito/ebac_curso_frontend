# Exercício Cypress — Agenda de contatos

Testes de ponta a ponta para a aplicação indicada no módulo 34:

https://ebac-agenda-contatos-tan.vercel.app/

## Requisitos

- Node.js 24 e npm.
- Acesso à internet para carregar a aplicação e sua API.

O Cypress é uma dependência local do projeto. Não é necessário instalar extensões, criar conta no Cypress Cloud ou configurar credenciais.

## Instalação e execução

```sh
npm ci
npm test
```

Para acompanhar os testes pela interface do Cypress:

```sh
npm run test:open
```

Selecione **E2E Testing**, escolha um navegador e abra `contatos.cy.js`.

Para executar no Google Chrome instalado no computador:

```sh
npm run test:chrome
```

## Cenários

| Teste | Verificações |
| --- | --- |
| Inclusão | Preenche nome, e-mail e telefone, adiciona o contato, confere seus dados, a quantidade e a limpeza do formulário. |
| Alteração | Abre a edição, confere os valores iniciais, altera os três campos, salva e verifica os novos dados e a quantidade preservada. |
| Remoção | Cria um contato exclusivo para o cenário, exclui esse contato e verifica sua ausência e a atualização do contador. |

As requisições são observadas com `cy.intercept` sem substituir as respostas da API. Os testes usam `beforeEach`, funções de preenchimento e verificação, seletores por campos e botões e `within` para delimitar cada cartão. A sincronização usa respostas de rede e asserções, sem pausas de duração fixa.

Os contatos de teste usam nomes exclusivos e e-mails fictícios do domínio `example.com`. O cenário de inclusão remove o contato criado. O cenário de alteração restaura os dados demonstrativos no `afterEach`, inclusive quando uma asserção falha. O cenário de remoção exclui somente o contato que acabou de criar.

## Estrutura

```text
cypress/
  e2e/
    contatos.cy.js
cypress.config.js
package.json
package-lock.json
```

O projeto deve permanecer na branch `exercicio_cypress` do repositório do curso. A aplicação testada já está publicada; este repositório contém os testes, não uma cópia da agenda.
