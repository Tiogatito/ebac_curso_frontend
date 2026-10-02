# Casa Norte

Vitrine responsiva de objetos para casa, desenvolvida a partir do HTML de apoio do módulo. O navegador carrega o CSS compilado; os arquivos LESS ficam em `src/less`.

## Executar

Requer Node.js e npm.

```bash
npm ci
npm run build
```

Depois, abra `index.html` no navegador.

## Organização do LESS

- `main.less` reúne os módulos com `@import`.
- `_variables.less` centraliza variáveis e mapas de cores e larguras.
- `_mixins.less` contém regras reutilizáveis para largura, superfície e foco.
- Os demais arquivos dividem os estilos por área da página.
- `~"..."` preserva a expressão CSS `calc()` para que o navegador calcule a largura fluida do conteúdo.

O arquivo `styles.css` é gerado por `npm run build`.
