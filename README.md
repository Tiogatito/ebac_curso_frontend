# Galeria Lume

Uma galeria editorial de fotografia construída com HTML, Sass e JavaScript. O Gulp automatiza a compilação dos estilos e a otimização das imagens e dos scripts.

## Requisitos

- Node.js 20.19 ou superior
- npm

## Como executar

```bash
npm install
npm run build
```

Depois da compilação, abra `index.html` por um servidor local. Por exemplo, no VS Code, use a extensão Live Server.

## Tarefas do Gulp

```bash
npm run styles   # compila src/scss/main.scss em dist/css/main.css
npm run images   # otimiza src/images em dist/images
npm run scripts  # minifica os arquivos de src/js em dist/js
npm run watch    # recompila os arquivos alterados
npm run clean    # remove os arquivos gerados em dist
npm run build    # limpa e executa estilos, imagens e scripts
```

O código-fonte permanece em `src/`. Os arquivos otimizados em `dist/` acompanham o projeto e podem ser recriados a qualquer momento com `npm run build`.
