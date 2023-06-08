---
title: "Bordure de texte"
weight: 1
description: "Extrait de code pour un créer une bordure de texte afin de le rendre lisible sur un fond de couleurs variées."
ico: "far fa-square"
custom_css: "bordure"
tags: ["HTML", "CSS"]
---

Cette technique de bordure de texte en css permet de rendre le contraste entre le texte et l'image conforme aux critères d'accessibilité.

## Visuel

{{< innerhtml >}}
<div class="bg-image">
     <p class="text-border">Texte avec une bordure pour pouvoir être lu avec une image de fond.</p>
</div> 
{{< /innerhtml >}}




## Extraits de code

### Code HTML

```html
<div class="bg-image">
     <p class="text-border">Texte avec une bordure pour pouvoir être lu avec une image de fond.</p>
</div> 
```



### Code CSS

```css
.bg-image {
    max-width: 32.5rem;
    min-height: 20.5rem;
    padding: 2rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #C9C8C6;
    /** choisir l'image de fond */
    background-image: url('/images/cherry-blossom.jpg');
  }
  
  .text-border {
    margin-top: 5rem;
    color: #FFFFFF;
    font-family: Arial, sans-serif;
    font-size: 3em;
    font-weight: bold;
    /**
     * Default border around text with text-shadow
     * Source: https://openclassrooms.com/forum/sujet/contour-police-de-caractere-css#message-91713580
    */
    text-shadow: 2px 0 0 #000000,
                 0 2px 0 #000000,
                 0 -2px 0 #000000,
                 -2px 0 0 #000000,
                 2px 2px 0 #000000,
                 2px -2px 0 #000000,
                 -2px 2px 0 #000000,
                 -2px -2px 0 #000000;
    text-align: center;
  }
  
  /**
   * If -webkit-text-stroke property is supported, use it and remove text-shadow
   * Support: https://caniuse.com/#search=-webkit-text-stroke
  */
  @supports (-webkit-text-stroke: 2px red) {
    .text-border {
      text-shadow: none;
      -webkit-text-stroke: 2px #000000;
    }
  }
  

```