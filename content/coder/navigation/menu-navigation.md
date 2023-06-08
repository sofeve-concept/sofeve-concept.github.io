---
title: "Menu de navigation"
weight: 3
description: "Un menu de navigation regroupe un ensemble de liens permettant d'afficher les différentes pages du site web ou d'atteindre un endroit spécifique de la page affichée. Il traduit l'arborescence du site web."
---

## Qu'est-ce qu'un menu de navigation ?

Un menu de navigation regroupe un ensemble de liens permettant d'afficher les différentes pages du site web ou d'atteindre un endroit spécifique de la page affichée. Il traduit l'arborescence du site web.  

On veillera a bien faite la distinction entre "un menu de navigation" qui regroupe les **liens internes** au site et une "collection de liens" qui regroupe des liens pointant vers des sites autres que le sien.  

Enfin, on parlera de menu _hamburger_ pour désigner un bouton représenté par trois lignes horizontales parallèles (☰), représentant de manière imagée un steack entre deux tranches de pain, qui révèlera au clic le menu de navigation complet. Le menu _hamburger_ est notamment utilisé pour des sites devant s'afficher sur de petites résolutions, type résolutions de smartphones ou tablettes.


## Règles d'implémentation d'un menu de navigation

- Il sera toujours placé au même endroit dans les pages du site.
- Le menu de navigation sert à identifier : 
     - le menu principal (menu permettant de se déplacer de rubrique en rubrique) ; 
     - le menu secondaire (menu permettatn de se déplacer de sous-rubriques en sous-rubriques au sein d'une même grande rubrique) ; 
     - le fil d'Ariane ;
     - La pagination lors de l'affichage d'un résultat de recherche, d'un tableau ou d'une succession de pages relatives au même thème.


**&Agrave; ne pas faire**
- Le menu de navigation ne sert pas à  présenter une liste de liens pointant vers des sites externes.
- Le menu de ne navigation ne sera pas utilisé dans les pieds de page identifés par l'élément HTML sémantique `<footer role="contentinfo">`.


## Règles d'accessibilité du menu de navigation

### &Eacute;lément sémantique `<nav>`
- Un menu de navigation est balisé avec l'élément HTML sémantique `nav` et le role aria `navigation` : `<nav role="navigation">...</nav>`.
- On pourra précisier le type de navigation dont il s'agit en rajoutant l'attribut `aria-label` dans la balise `<nav role="navigation">` :
     - Menu principal : `<nav role="navigation" aria-label="Menu principal">`
     - Menu secondaire : `<nav role="navigation" aria-label="Menu secondaire">`
     - Fil d'Ariane : `<nav role="navigation" aria-label="Vous êtes ici">`
     - Pagination : `<nav role="navigation" aria-label="Naviguer entre les pages">`

### Utilisation de l'élement sémantique de liste `<ul>`ou `<ol>`
- Le menu de navigation sera ensuite balisé avec un système de liste : 
     - liste non ordonnée, pour le menu principal, secondaire et la pagination : `<ul><li>...</li></ul>`
     - liste ordonnée pour le fil d'Ariane : `<ol><li>...</li></ol>`
- la position courante dans le système de navigation sera identifée avec :
     - le rôle aria `aria-current="page"` :  
     `<li aria-current="page">libellé de la page en cours</li>`
     - et , s'il s'agit d'un menu avec sous-menus, `aria-current="true"` pour identifier la rubrique parente du lien en cours :  

     ```html
     <li><a href="…" aria-current="true">Rubrique</a>
         <ul>
            <li><a href="…">Sous-rubrique</a></li>
            <li aria-current="page">Sous-rubrique (page en cours)</li>
            <li><a href="…">Sous-rubrique</a></li>
         </ul>
      </li>
      ```

### Utilisation de l'élement sémantique `<button>`
- L'élément `<button>` sera utilisé dans le cas d'un menu déroulant. 
- Il sera posé sur la rubrique parente qui déclenche l'affichage du sous-menu au clic (ou avec les touches les touches Espace et Entrée dans le cas d'une navigation au clavier).
- L'attribut aria `aria-expanded` sera posé sur le bouton : 
     - `aria-expanded="true"` quand le sous-menu est déplié.
     - `aria-expanded="false"` quand le sous-menu est replié.


