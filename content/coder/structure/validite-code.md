---
title: "Validité du code"
weight: 10
description: "Vérifier la validité du code HTML de sa page et de sa feuille de style CSS."
---


## Code HTML de base d'une page web
Une page web HTML doit comporter a minima les éléments suivants pour être valide : 
- Un _doctype_ pour indiquer qu'il s'agit d'une page HTML ; on choisira la déclaration correspondant au langage HTML 5 `<!DOCTYPE html>`;
- Une déclaration de langue à la [norme internationale ISO 639-1](https://www.iso.org/iso-639-language-codes.html); elle correspondra à la langue dans laquelle la page est écrite. 
- Des déclaration d'entête contenant des _meta informations_ dont l'encodage de la page, le titre de la page (qui apparaît dans l'onglet du navigateur) et d'autres déclarations comme les liens vers des feuilles de style CSS, des liens vers des scripts... ;
- Un corps de document contenant des balises sémantiques permettant de structurer la page ; c'est cette partie du code qui sera affichée dans le navigateur.

En résumé, une page HTML doit contenir a minima le code suivant : 

```html
<!DOCTYPE html>
<html lang="fr-FR">
<head>
     <meta charset="UTF-8">
     <title>Document</title>
</head>
<body>
</body>
</html>
```


### Contrôler la validité du code HTML

Pour tester la validité de son code HTML et apporter les corrections nécessaires si besoin, il existe un outil en ligne : le **validateur du W3C**. Voici comment procéder : 

1. Copier l'intégralité du code HTML de la page ;
1. Aller sur le site de validation du W3C : [https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea) ;
1. Copier le contenu dans la zone de texte prévue à cet effet ;
1. Cliquer sur le bouton [Check].



## Code CSS d'une page web

Le CSS (Cascading Style Sheets en anglais, ou « feuilles de style en cascade ») est un langage qui a été inventé pour styliser les contenus de nos pages en leur appliquant des styles. Les standards définissant CSS sont publiés par le World Wide Web Consortium (W3C). Introduit au milieu des années 1990, CSS devient couramment utilisé dans la conception de sites web et bien pris en charge par les navigateurs web dans les années 2000

Comme tout langage informatique, le CSS a évolué au cours du temps ; Aujourd'hui on parle de CSS3.

Une feuille de style :

- permet la mise en forme du document,
- permet de dissocier le fond (html) de la forme (style CSS),
- est un langage à part entière,
- le terme "cascade" indique qu'il y a un système d’héritage entre les styles.


### Contrôler la validité du code CSS

De la même manière que pour le HTML, la validité du code CSS sera vérifiée via le **validateur du W3C**. Voici comment procéder : 

1. Copier l'intégralité du code CSS de la feuille de style ;
1. Aller sur le site de validation du W3C : [https://validator.w3.org/nu/#textarea](https://validator.w3.org/nu/#textarea) ;
1. Cocher la case **CSS**
1. Copier le contenu dans la zone de texte prévue à cet effet ;
1. Cliquer sur le bouton [Check].