---
title: "Processus par étape"
weight: 1
description: "Extrait de code pour un processus par étape valide selon le W3C et les critères d'accessibilité numérique."
ico: "fas fa-stairs"
custom_css: "stepper"
tags: ["HTML", "CSS"]
---


## Visuel

{{< innerhtml >}}
<nav class="stepper" aria-label="Étapes de votre commande" class="stepper">
     <ol>
          <li><a href="..." title="1. Identification">Identification</a></li>
          <li aria-current="step"><span>Panier</span></li>
          <li><span>Livraison</span></li>
          <li><span>Paiement</span></li>
          <li><span>Fin</span></li>
     </ol>
</nav>


<nav aria-label="Étapes de la démarche" class="stepper">
     <ol>
          <li><span>Identification</span></li>
          <li aria-current="step"><span>Recherche</span></li>
          <li><span>Téléchargement</span></li>
     </ol>
</nav>
{{< /innerhtml >}}




## Extraits de code

### Code HTML

```html
<nav class="stepper" aria-label="Étapes de votre commande" class="stepper">
     <ol>
          <li><a href="..." title="1. Identification">Identification</a></li>
          <li aria-current="step"><span>Panier</span></li>
          <li><span>Livraison</span></li>
          <li><span>Paiement</span></li>
          <li><span>Fin</span></li>
     </ol>
</nav>


<nav aria-label="Étapes de la démarche" class="stepper">
     <ol>
          <li><span>Identification</span></li>
          <li aria-current="step"><span>Recherche</span></li>
          <li><span>Téléchargement</span></li>
     </ol>
</nav>
```



### Code CSS

```css
@charset "UTF-8";
:root {
    --stepper-font-size: 0.875rem;
    --stepper-font-weight: 700;
    --stepper-counter: step;
    --stepper-item-padding-y: 7px;
    --stepper-item-bg: #123;
    --stepper-item-active-bg: #456;
    --stepper-item-next-bg: #789;
    --stepper-item-arrow-shape: polygon(0% 0%, 1px 0%, calc(100% - 0.125rem) 50%, 1px 100%, 0% 100%);
    --stepper-link-line-height: 1.1428571429;
    --stepper-link-color: #fff;
    --stepper-link-active-color: #fff;
    --stepper-link-next-color: #000;
    --stepper-link-text-decoration: underline
}

*,
::after,
::before {
    box-sizing: border-box
}
nav {
    margin: 3em 0;
}
.stepper {
    --stepper-item-padding-x: 0;
    --stepper-item-margin-end: 0.125rem;
    --stepper-item-drop-shadow: none;
    --stepper-item-arrow-width: 0;
    --stepper-link-width: 1.25ch;
    --stepper-link-marker: counter(var(--stepper-counter)) " ";
}

@media (min-width:480px) {
    .stepper {
        --stepper-item-padding-x: 0;
        --stepper-item-margin-end: 0;
        --stepper-item-drop-shadow: drop-shadow(0.1875rem 0 0 #fff);
        --stepper-item-arrow-width: 0.8125rem
    }

    .stepper li[aria-current="step"] a {
        --stepper-link-marker: counter(var(--stepper-counter)) ". ";
        max-width: none
    }
}

@media (min-width:480px) and (max-width:1279.98px) {
    .stepper li[aria-current="step"] {
        flex: 4
    }
}

@media (min-width:1280px) {
    .stepper {
        --stepper-link-width: none;
        --stepper-link-marker: counter(var(--stepper-counter)) ". "
    }
}



.stepper ol {
    display: flex;
    padding: 0;
    margin: 0;
    overflow: hidden;
    font-size: var(--stepper-font-size);
    font-weight: var(--stepper-font-weight);
    text-align: center;
    list-style: none;
    counter-reset: var(--stepper-counter)
}

.stepper li {
    position: relative;
    display: flex;
    flex: 1;
    padding: var(--stepper-item-padding-y) var(--stepper-item-padding-x);
    counter-increment: var(--stepper-counter);
    background-color: var(--stepper-item-bg);
    filter: var(--stepper-item-drop-shadow)
}

.stepper li:not(:last-child) {
    margin-right: var(--stepper-item-margin-end)
}

.stepper li:not(:last-child)::after {
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(100% - 1px);
    z-index: -1;
    width: var(--stepper-item-arrow-width);
    -webkit-clip-path: var(--stepper-item-arrow-shape);
    clip-path: var(--stepper-item-arrow-shape);
    content: "";
    background-color: inherit
}

.stepper li[aria-current="step"] {
    background-color: var(--stepper-item-active-bg)
}

.stepper li[aria-current="step"]~li {
    background-color: var(--stepper-item-next-bg)
}

.stepper li+.stepper li {
    padding-left: var(--stepper-item-arrow-width)
}

.stepper a,
.stepper span {
    flex: 1 0 var(--stepper-link-width);
    max-width: var(--stepper-link-width);
    margin: auto;
    overflow: hidden;
    line-height: var(--stepper-link-line-height);
    color: var(--stepper-link-color);
    text-decoration: none;
    white-space: nowrap;
    outline-offset: 1.25rem
}

.stepper a::before,
.stepper span::before {
    content: var(--stepper-link-marker)
}

.stepper a:focus,
.stepper a:hover,
.stepper span:focus,
.stepper span:hover {
    color: var(--stepper-link-color)
}

.stepper a:hover {
    text-decoration: underline
}

.stepper a:focus {
    -webkit-text-decoration: var(--stepper-link-text-decoration);
    text-decoration: var(--stepper-link-text-decoration);
    outline-offset: 0.3125rem
}

.stepper li[aria-current="step"] a,
.stepper li[aria-current="step"] span {
    color: var(--stepper-link-active-color)
}

.stepper li[aria-current="step"]~li a,
.stepper li[aria-current="step"]~li span {
    color: var(--stepper-link-next-color)
}

.stepper li:first-child {
    z-index: 4
}

.stepper li:nth-child(2) {
    z-index: 3
}

.stepper li:nth-child(3) {
    z-index: 2
}

.stepper li:nth-child(4) {
    z-index: 1
}
```