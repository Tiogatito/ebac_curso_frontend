# Meu GitHub — Ajax e exceções

Exercício do módulo 23 do curso de Engenharia Front-End. Adaptação do `index.html` e do `main.css` fornecidos no material de apoio, mantendo a estrutura e o visual do perfil.

## Executar

Abra `index.html` em um navegador moderno com acesso à internet. Para servir a página localmente, execute na pasta do projeto:

```sh
python3 -m http.server 4175
```

Acesse `http://localhost:4175`.

## Requisitos implementados

- Requisição Ajax assíncrona com `fetch`, método `GET` e resposta JSON.
- Foto, nome, usuário, repositórios públicos, seguidores, seguindo e link preenchidos pela API pública do GitHub.
- `try`, `catch`, `throw` e `finally` para tratar falhas de rede, respostas HTTP sem sucesso e dados inválidos.
- Estado de carregamento, mensagens de erro, limite de espera de 15 segundos e nova tentativa sem recarregar a página.
- Branch de entrega: `exercicio_ajax`.

O perfil consultado é `Tiogatito`. Para usar outra conta, altere `GITHUB_USERNAME` em `main.js`. Não há dependências de instalação, chaves de API ou dados de perfil fixos no HTML. A API pública pode limitar consultas, situação tratada na interface.

## Arquivos

- `index.html`: estrutura original adaptada para receber os dados.
- `main.css`: estilos fornecidos, com ajustes para telas pequenas e estados da consulta.
- `main.js`: consulta, validação e preenchimento do perfil.
- `avatar-placeholder.svg`: imagem local para carregamento ou falha da foto.

Documentação: [GitHub REST API](https://docs.github.com/en/rest/users/users#get-a-user) e [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
