---
title: " Code de base"
weight: 1
description: "Code de base d'une page HTML valide selon le W3C et les critères d'accessibilité numérique."
ico: "fas fa-code"
style: "first"
tags: ["HTML", "CSS"]
---


Deux extraits de code sont présentés. Le premier est commenté ; le deuxième ne l'est pas et est suivi du code CSS pour le lien d'évitement.

## Extraits de code

### Code HTML commenté

```html
<!DOCTYPE html>
<html lang="fr-FR">
    <head>
        <!-- encodage -->
	<meta charset="UTF-8"> 
    <!-- affichage responsive du site -->
	<meta name="viewport" content="width=device-width, initial-scale=1">  
    <!-- compatibilité avec Edge -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <!-- Titre de la page -->
	<title>Titre de la page - Nom du site</title> 
    <!-- Informations facultatives -->
	<meta name="description" content="description du site..."> 
	<meta name="keywords" content="mot-clé 1, mot-clé 2...">
	<meta name="author" content="Auteur du site">
    <!-- affichage d'une icône personnalisée dans l'onglet du navigateur -->
	<link href="/images/favicon.ico" rel="icon"> 
    <!-- feuille de style externe utilisée pour l'impression -->
	<link rel="stylesheet" href="/css/print.css" media="print"> 
    <!-- feuille de style externe utilisée pour l'affichage à 'écran -->
	<link rel="stylesheet" href="/css/votre-feuille-de-style.css" media="screen"> 
</head>
<body>
    <!-- lien d'accès rapide au contenu de la page -->
    <a class="evitement" href="#contenu">Aller au contenu</a> 
    <!-- zone d'entête de la page ; accueille généralement le logo du site et la barre de navigation principale -->
    <header role="banner">
        <img src="mon-logo.png" alt="Logo de mon site" />
		<nav role="navigation" class="navbar" aria-label="Menu principal">
		<ul>
            <li><a href="...">Menu 1</a></li>
            <li><a href="...">Menu 2</a></li>
            <li><a href="...">Menu 3</a></li>
		</ul>
        </nav>
    </header>
    <!-- zone de contenu de la page -->
    <main role="main" id="contenu">
        <h1>Titre de niveau 1</h1>
        ...
        <h2>Titre de niveau 2</h2>
        ...
    </main>
    <!-- pied de page -->
    <footer role="contentinfo">
        ...
    </footer>

</body>
</html>

```


### Code HTML non commenté

```html
<!DOCTYPE html>
<html lang="fr-FR">
    <head>
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">  
	<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
	<title>Accueil - Site</title> 
	<meta name="description" content=""> 
    <meta name="keywords" content="">
	<meta name="author" content="">
	<link href="/images/favicon.ico" rel="icon"> 
	<link rel="stylesheet" href="/css/print.css" media="print"> 
	<link rel="stylesheet" href="/css/votre-feuille-de-style.css" media="screen"> 
</head>
<body>
    <a class="evitement" href="#contenu">Aller au contenu</a> 
    <header role="banner">
        <img src="mon-logo.png" alt="Logo de mon site" />
		<nav role="navigation" class="navbar" aria-label="Menu principal">
		<ul>
                    <li><a href=""></a></li>
		</ul>
        </nav>
    </header>
    <main role="main" id="contenu">
    </main>
    <footer role="contentinfo">
    </footer>
</body>
</html>
```

### Code CSS pour le lien d'évitement

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