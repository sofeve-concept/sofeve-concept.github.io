---
title: "Fil d'Ariane"
weight: 4
description: "Dans le monde du web, le fil d'Ariane désigne un système d'aide à la navigation qui décrit l'arborescence des menus parcourus."
---

## Qu'est-ce qu'un fil d'Ariane ?
Le terme "fil d'Ariane" provient du mythe de l'antiquité racontant comment Ariane tendit à son aimé Thésée un fil pour qu'il puisse retrouver son chemin après avoir pénétré le labyrinthe dans lequel était enfermé le Minautore.

Dans le monde du web, le fil d'Ariane désigne un système d'aide à la navigation qui décrit l'arborescence des menus parcourus pour afficher la page sur laquelle l'internaute se trouve.


## Règles d'implémentation d'un fil d'Ariane

- **Pas de fil d'Ariane sur la page d'accueil** ;
- Le fil d'Ariane doit toujours être situé au même endroit quelque soit la page affichée ;
- Le fil d'Ariane doit précéder le contenu de la page ;
- Le fil d'Ariane doit proposer des liens cliquables permettant de remonter dans l'arborescence du  site ;
- Idéalement, le dernier item du fil d'Ariane n'est pas cliquable et doit se différencier visuellement des autres items.


## Règles d'accessibilité du fil d'Ariane

- Le fil d'Ariane est implémenté à l'intérieur de l'élément HTML sémantique `nav` portant le `role="navigation"`  
On pourra rajouter un attribut `aria-label` pour préciser qu'il s'agit d'un fil d'ariane.
```html
<nav role="navigation" aria-label="Vous êtes ici">[…]</nav>
```

- Les différents items du fil d'Ariane seront proposés sous forme de liste ordonnée `ol` (puisque l'ordre des items a de l'importance). 
- La position courante (page sur laquelle l'internaute se trouve) sera identifée par l'attribut `aria-current="page"` ; sans lien posé sur l'item.

```html
<nav role="navigation" aria-label="Vous êtes ici">
  <ol>
      <li><a href="/">Accueil</a></li>
      <li><a href="/Blog/">Blog</a></li>
      <li aria-current="page">Fil d'Ariane</li>
   </ol>
</nav>
```

## Bouts de code

### Code HTML

```html
 <nav aria-label="Vous êtes ici" class="ariane">
    <ol>
        <li>
            <a href="">Accueil</a>
        </li>
        <li>
            <a href="">Chapitre</a>
        </li>
        <li>
            <a href="">Rubrique</a>
        </li>
        <li aria-current="page">
            Page en cours
        </li>
    </ol>
</nav>
```

### Code CSS

```css
@charset "UTF-8";

:root {
    --ariane-background-color: #f8f6f8;
    --ariane-border-color: #e6e6e6;
    --icon-size: 1rem;
    --link-color: #575757;
    --link-page-color: #333333;
}

*,
::after,
::before {
    box-sizing: border-box
}

.ariane {
    padding: 0.8em 1em;
    border: 1px solid var(--ariane-border-color);
    border-radius: 4px;
    background: var(--ariane-background-color);
}

.ariane ol {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    font-size: .95rem;
}

.ariane li {
    line-height: 1.75rem;
}

.ariane li:not(:first-child)::before {
    background-color: currentColor;
    content: "";
    display: inline-block;
    flex: 0 0 auto;
    height: var(--icon-size);
    margin-left: .25rem;
    margin-right: 0;
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEzLjE3MiAxMmwtNC45NS00Ljk1IDEuNDE0LTEuNDE0TDE2IDEybC02LjM2NCA2LjM2NC0xLjQxNC0xLjQxNCA0Ljk1LTQuOTV6Ii8+PC9zdmc+);
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEzLjE3MiAxMmwtNC45NS00Ljk1IDEuNDE0LTEuNDE0TDE2IDEybC02LjM2NCA2LjM2NC0xLjQxNC0xLjQxNCA0Ljk1LTQuOTV6Ii8+PC9zdmc+);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    vertical-align: calc(.325rem - var(--icon-size)*0.5);
    width: var(--icon-size);
}

.ariane a {
    text-decoration: none;
    color: var(--link-color);
}

.ariane a:hover,
.ariane a:focus {
    text-decoration: underline;
}

.ariane li[aria-current="page"] {
    color: var(--link-page-color);
    text-decoration: none;
    font-weight: bold;
}
```
