---
title: "À propos de la navigation"
weight: 1
description: "Informations générales à savoir sur les systèmes de navigation"
---

## Ce qu'il faut retenir

Pour un site qui comporte plus de 5 pages différentes, il faut veiller à prévoir au moins 2 systèmes de navigation parmi :
- Un menu de navigation et un plan du site
- Un menu de navigation et un moteur de recherche

L'apparence et le positionnement du menu principal doit être cohérent sur toutes les pages du site (placé au même endroit, visuel identique).

## Ordre de tabulation

Naviguez dans la page au clavier et assurez-vous que :

- L'ordre de tabulation est cohérent ;
- la page ne comporte pas de piège au clavier (vérifiez les composants d'interface riche tels que les fenêtres modales) ;
- le focus est bien visible ;
- les raccourcis clavier n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont contrôlables par l’utilisateur.

## Différencier visuellement la position courante

Dans un menu de navigation principale ou secondaire, il faut veiller à indiquer la position courante pas uniquement par la couleur mais aussi par une autre mise en forme telle que : une mise en gras, une taille de police différente des items non actifs, de l'italique...


## Sémantique HTML

### Dans quel cas utiliser l'élément html `nav` ?

Les menus de navigation seront implémentés avec l'élément html `nav` auquel on pourra rajouter l'attribut aria `role` : `<nav role="navigation">...</nav>`.  
À cette balise on posera aussi un attribut `aria-label` pour préciser de quel type de navigation il s'agit. Exemple : 
- `<nav role="navigation" aria-label="Navigation principale">...</nav>`, pour le menu de navigation principal du site ; 
- `<nav role="navigation" aria-label="Navigation secondaire">...</nav>`, pour un menu de navigation secondaire ou contaxtuel ; 
- `<nav role="navigation" aria-label="Vous êtes ici : ">...</nav>`, pour un fil d'ariane ; 
- `<nav role="navigation" aria-label="Étapes de la démarche">...</nav>`, pour un processus par étapes.

### Dans quel cas ne pas utiliser l'élément html `nav` ?

Tous les groupes de liens d'une page n'ont pas besoin d'être dans un élément de navigation — l'élément est principalement destiné aux sections constituées de blocs de navigation majeurs. En particulier, il est courant que les pieds de page contiennent une courte liste de liens vers diverses pages d'un site, telles que les conditions d'utilisation, la page d'accueil et une page de copyright. L'élément de pied de page suffit à lui seul dans de tels cas ; bien qu'un élément de navigation puisse être utilisé dans de tels cas, il est généralement inutile.

L'élément `nav`ne sera donc pas utilisé : 
- Pour présenter les liens inscrits dans la zone de pied de page `footer`
- Pour présenter une collection de liens pointant vers d'autres sites.