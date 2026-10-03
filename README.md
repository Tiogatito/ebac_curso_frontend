# Casa Norte

Vitrine responsiva de objetos para casa, desenvolvida a partir do HTML de apoio do módulo. Os estilos ficam em LESS, organizados por seção, e são compilados pelo Grunt. O JavaScript da página também é minificado pelo Grunt.

## Executar

Requer Node.js e npm.

```bash
npm ci
npm run build
```

Depois, abra `index.html` no navegador. O build atualiza `styles.css` e gera `dist/js/main.min.js`.

## Tarefas do Grunt

- `npm run styles` compila `src/less/main.less` em `styles.css`.
- `npm run scripts` minifica `src/js/main.js` em `dist/js/main.min.js`.
- `npm run build` executa as duas tarefas.

O script da página mantém apenas um painel de detalhes de produto aberto por vez. A configuração das tarefas está em `Gruntfile.js`.

## Organização do LESS

- `main.less` reúne os módulos com `@import`.
- `_variables.less` centraliza variáveis e mapas de cores e larguras.
- `_mixins.less` contém regras reutilizáveis para largura, superfície e foco.
- Os demais arquivos dividem os estilos por área da página.
- `~"..."` preserva a expressão CSS `calc()` para que o navegador calcule a largura fluida do conteúdo.
