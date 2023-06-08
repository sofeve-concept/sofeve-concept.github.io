---
title: "Infobulle"
description: "Extrait de code pour simuler une infobulle accessible en utilisant l'attribut aria-label. Vous aurez besoin uniquement de style css."
ico: "far fa-message"
custom_css: "infobulle"
tags: ["HTML", "CSS"]
---


{{< innerhtml >}}
<p>Les infobulles (<span lang="en">tooltip</span> en anglais) ne sont pas accessibles au clavier. Nous allons donc recourir au CSS et à l'attribut <code>aria-label</code> pour les simuler.</p>

{{< /innerhtml >}}


## Visuel

{{< innerhtml >}}
<p>Un exemble de texte avec une <abbr class="infobulle" aria-label="abbréviation">ABBR</abbr>.</p>

<p><a class="infobulle" href="#" aria-label="Contenu de l'infobulle accessible avec ARIA.">Lien avec une infobulle accessible</a>.</p>

<button class="infobulle" href="#" aria-label="Contenu de l'infobulle accessible avec ARIA.">Lien avec une infobulle accessible</button>
{{< /innerhtml >}}




## Extraits de code

### Code HTML

```html
<p>Un exemble de texte avec une <abbr aria-label="abbréviation">ABBR</abbr></p>

<p><a class="infobulle" href="#" aria-label="Contenu de l'infobulle accessible avec ARIA.">Lien avec une infobulle accessible</a>.</p>

<button class="infobulle" href="#" aria-label="Contenu de l'infobulle accessible avec ARIA.">Lien avec une infobulle accessible</button>
```



### Code CSS

```css
:root {
     --BACKGROUND-color: #f1b084;
     --TEXT-color: #000;
     --BORDER-color: #666666;
}
.infobulle {
     position: relative;
}
/** Vous pouvez positionner l'infobulle comme bon vous semble en modifiant les valeurs de top et left. */
a[aria-label].infobulle:focus:after,
a[aria-label].infobulle:hover:after,
p[aria-label].infobulle:focus:after,
p[aria-label].infobulle:hover:after,
button[aria-label].infobulle:focus:after,
button[aria-label].infobulle:hover:after,
abbr[aria-label].infobulle:focus:after,
abbr[aria-label].infobulle:hover:after {
     position: absolute;
     z-index: 5;
     top: -3em;
     left: 0;
     display: block;
     min-width: 10em;
     font-size: 1em;
     font-weight: normal;
     text-align:left;
     white-space: nowrap;
     border-radius: 0.2em;
     padding: 0.5em 0.7em;
     content: attr(aria-label);
     background-color: var(--BACKGROUND-color);
     color: var(--TEXT-color);
     border: 1px solid var(--BORDER-color);
}

```


