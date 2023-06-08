---
title: "Code HTML global"
weight: 2
description: "Structure de base d'une page HTML valide selon le W3C et les critères d'accessibilité numérique."
---


Une page web doit comporter différents éléments pour être valide : 
- Un _doctype_ pour indiquer qu'il s'agit d'une page HTML 5 ;
- Une déclaration de langue
- Une entête contenant des _meta informations_ comme le titre de la page (qui apparaitra dans l'onglet du navigateur) et diverses déclarations comme l'encodage de la page, les liens vers des feuilles de style... ;
- Le corps du document (c'est cette partie du code qui sera affichée dans le navigateur) contenant des balises sémantiques permettant de structurer la page.


## Règles d'implémentation

- Le doctype HTML 5 s'écrit `<!DOCTYPE html>`
- il sera suivi par l'élement  `html` avec l'indication de la langue du document au format ISO `<html lang="fr-FR">` qui contiendra : 
    - les éléments HTML balisés par `<head>...</head>`
    - les éléments HTML balisés par `<body>...</body>`
- le document HTML se terminera avec la balise fermante `</html>`.

Le code HTML minimum se présentera donc comme suit : 

```html
<!DOCTYPE html>
<html lang="fr-FR">
    <head>
        <meta charset="UTF-8">
        <title>Titre de la page - Nom du site</title>
        ...
    </head>
    <body>
        ...
    </body>
</html>
```


## Règles d'accessibilité

L'extrait de code ci-après présente le code minimal pour avoir une page HTML conforme aux principes d'accessibilité numérique utilisation des **balises sémantiques HTML 5**, **role aria** et **lien d'évitement** (ou lien d'accès rapide qui permet d'accéder directement au contenu de la page).  

### Contenu de l'entête HTML (élément `head`)

Les balises `<head>...</head>` doivent contenir : 

#### Déclaration de l'encodage du document (élément `<meta charset`)
La norme UTF-8 sera privilégiée afin d'éviter les problèmes de caractères accentués. La déclaration de fait de cette manière :   
`<meta charset="UTF-8">`

#### Titre de page (élément `title`)

Le titre de page doit : 
- Donner a minima le nom de la page en cours et le nom du site ; 
- S'afficher de manière cohérente sur l'ensemble des pages ; 
- Afficher les informations du plus précis au plus général (nom de la page, nom de la rubrique pour finir par le nom du site)
- S'actualiser à chaque modification de page ou de contexte (on entendd par chagement de contexte lorque la page affiche un message d'erreur, le résultat d'un système de pagination...).

##### Exemples :
```html
<title>Rubrique - Chapitre - Nom du site</title>
```
```html
<title>Page en cours - Rubrique - Chapitre - Nom du site</title>
```
```html
<title>Erreur - Rubrique - Chapitre - Nom du site</title>
```
```html
<title>Confirmation - Nous Contacter - Nom du site</title>
```
```html
<title>Résultat de la recherche (page 1/3) - Rechercher dans le site - Nom du site</title>
```
```html
<title>Blog (page 2/10) - Nom du site</title>
```

#### Déclaration pour gérer l'affichage adaptatif du site (élément `<meta name="viewport"`)

La déclaration d'affichage adaptatif permet de concevoir un site "responsive" qui s'adaptera au différentes configurations d'écran et périphériques de sorties prévus en CSS.  
On insérera donc la balise `meta name="viewport"` avec l'attribut `content` pour lequel on déclarera les propriétés :
- `height` et/ou `width` : taille de l'écran ; on déclarera respectivement `device-height` ou `device-width` comme valeur de référence.
- `initial-scale` : niveau de zoom initial ; la valeur "1" correspond à un zoom de départ de 100% ; valeur à privilégier.
- `user-scalable` : zoomer dans la page (valeur "yes" par défaut ; il n'est donc pas nécessaire de le préciser et c'est cette valeur qui sera choisie) ou non (no).

##### Exemple :
```html
<meta name="viewport" content="width=device-width, initial-scale=1"> 
```


### Contenu du corps du document HTML (élément `body`)

Les balises `<body>...</body>` doivent contenir :

#### Lien d'évitement
Un lien d'évitement (ou lien d'accès rapide) sera proposé immédiatement après la balise `<body>` afin de permettre à une personne naviguant au clavier d'atteindre dès le chargement d'une nouvelle page le contenu de celle-ci.  
_Pour comprendre l'intérêt d'un tel lien d'accès rapide, ouvrez une page dans votre navigateur et déplacez-vous dans cette page sans utiliser la souris mais uniquement en utilisant les touches du clavier (les déplacements se réalisent avec la touche "tabulation" du clavier). Vous comprendrez rapidement la plus-value que représente l'implémentation d'un lien d'accès rapide._


#### Zone d'entête principale (élément `header` avec le role aria `banner`)
La zone d’entête principale sera balisée avec : `<header role="banner">...</header>`.   
Si la balise `<header>` peut être utilisée plusieurs fois dans une page web, la balise avec le `role="banner"` ne doit être employée qu’une seule fois.
Cette zone d'entête principale propose la pluplart du temps le logo du site, le menu de navigation principale et parfois la zone de recherche dans tout le site.


#### Zone de navigation principale  (élément `nav` avec le role aria `navigation`)
Le menu de navigation principal permettatn de naviguer de pages en pages dans le site doit être balisés avec `<nav role="navigation">...</nav>`.   


{{% notice remarque %}}
La balise <code>&lt;nav role="navigation"></code> sert uniquement pour proposer des liens internes au site : menu principal ou secondaire, fil d'ariane, pagination, processus par étape.  
{{% /notice %}}


#### Zone de contenu principal  (élément `main` avec le role aria `main`)
La zone de contenu principal des pages sera balisée avec `<main role="main">...</main>`.    
Si la balise `<main>` peut être utilisée plusieurs fois dans une page web, la balise avec le `role="main"` ne doit être employée qu’une seule fois.

#### Zone de pied de page principal  (élément `footer` avec le role aria `contentinfo`)
La zone de pied de page principal des pages sera balisée avec `<footer role="contentinfo">...</footer>`.  
Si la balise `<footer>` peut être utilisée plusieurs fois dans une page web, la balise avec le `role="contentinfo"` ne doit être employée qu’une seule fois.  
La plupart du temps, cette zone recevra les informations relatives au site (copyright, Mentions légales, Crédits, Condition Générales d'Utilisation, Accessibilité, version de l'application...).   

{{% notice attention %}}
Dans le cas où une liste de liens est proposé dans le `footer`, ceux-ci <strong>ne seront pas encadrés</strong> par l'élément `nav`.
{{% /notice %}}


