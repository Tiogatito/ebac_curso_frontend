const api = 'https://api-ebac.vercel.app/api/contatos';
const campos = {
  nome: 'input[placeholder="Nome"]',
  email: 'input[placeholder="E-mail"]',
  telefone: 'input[placeholder="Telefone"]',
};

function preencher(contato) {
  cy.get(campos.nome).clear().type(contato.name);
  cy.get(campos.email).clear().type(contato.email);
  cy.get(campos.telefone).clear().type(contato.phone.toString());
}

function cartao(nome) {
  return cy.contains('.contato', nome);
}

function conferirContato(contato) {
  cartao(contato.name).should('be.visible').within(() => {
    cy.contains('li', contato.name).should('be.visible');
    cy.contains('li', contato.email).should('be.visible');
    cy.contains('li', contato.phone.toString()).should('be.visible');
  });
}

function conferirFormularioVazio() {
  Object.values(campos).forEach(seletor => cy.get(seletor).should('have.value', ''));
}

function corpo(requisicao) {
  return typeof requisicao.body === 'string' ? JSON.parse(requisicao.body) : requisicao.body;
}

describe('Agenda de contatos — inclusão, alteração e remoção', () => {
  let quantidadeInicial;
  let contatoInicial;
  let restaurar;
  let contato;

  beforeEach(() => {
    restaurar = null;
    const identificador = `${Date.now()}${Cypress._.random(1000, 9999)}`;
    contato = {
      name: `Contato Exemplo ${identificador}`,
      email: `contato.${identificador}@example.com`,
      phone: '11987654321',
    };
    cy.intercept('GET', api).as('listar');
    cy.intercept('POST', api).as('incluir');
    cy.intercept('PUT', api).as('alterar');
    cy.intercept('DELETE', api).as('remover');
    cy.visit('/');
    cy.wait('@listar').then(({ response }) => {
      expect(response.statusCode).to.equal(200);
      quantidadeInicial = response.body.data.length;
      contatoInicial = { ...response.body.data[0] };
      cy.get('.contato').should('have.length', quantidadeInicial);
      cy.get('h2').should('contain.text', `${quantidadeInicial} contatos na agenda`);
    });
  });

  afterEach(() => {
    // Restaura os dados demonstrativos alterados, inclusive se uma asserção falhar.
    if (restaurar) {
      cy.request({ method: 'PUT', url: api, body: JSON.stringify({ contato: restaurar }) })
        .its('status').should('eq', 200);
    }
  });

  it('inclui um contato e exibe nome, e-mail e telefone', () => {
    preencher(contato);
    cy.contains('button', /^Adicionar$/i).click();
    cy.wait('@incluir').then(({ request, response }) => {
      expect(response.statusCode).to.equal(200);
      expect(corpo(request).contato).to.deep.equal(contato);
      cy.get('.contato').should('have.length', quantidadeInicial + 1);
      cy.get('h2').should('contain.text', `${quantidadeInicial + 1} contatos na agenda`);
    });
    conferirContato(contato);
    conferirFormularioVazio();
    cartao(contato.name).contains('button', /^Deletar$/i).click();
    cy.wait('@remover').its('response.statusCode').should('eq', 200);
    cy.contains('.contato', contato.name).should('not.exist');
  });

  it('altera os três dados de um contato e preserva a quantidade', () => {
    cy.then(() => {
      restaurar = { ...contatoInicial };
      cartao(restaurar.name).contains('button', /^Editar$/i).click();
      cy.get(campos.nome).should('have.value', restaurar.name);
      cy.get(campos.email).should('have.value', restaurar.email);
      cy.get(campos.telefone).should('have.value', restaurar.phone.toString());
      preencher(contato);
      cy.contains('button', /^Salvar$/i).click();
      cy.wait('@alterar').then(({ request, response: alteracao }) => {
        expect(alteracao.statusCode).to.equal(200);
        expect(corpo(request).contato).to.deep.equal({ ...contato, id: restaurar.id });
      });
      conferirContato(contato);
      cy.contains('.contato', restaurar.name).should('not.exist');
      cy.get('.contato').should('have.length', quantidadeInicial);
      conferirFormularioVazio();
      cy.contains('button', /^Adicionar$/i).should('be.visible');
    });
  });

  it('remove somente o contato criado para o cenário e atualiza o contador', () => {
    preencher(contato);
    cy.contains('button', /^Adicionar$/i).click();
    cy.wait('@incluir').then(({ response }) => {
      const criado = response.body.data.find(item => item.email === contato.email);
      expect(criado, 'contato retornado pela API').to.exist;
      conferirContato(contato);
      cy.get('.contato').should('have.length', quantidadeInicial + 1);
      cartao(contato.name).contains('button', /^Deletar$/i).click();
      cy.wait('@remover').then(({ request, response: remocao }) => {
        expect(remocao.statusCode).to.equal(200);
        expect(corpo(request).id).to.equal(criado.id);
      });
      cy.contains('.contato', contato.name).should('not.exist');
      cy.get('.contato').should('have.length', quantidadeInicial);
      cy.get('h2').should('contain.text', `${quantidadeInicial} contatos na agenda`);
    });
  });
});
