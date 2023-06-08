---
title: "Lien d'évitement"
description: "Extrait de code pour un lien d'évitement valide selon le W3C et les critères d'accessibilité numérique."
ico: "fas fa-level-down-alt"
custom_css: "skip-link"
tags: ["HTML", "CSS"]
---

{{< innerhtml >}}
<p>Le lien d'évitement ("<span lang="en">skip link</span>", en anglais), est invisible par défaut sur la page et n'apparaît qu'à la prise de focus pour une navigation au clavier.</p>
{{< /innerhtml >}}


## Visuel

Pour tester le lien d'évitement, placez-vous en haut de cette page et naviguer au clavier (touche " tab " pour se déplacer, touche " entrée " pour " cliquer " sur le lien).


## Extraits de code

### Code HTML


```html
<body>
    <a class="evitement" href="#contenu">Aller au contenu</a> 
    <header role="banner">
...
```

### Code CSS
Il existe plusieurs façons de rendre son lien invisible ; en voici une :

```css
a.evitement {
   display: inline-block;
   color: #555;
   background: #fff;
   padding: .5em;
   position: absolute;
   left: -99999rem;
   z-index: 100;
}
a.evitement:focus {
   left: 0;
}
```