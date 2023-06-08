---
title: "Police symbolique"
weight: 3
description: "Les polices symboliques sont parfois utilisées pour afficher une icône ; l'usage le plus connu étant le symbole de maison pour représenter la page d'accueil du site."
---



## Les polices d'icônes symboliques

Parmi les polices de cacractères symboliques, les plus connues sont :
- [Awesome](https://fontawesome.com/icons?d=gallery)
- [Bootstrap icons](https://icons.getbootstrap.com/)
- [Material Icons](https://fonts.google.com/icons?selected=Material+Icons)


## Implémentation HTML

Si l'icône n'apporte pas d'information, il sera masqué aux lecteurs d'écran via l'attribut aria `aria-hidden="true"`.
```html
<span class="fas fa-gift" aria-hidden="true"></span>
```

Si l'icône est porteur d'information, il sera quand même masqué aux lecteurs d'écran via l'attribut aria `aria-hidden="true"` et on rajoutera sa signification via un texte caché en CSS.

```html
<span class="fas fa-home" aria-hidden="true"></span>
<span class="sr-only">Accueil</span>
```

**Le code CSS ci-dessous pour masquer le texte mais le rendre interprétable par les synthétiseurs vocaux est le plus optimum quelque soit le logiciel de synthèse utilisé (Jaws, NVDA, Voice Over...).**

```css
/** sr-only : screen-reader only : seulement pour lecteur d'écran */
.sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
}

```
