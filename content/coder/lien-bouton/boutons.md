---
title: "Les boutons"
weight: 2
description: "Les boutons permettent de déclencher des actions : envoyer des informations via un formulaire, déployer/replier un menu déroulant, ouvrir ou fermer une fenêtre modale, afficher l’élément suivant ou précédent dans un carrousel..."
---


## Règles d'implémentation d'un bouton

Les boutons déclenchent des actions. Ils sont implémentés avec les balises `<input type="...">` et `<button>... </button>` 


### Ce qu'il faut retenir
Les boutons sont utilisés pour : 
- soumettre des informations via un formulaire,
- afficher l’élément suivant ou précédent dans un carrousel,
- ouvrir / fermer une fenêtre modale,
- faire apparaître/disparaître du texte (sous-menu, accordéon...).



## Règles d'accessibilité d'un lien

### Libellé explicite

Comme pour les liens, on veillera à poser un intitulé explicite pour chaque bouton. Ainsi, dans les formulaires notamment, on évitera les intitulés du type "OK", "Confirmer", "Valider" et on proposera plutôt des libellés comme "Confirmer l'inscription", "Rechercher dans le calendrier"...


### Libellé non explicite

Dans le cas, où il n'est pas possible de rendre le libellé explicite, on aura recourt à l'attribut `aria-label`.  

**Exemple d'implémentation de l'attribut `aria-label`** 

```html
<input type="submit" value="Rechercher" aria-label="Rechercher dans le tableau" />
```

**Exemple avec une icône qui fait office de bouton "Rechercher"** 

![Icone loupe pour remplacer le bouton de recherche](/images/exemple-recherche-loupe.png)

```html
<button>
<span class="fas fa-search" aria-hidden="true"></span>
<span class="sr-only">Rechercher</span>
</button>
```

_L'icône obtenue avec la police d'icône Awesome (fas fa-search) est caché aux lecteurs d'écran via l'attribut aria-hidden="true" ; le texte  est visuellement caché et lu par les lecteurs d'écran grâce à la classe de style `sr-only` (screen reader only)_

```css
.sr-only{
position:absolute;
top:-10000px;
}
```