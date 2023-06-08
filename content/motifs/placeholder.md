---
title: "Placeholder"
description: "Extrait de code pour une étiquette de champ conforme aux critères d'accessibilité numérique."
ico: "fas fa-strikethrough"
custom_css: "placeholder"
custom_js: "placeholder"
tags: ["HTML", "CSS", "JS"]
---

## Visuel

{{< innerhtml >}}

<form id="motif-placeholder">
    <div class="field">
        <input type="text" id="prenom" name="prenomTextField">
        <label for="prenom">Prénom</label>
    </div>
    <div class="field">
        <input type="text" id="nom" name="nomTextField">
        <label for="nom">Nom</label>
    </div>
    <div class="field">
        <input type="text" id="email" name="emailTextField">
        <label for="email">Adresse mail</label>
    </div>
    <button>Envoyer</button>
</form>
{{< /innerhtml >}}



## Extraits de code

### Code HTML

```html
 <form id="motif-placeholder">
    <div class="field">
        <input type="text" id="prenom" name="prenomTextField">
        <label for="prenom">Prénom</label>
    </div>
    <div class="field">
        <input type="text" id="nom" name="nomTextField">
        <label for="nom">Nom</label>
    </div>
    <div class="field">
        <input type="text" id="email" name="emailTextField">
        <label for="email">Adresse mail</label>
    </div>
    <button>Envoyer</button>
</form>

```


### Code CSS

Pour adapter la couleur de la barre de navigation et des liens, modifier les codes couleurs dans la déclaration `:root`.

```css
:root {
    --COULEUR-1: #a2aabd;
    --COULEUR-2: #b5bdce;
    --COULEUR-3: #333;
    --COULEUR-4: #027dc7;
    --COULEUR-5: #FFF;
  }
  #motif-placeholder {
    width: 450px;
    border: 1px dotted var(--COULEUR-1);
    padding: 3em;
  }
  #motif-placeholder .field {
    margin-bottom: 1.75em;
    position: relative;
  }

  #motif-placeholder label {
    color: var(--COULEUR-1);
    font-size: 1.75em;
    font-weight: 500;
    left: .5em;
    position: absolute;
    top: .25em;
    transition: all 0.1s linear;
  }

  #motif-placeholder input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--COULEUR-2);
    color: var(--COULEUR-3);
    font-size: 1.5em;
    padding: .75em .5em .5em;
    width: 100%;
  }

  #motif-placeholder input:focus {
    border-color: var(--COULEUR-4);
    outline: 0;
  }

  #motif-placeholder input:focus+label,
  #motif-placeholder input+label.show {
    border-radius: 4px;
    color: var(--COULEUR-4);
    font-size: 1em;
    left: .5em;
    padding: 0 .15em;
    text-transform: uppercase;
    top: -1em;
  }
  #motif-placeholder button {
    background: var(--COULEUR-4);
    border: none;
    border-radius: 5px;
    color: var(--COULEUR-5) ;
    font-size: 1.5em;
    padding: .75em;
    text-transform: uppercase;
    width: 100%;
  }
```


### Code javascript

```javascript
document.getElementById('motif-placeholder').addEventListener("change", myPlaceholder);
function myPlaceholder() {
  var LesLabels = document.querySelectorAll('#motif-placeholder label');
  var LesInputs = document.querySelectorAll('#motif-placeholder input');
  for (i = 0; i < LesInputs.length; i++) {
    if (LesInputs[i].value !="") {
      LesLabels[i].classList.add("show");
    } else {
      LesLabels[i].classList.remove("show");
    }   
  }
}

```