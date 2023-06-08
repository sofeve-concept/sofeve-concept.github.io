---
title: "Lien d'accès rapide"
weight: 2
description: "Le lien d'accès rapide est un lien d'accès rapide qui permet d’accéder directement à la zone de contenu principal de la page afin d'optimiser la navigation au clavier."
---


## Qu'est-ce qu'un lien d'accès rapide ?

Un lien d'accès rapide (ou lien de raccourci, lien d'évitement) est un lien qui permet d'accéder directement à une partie du document ; l'objectif est de permettre aux utilisateurs naviguant au clavier (dont notamment les utilisateurs de logiciel de synthèse vocale) d’accéder plus rapidement à des zones précises de la page sans dérouler la lecture des items précédents. 

Il existe 3 sortes de liens d'accès rapide : 
- Le lien dit " d'évitement " : présenté en haut de page, ce doit être le premier lien accessible au clavier. Ce lien peut être masqué par défaut et apparaitre lorsqu'il reçoit le focus (navigation clavier) ; 
- le lien d'accès rapide placé dans le corps du document. Il sera placé avant la zone de la page qu'il propose d'éviter. La plupart du temps, ce lien se pose avec un intitulé du type " Passer la section ", " Passer la partie xxx " ; 
- le lien de navigation interne à la page, typiquement un lien de table des matières ou un lien de retour en haut de page.

### Règles d’implémentation d’un lien d'accès rapide

Un lien d'accès rapide se pose toujours vers une ancre nommée dans le document.
` <a class="acces-rapide" href="#top">Haut de page</a> `


## Implémentation d'un lien d'accès rapide masqué par défaut

Communément appelé " lien d'évitement ", ce lien est invisible par défaut sur la page et n'apparaît qu'à la prise de focus pour une navigation au clavier.

### Code HTML partiel

```html
<body>
    <a class="evitement" href="#contenu">Aller au contenu</a> 
    <header role="banner">
...
```

### Code CSS du lien d'accès rapide

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