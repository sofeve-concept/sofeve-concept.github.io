---
title: "Étiquette de champ"
draft: false
weight: 2
description: "Les étiquettes doivent décrire le rôle de chaque champ du formulaire et être correctement associées à leur champ."
---




{{% notice remarque %}}
Pour présenter l'étiquette de champ, les exemples de cette page associent l'étiquette à un champ de type `input`. Toutefois, ce qui est dit dans cette rubrique reste valable quelque soit l'élément HTML de champ utilisé. 
{{% /notice %}}

## Implémentation HTML

L'étiquette de champ sera implémentée avec les balises `<label>...</label>`.  
L'attribut `for` sera utilisé pour l'associer à l'`ìd` du champ auquel elle fait référence.

Une façon simple de s'assurer que l'étiquette est bien reliée à son champ consiste à cliquer sur l'étiquette. Si l'étiquette est bien associée alors le curseur se placera dans le champ lié (ou s'il s'agit de case à cocher, la case sera cochée/décochée ; s'il s'agit d'un bouton radio, le bouton sera coché/décoché).

 ```html
<label for="nom">Nom</label>
<input type="text" name="nom" id="nom">
```

**Autre implémentation possible**  
Dans cet exemple, le `input`est inclus entre les balises `label`.

 ```html
<label for="nom">Nom
<input type="text" name="nom" id="nom">
</label>
```


**Visuel**  
_Cliquez sur l'étiquette "Nom" et vérifiez que le curseur se place bien dans la zone de texte._

{{< innerhtml >}}
<label for="nom">Nom</label>
<input type="text" name="nom" id="nom">
{{< /innerhtml >}}



## Étiquette invisible

Un champs sans étiquette visible doit rester exceptionnel. On réservera ce cas à des champs dont la fonction est suffisamment claire et compréhensible sans étiquette ; comme, par exemple, un champ de recherche identifié par une icône loupe.

### Code HTML et CSS

**HTML**

 ```html
    <label for="search" class="sr-only">Rechercher sur le site</label>
    <input type="search" name="search" id="search">
    <button type="submit">Rechercher</button>
```
**CSS**

_Le code CSS ci-dessous pour masquer le texte mais le rendre interprétable par les synthétiseurs vocaux est le plus optimum quelque soit le logiciel de synthèse utilisé (Jaws, NVDA, Voice Over...)._

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

**Visuel**

{{< innerhtml >}}
    <label for="search" class="sr-only">Rechercher sur le site</label>
    <input type="search" name="search" id="search">
    <button type="submit">Rechercher</button>
{{< /innerhtml >}}


## Étiquette et placeholder

{{% notice attention %}}
L'attribut `placeholder` qui permet de renseigner un texte indicatif par défaut dans un champ de formulaire ne peut en aucun cas remplacer l'élément `label`.  
En effet, l'attribut `placeholder` disparaît dès que l'utilisateur active le champ de formulaire ou commence à écrire dedans.
{{% /notice %}}


Si vous voulez utiliser un attribut `placeholder` à la place du `label`, il faudra recourir à du javascript et à du CSS pour donner à votre `label` un visuel identique au `placeholder`. Voir le [motif de conception Placeholder](/motifs/placeholder/).

Le cas le plus courant d'une étiquette masquée est celui du formulaire de recherche dans un site. Le cas d'usage le présente avec une icône en forme de loupe.

**Code HTML**

 ```html
    <label for="search" class="sr-only">Rechercher sur le site</label>
    <input type="search" name="search" id="search" placeholder="Rechercher dans le site...">
    <button type="submit">Rechercher</button>
```


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

