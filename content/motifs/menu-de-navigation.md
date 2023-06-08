---
title: "Menu de navigation"
weight: 2
description: "Extrait de code pour un menu déroulant horizontal, déroulant et responsive avec bouton hamburger."
ico: "fas fa-route"
tags: ["HTML", "CSS", "JS"]
---

## Présentation

- L'exemple présenté ici est celui d'un menu _hamburger_ avec menu déroulant (rubriques parentes et sous-rubriques).  
- La page affichée est celle correspondant au lien 3 de la rubrique 2.
- Le bouton _hamburger_ est une icône : il est donc masqué aux logiciels de synthèse vocale par l'attribut aria `aria-hidden="true"` et un texte significatif est proposé pour ces logiciels mais caché à la vue via le style css `sr-only`.
- Le bouton de rubrique parente permettant d'afficher le sous-menu correspondant porte aussi l'attribut aria `aria-controls` qui fera référence à l'`ìd` posé sur la liste contenant le sous-menu.
- Pour que ce menu fonctionne, du code javascript sera nécessaire.

### Visuel du menu proposé
_Le menu proposé est celui du site "Sofève Concept"_

- Menu replié en vue supérieure à 1200px de large  
![menu replié - largeur minimum 1200px](/images/menu-navigation-1.jpg)

- Menu déplié en vue supérieure à 1200px de large   
![menu déplié - largeur minimum 1200px](/images/menu-navigation-2.jpg)

