# Boas práticas de CSS

Exercício do módulo 19: aplicação da metodologia BEM ao HTML e ao CSS fornecidos no material de apoio.

## Visualizar

Abra `index.html` no navegador. O projeto utiliza HTML e CSS puro e não precisa de instalação ou compilação.

## Classes BEM

| Classe | Papel |
| --- | --- |
| `produtos` | Bloco que organiza a lista de produtos |
| `produto` | Bloco independente de cada produto |
| `produto__imagem` | Elemento de imagem do produto |
| `produto__nome` | Elemento de nome do produto |
| `produto__descricao` | Elemento de descrição do produto |
| `produto--em-destaque` | Modificador aplicado junto ao bloco `produto` |

As propriedades CSS do material de apoio foram preservadas, incluindo a grade de três colunas, a tipografia, as margens e o destaque amarelo do segundo produto. Os seletores e as classes HTML foram atualizados em conjunto.

O endereço de imagem do material original não carregou durante a conferência. `assets/images/produto.svg` fornece o marcador de 100 × 100 localmente, com texto alternativo no HTML.

A entrega está na branch `boas_praticas_css`.
