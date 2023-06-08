---
title: "Formatage du contenu"
weight: 1
description: "Bien structurer sa page et proposer un visuel homogène et cohérent entre les pages permet de faciliter la navigation et la compréhension du contenu du site."
---


Bien structurer sa page et proposer un visuel homogène et cohérent entre les pages permet de faciliter la navigation et la compréhension du contenu du site. Comme il n'est pas possible d'être exhaustif, nous allons parcourir ici les éléments sur lesquels être vigilants car bien souvent source de non conformité en terme d'accessibilité numérique.


## Les points essentiels à retenir

### Principes généraux
- La présentation des pages (menu de navigation, contenu) doit rester cohérente d'une page à l'autre.
- Une information ne doit pas être donnée uniquement par la forme, la taille ou la position.
- La prise de focus doit être bien visible.  
Pour cela, déplacez-vous dans la page uniquement à l'aide du clavier (touche "tabulation"). Si vous ne savez pas où se trouve votre curseur, c'est que cette règle n'est pas respectée. Ajoutez alors un style spécifique pour l'état "focus" dans votre feuille de style.  
Exemple :  
```css
:focus {
    outline: 3px solid purple;
}
```
- Veiller à rendre l'information compréhensible quand les feuilles de style sont désactivées.  
Pour cela, utiliser l'extension "Web Developper" préalablement ajoutée à votre navigateur et choisissez "Disabled All Styles" dans l'onglet "styles".


![Web developper - onglet CSS](/images/web-developper-css.jpg)

- Veiller à ce que tout le texte soit visible en cas de : 
    - fort grossissement - Appuyer sur les touches Ctrl et + à 6 reprises.
    - changement d'orientation de l'écran (site responsive) - Dans firefox, vous pouvez afficher une vue adaptative de votre fenêtre via la combinaison de touches Ctrl + Maj + M
    - zoom de la page html - utiliser la loupe de Windows par exemple.


### Structure du texte

**En bref**
- les titres seront balisés balises avec les balises allant de `<h1>...</h1>` à `<h6>...</h6>`
- Le paragraphe sera balisé avec `<p>...</p>`
- Le bloc de citation avec `<blockquote>...</blockquote>`
- Un extrait de citation (inséré dans un paragraphe) sera balisé par `<q>...</q>`
- Un lien sera balisé avec `<a href="url-vers-la-page">...</a>` ou `<a href="#emplacement-dans-la-page">...</a>`
- Un bouton sera balisé par `<button>...</button>`
- Une image sera balisée par `<img src="lien-vers-l-image/nom-de-l-image" alt="">`


## Halte au détournement de code !

Certains éléments HTML sont détournés de leur usage sémantique ; cela est bien entendu proscrit. Voivi les cas de "détournement de code" les plus fréquents. 

### Confusion entre liens et boutons
Il existe deux types de détournement de code : 

-  Utilisation des balises de lien `<a>...</a>`, pour obtenir des bouton sans arrière-plan ni bordure. 
- Utilisation d'un lien au lieu d'un bouton : `<a href="#" onClick="...">...</a>`.   
Ici, une action javascript a été posé sur le lien via un `onClick`. Un lien sur lequel on pose un `onClick` n'est pas un lien, c'est un bouton. La bonne façon de faire sera : `<button onClick="...">...</button>`, quitte à donner ensuite à son bouton l'allure d'un lien hypertexte via du CSS.

Pour plus d'informations sur la différences entre liens et boutons, [se référer à la rubrique Liens et boutons](/code/lien-bouton/)



### Utiliser la balise `<hr>` pour créer une ligne horizontale de séparation.   
La balise `<hr>` ne peut être utilisée qu'entre deux balises de type paragraphe `<p>...</p>` et sert à représenter un changement thématique entre deux paragraphes. On ne pourra donc utiliser `<hr />` que dans le contexte suivant :    

```html 
<p>Quand je mange du chocolat, tout va.</p>
<hr>
<p>Quand je dessine avec un pinceau en poils de chameau, tout est beau.</p>
```
Pour créer une ligne de séparation, on utilisera donc un style CSS déclaré, par exemple, via `border-top: 1 px solid black;`


### Utilisation de `<fieldset>...</fieldset>` pour obtenir une bordure.

`<fieldset>...</fieldset>` est une balise spécifique au formulaire (balise `<form>...</form>`). La balise `<fieldset>` doit toujours est suivie ddes balises `<legend>...</legend>` pour que le code soit conforme.  
Les balises `<fieldset>...</fieldset>` ne doivent être utilisées que dans les formulaire pour regrouper des champs de même nature. 

**Exemple**
```html 
<form ...>
     <fieldset>
          <legend>Invité 1</legend>
               <label for="prenom1">Prénom</label>
               <input type="text" id="prenom1" name="prenom1" />
               <label for="nom1">Nom</label>
               <input type="text" id="nom1" name="nom1" />
     </fieldset>
     <fieldset>
          <legend>Invité 2</legend>
               <label for="prenom2">Prénom</label>
               <input type="text" id="prenom2" name="prenom2" />
               <label for="nom2">Nom</label>
               <input type="text" id="nom2" name="nom2" />
     </fieldset>
</form>
```
Pour plus d'informations sur les formulaires, [se référer à la rubrique Formulaire](/code/formulaire/).

### Utiliser des éléments HTML à des fons de mise en forme

Les balises `<q>...</q>` sont parfois utilisées pour obtenir un texte entre guillemets (mise en forme par défaut des navigateurs).  
Comme vu au début de cette page, les balises `<q>...</q>` servent à indiquer une citation courte à l'intérieur d'un paragraphe.  