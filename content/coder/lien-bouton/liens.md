---
title: "Les liens"
weight: 1
description: "Les liens sont des éléments qui permettent d'atteindre un endroit précis à l'intérieur d'une même page, de passer d'une page à une autre à l'intérieur d'un site ou de pointer vers un autre site. Ils sont aussi utilisés pour télécharger un fichier."
---


## Règles d'implémentation d'un lien
Les liens permettent de naviguer dans une page ou entre pages web.  
Un lien s'implémente avec l'élément HTML `a` ("a" pour "ancre") et est composé : 
- d'un intitulé de lien (du texte ou une image) placé entre les balises `a` : `<a...>Intitulé du lien</a>`
- d'attributs, placés dans la balise `a`
    - `href` qui permet d'indiquer l'adresse du lien ;
    - `title` ; cet attribut est facultatif et permet de donner du sens au lien si son intitulé n'est pas explicite ;
    - `target` ; cet attribut est facultatif et permet de définir la cible du lien (notamment lorqu'on veut ouvrir un lien dans une nouvelle fenêtre).

### Ce qu'il faut retenir
les liens sont utilisés pour : 
- pointer vers une autre page ;
- afficher la page suivante ou précédente dans un système de pagination ;
- pointer vers une zone précise de la page courante ;
- envoyer un mail ;
- télécharger un fichier.

**_Un lien sur lequel le programmeur souhaite poser un événement jasvascript (`onClick`, par exemple) n'est pas un lien mais un bouton._**



## Règles d'accessibilité d'un lien

Pour l'accessibilité, on veillera à faire la différence entre un lien explicite et un lien non explicite.

### Lien explicite
Un lien explicite est un lien dont l'intitulé, dans le contecte où il se trouve, a du sens en soi.

#### Lien texte explicite
 Lorsque l'intitulé du lien suffit à en compredre le sens, le lien sera implémenté de la manière suivante (sans attribut `title`) : 
- `<a href="motifs.html">Motifs de conception</a>`
- `<a href="mailto:monadresse@domaine.fr">monadresse@domaine.fr</a>`


#### Lien de téléchargement
Dans le cas d'un lien proposant le téléchargement du fichier, une bonne pratique d'accessibilité consiste à préciser le format et le poids du fichier.
`<a href="fichier.pdf">Télécharger la notice (PDF - 102Ko)</a>`


### Lien non explicite

Un lien non explicite est un lien qui, 
- sorti de son contexte, n'a pas de sens en soi ; 
- est posé uniquement sur une image ;
- ouvre par défaut dans une nouvelle fenêtre.

Dans certains cas, on pourra recourir à l'attribut `title` pour le rendre explicite. Un autre technique consiste à utiliser l'attribut `aria-label`.  
**Attention** On utilisera soit l'attribut `title`, soit l'attribut `aria-label` mais pas les deux ensembles !

#### Lien texte non explicite.  
Lorsque le libellé du lien n'est pas suffisemment explicite, on rajoutera l'attribut `title`. Attention ! Cet attribut title doit reprendre impérativement au début l'intitulé du lien.
`<a href="navigation.html" title="Lire la suite sur le système de navigation">Lire la suite</a>`


#### Lien posé sur une image
Lorsque le lien est posé sur une image, on ne renseignera pas l'attribut `title` du lien et mais on renseignera l'attribut `alt` de l'image.

```html
<a href="index.html">
<img src="imges/logo.png" alt="Mon Site Web - Accueil du site">
</a>
```
Autre exemple : 
```html
<a href="archive/page-1.html"><img src="fleche-gauche.png" alt="Page précédente"></a>
<a href="archive/page-3.html"><img src="flèche-droite.png" alt="Page suivante"></a>
```

### Lien composite
On parle de lien composite lorsque le lien porte sur plusieurs éléments HTML en même temps. On veillera à faire porter le lien sur l'ensemble des éléments et non pas à dupliquer le lien sur chacun des éléments.

#### Lien texte et image de décoration
Si l'intitulé du lien est suffisamment explicite, il n'y aura pas besoin de rajouter l'attribut `title` ni de renseigner l'attribut `alt`de l'image.  

**Exemple de code HTML pour un rendu visuel de ce type :** ![exemple de lien compositive vers l'accueil](/images/bouton-composite-1.png)

```html
<a href="#" class="bouton-accueil">
<img src="img/home.png" alt="" />
Accueil
</a>
```



**Exemple de code HTML pour un rendu visuel de ce type :**   ![exemple de lien compositive vers l'accueil](/images/bouton-composite-2.png)

Dans cet exemple, l'image est insérée via CSS et le texte est caché via CSS ; il n'y a pas besoin de rajouter l'attribut `title`.  
Si on teste ce code HTML en désactivant les CSS, on aura une implémentation conforme puisque l'image, certes, disparaîtra mais le texte, lui, apparaîtra.

```html
<a href="#" class="btn home">
<span class="sr-only">Accueil</span>
</a>
```

```css
.sr-only{
position:absolute;
top:-10000px;
}

.home:before{
content:"";
display:inline-block;
background:url("../images/home.png") no-repeat center;
height:20px;
width:30px;
}
```