- Menu replié en vue responsive (largeur d'écran inférieure à 1200px)  
![menu replié - largeur inférieure à 1200px](/images/menu-navigation-3.jpg)

- Menu déplié en vue responsive (largeur d'écran inférieure à 1200px)  
![menu déplié - largeur inférieure à 1200px](/images/menu-navigation-4.jpg)


## Extraits de code

### Code HTML

```html
 <nav role='navigation' class="navbar" aria-label="Menu principal">
                <button aria-expanded="false" id="hamburger" aria-controls="menu" onclick="hamburger(this)">
                    <span class="sr-only">Menu</span></button>
                <ul id="menu">
                    <li class="home"><a href="xxx">
                        <span class="icon-home" aria-hidden="true"></span>
                        <span class="responsive">Accueil</span></a>
                    </li>
                    <li>
                        <button aria-expanded="false" aria-controls="menu-1">Première rubrique</button>
                        <ul id="menu-1">
                            <li><a href="xxx">Veniam nulla sunt ullamco commodo</a></li>
                            <li><a href="xxx">commodo nostrud consectetur</a></li>
                            <li><a href="xxx">Elit do ex commodo culpa tempor</a></li>
                        </ul>
                    </li>
                    <li><button aria-expanded="false" aria-controls="menu-2" aria-current="true">Deuxième rubrique</button>
                        <ul id="menu-2">
                            <li><a href="xxx">Veniam nulla sunt ullamco commodo</a></li>
                            <li><a href="xxx">commodo nostrud consectetur</a></li>
                            <li aria-current="page">La page active</li>
                            <li><a href="xxx">Elit do ex commodo culpa tempor</a></li>
                            <li><a href="xxx">voluptate qui mollit do cillum id</a></li>
                        </ul>
                    </li>
                    <li><button aria-expanded="false" aria-controls="menu-3">Troisième rubrique</button>
                        <ul id="menu-3">
                            <li><a href="xxx">Veniam nulla sunt ullamco commodo</a></li>
                            <li><a href="xxx">commodo nostrud consectetur</a></li>
                            <li><a href="xxx">voluptate qui mollit do cillum id</a></li>
                            <li><a href="xxx">Exercitation nisi labore laborum</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
```


### Code CSS

Pour adapter la couleur de la barre de navigation et des liens, modifier les codes couleurs dans la déclaration `:root`.

```css
:root {
    --FONT-FAMILY-texte:  Arial, Helvetica, sans-serif;
    --FONT-FAMILY-titre:  Arial, Helvetica, sans-serif;
    --CADRATIN-base: 1em;

    --WHITE-color: #FFFFFF;
    --WHITE-TRANSPARENT-color: rgba(255, 255, 255, 0.8);
    --BLACK-color: #000000;
    --BLACK-TRANSPARENT-color: rgba(0, 0, 0, 0.8);

    --BANDEAU-color: #474747;
    --BANDEAU-ACTIVE-color: #87c300;
    --BANDEAU-ACTIVE-CONTRAST-color: #000;
    --BANDEAU-TRANSPARENT-color: rgb(71, 71, 71, 0.8);
    --LINK-color: #4A6B00;
    --OUTLINE-color: 3px solid #588000;
    --BORDER-color: #575757;

    --SHADOW: 0 0.5rem 1rem #757575 !important;
   
}
 /** Navbar - Barre de navigation horizontale principale et menu déroulant */

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
/** classes de style pour les icônes */
[class^="icon-"]::before {
  --icon-size: 1.25rem;
  content: "";
  background-color: currentColor;
  display: inline-block;
  flex: 0 0 auto;
  height: var(--icon-size);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  vertical-align: calc(.375em - var(--icon-size)*0.5);
  width: var(--icon-size);
}
/** icône hamburger */
.icon-home::before {
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEyLjY3MyAxLjYxMkwyMyAxMWgtM3Y5YTEgMSAwIDAxLTEgMUg1YTEgMSAwIDAxLTEtMXYtOUgxbDEwLjMyNy05LjM4OGExIDEgMCAwMTEuMzQ2IDB6TTEzIDEzaC0ydjZoMnYtNnoiLz48L3N2Zz4=);
}

nav[role="navigation"].navbar {
    background-color: var(--BANDEAU-color);
    color: var(--WHITE-color);
    min-height: 2.5em;
}

nav[role="navigation"].navbar .responsive {
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}
nav[role="navigation"].navbar  button#hamburger {
    display: none;  
}
nav[role="navigation"].navbar button#hamburger::before {
    --icon-size: 1.5rem;
    content: "";
    background-color: currentColor;
    display: inline-block;
    flex: 0 0 auto;
    height: var(--icon-size);
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTMgNGgxOHYySDNWNHptMCA3aDE4djJIM3YtMnptMCA3aDE4djJIM3YtMnoiLz48L3N2Zz4=);
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTMgNGgxOHYySDNWNHptMCA3aDE4djJIM3YtMnptMCA3aDE4djJIM3YtMnoiLz48L3N2Zz4=);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    vertical-align: calc(.375em - var(--icon-size)*0.75);
    width: var(--icon-size);
    margin:0;
}
nav[role="navigation"].navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
}

nav[role="navigation"].navbar ul button[aria-expanded='false']+ul {
    display: none;
}

nav[role="navigation"].navbar ul li {
    text-align: center;
    border-right: 1px solid var(--WHITE-color);
}

nav[role="navigation"].navbar ul li[aria-current="page"],
nav[role="navigation"].navbar ul li a,
nav[role="navigation"].navbar ul li button {
    padding: 0.75rem 1.5rem .5rem 1.5rem;
    font-family: var(--FONT-FAMILY-texte);
    font-size: 1rem;
    line-height: 1em;
    color: var(--WHITE-color);
}

nav[role="navigation"].navbar  ul li[aria-current="page"],
nav[role="navigation"].navbar  ul li button[aria-current="true"] {
    background: var(--BANDEAU-ACTIVE-color);
    color: var(--BANDEAU-ACTIVE-CONTRAST-color);
    font-weight: bold;
}

nav[role="navigation"].navbar ul li a {
    display: block;
    text-align: left;
    text-decoration: none;
}

nav[role="navigation"].navbar ul li button {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    width: 100%;
    text-align: left;
}

nav[role="navigation"].navbar ul li button::after {
    --icon-size: 1.25rem;
    background-color: currentColor;
    content: "";
    float: right;
    height: var(--icon-size);
    margin-left: .5rem;
    margin-right: 0;
    -webkit-mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEyIDEzLjE3Mmw0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMmw0Ljk1IDQuOTV6Ii8+PC9zdmc+);
    mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTEyIDEzLjE3Mmw0Ljk1LTQuOTUgMS40MTQgMS40MTRMMTIgMTYgNS42MzYgOS42MzYgNy4wNSA4LjIyMmw0Ljk1IDQuOTV6Ii8+PC9zdmc+);
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    transition: transform .3s;
    vertical-align: calc(.375em - var(--icon-size)*0.5);
    width: var(--icon-size);
}

nav[role="navigation"].navbar ul li a:hover,
nav[role="navigation"].navbar ul li a:focus,
nav[role="navigation"].navbar ul li button:hover,
nav[role="navigation"].navbar ul li button:focus,
nav[role="navigation"].navbar ul li button[aria-expanded='true'] {
    background: var(--BANDEAU-ACTIVE-color);
    color: var(--BANDEAU-ACTIVE-CONTRAST-color);
    text-decoration: underline;
}

nav[role="navigation"].navbar ul li button[aria-expanded="true"]::after {
    transform: rotate(-180deg);
  }


nav[role="navigation"].navbar ul button[aria-expanded='true']+ul {
    display: block;
    box-shadow: var(--SHADOW);
    background-color: white;
    position: absolute;
    margin-top: 0;
    z-index: 1030;
}
/*si on veut un triangle vers le bas*/
nav[role="navigation"].navbar ul button[aria-expanded='true']+ul::before {
    content: "";
    display: block;
    border: 0.5em solid var(--WHITE-color);
    border-top-color: var(--BANDEAU-ACTIVE-color);
    position: absolute;
    top: 0;
    left: 0.25em;
}


/** style pour les sous-menus */
nav[role="navigation"].navbar ul button[aria-expanded='true']+ul {
    padding-bottom: .5em;
}
nav[role="navigation"].navbar ul button[aria-expanded='true']+ul li:first-of-type {
    padding-top: .5em;
}

nav[role="navigation"].navbar ul button[aria-expanded='true']+ul li[aria-current="page"],
nav[role="navigation"].navbar ul button[aria-expanded='true']+ul li a {
    color: var(--LINK-color);
    background: transparent;
}

nav[role="navigation"].navbar ul button[aria-expanded='true']+ul li a:hover,
nav[role="navigation"].navbar ul button[aria-expanded='true']+ul li a:focus {
    text-decoration: underline;
    background-color: transparent;
}
nav[role="navigation"].navbar ul button[aria-expanded='true'] + ul li[aria-current="page"] {
    font-weight: bold;
    
    
}
nav[role="navigation"].navbar ul button[aria-expanded='true'] + ul li[aria-current="page"]::before{
    content: "";
    float: left;
    height: 1em;
    margin-left: -.5em;
    margin-right: .25em;
    width: 3px;
    background-color: var(--LINK-color);
}
nav[role="navigation"].navbar ul button[aria-expanded='true'] + ul li[aria-current="page"]:first-of-type a{
    padding-top: .75em;
}

/** Responsive */
@media screen and (max-width: 1200px) {
 
   nav[role="navigation"].navbar button#hamburger {
        display: block;
        background-color: transparent;
        border:0;
        color: var(--WHITE-color);
        font-size: 1.2em;
        font-weight: bold;
        padding: 0.25em 1em 0.5em 1em;;
        cursor: pointer;
    }
   nav[role="navigation"].navbar button#hamburger:hover {
        background: #B0AEAE;
        color: #191A1A;
    }
   nav[role="navigation"].navbar button[aria-expanded=false]#hamburger + ul {
        display: none;
    }
    nav[role="navigation"].navbar ul button[aria-expanded='true']+ul::before {
        content: none;
    }
   nav[role="navigation"].navbar ul {
        flex-direction: column;
    }

   nav[role="navigation"].navbar ul li {
        text-align: left;
        border: 0;
    }

   nav[role="navigation"].navbar ul li:not(:last-child) {
        border-bottom: 1px solid var(--WHITE-color);
    }

    nav[role="navigation"].navbar .icon-home {
        display: none;
       } 
   nav[role="navigation"].navbar .responsive {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
    }

    nav[role="navigation"].navbar ul button[aria-expanded='true']+ul {
        display: block;
        box-shadow: none;
        background-color: var(--WHITE-TRANSPARENT-color);
        position: static;
        margin-top: 0;
        z-index: 1000;
    }
   nav[role="navigation"].navbar button[aria-expanded='true'] + ul li  ul li:not(:last-child){
        border-bottom:1px solid var(--WHITE-color);
      }
   nav[role="navigation"].navbar ul button[aria-expanded='true']+ul li {
        border: 0;
    }

}
```


### Code javascript

```javascript
/**
 * Fonction pour afficher le sous-menu au clic de souris 
 */


function hamburger() {
  var hamb = document.getElementById("hamburger");
  let state = hamb.getAttribute('aria-expanded');
  state === 'false' ? hamb.setAttribute('aria-expanded', 'true') : hamb.setAttribute('aria-expanded', 'false');
}


function menuEtSousMenuDeroulant() {

  var theButtons = document.querySelectorAll('.navbar button[aria-expanded]:not(#hamburger)');

  for (i = 0; i < theButtons.length; i++) {

    // apparition/disparition du sous-menu au clic
    theButtons[i].addEventListener('click', function (e) {
      var thisButton = e.target;
      for (j = 0; j < theButtons.length; j++) {
        if (thisButton !== theButtons[j])
          theButtons[j].setAttribute('aria-expanded', 'false')
      }
      var stateButton = thisButton.getAttribute('aria-expanded') === 'false' ? true : false;
      thisButton.setAttribute('aria-expanded', stateButton);
    });

    // disparition des sous-menu quand changement de focus sur bouton
    theButtons[i].addEventListener('focus', function (e) {
      var thisButton = e.target;
      for (j = 0; j < theButtons.length; j++) {
        if (thisButton !== theButtons[j])
          theButtons[j].setAttribute('aria-expanded', 'false')
      }
    });
  }

  // disparition du sous-menu et focus sur le bouton correspondant au sous-menu
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEchap = false;
    if ("key" in evt) {
      isEchap = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEchap = (evt.keyCode === 27);
    }
    if (isEchap) {
      for (j = 0; j < theButtons.length; j++) {
        if (theButtons[j].getAttribute('aria-expanded') === 'true') {
          theButtons[j].setAttribute('aria-expanded', 'false');
          theButtons[j].focus()
        }
      }
    }
  };

}
menuEtSousMenuDeroulant()


// Fermeture de tous les sous-menus via clic dans le body
function fermerMenuViaClicBody(event) {
  var theButtons = document.querySelectorAll('.navbar button[aria-expanded]');
  if (!event.target.matches('.navbar button[aria-expanded]')) {
    for (i = 0; i < theButtons.length; i++) {
      theButtons[i].setAttribute('aria-expanded', 'false');
    }
  }
}

document.body.addEventListener('click', fermerMenuViaClicBody, false);
```