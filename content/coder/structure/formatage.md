---
title: "Formatage du contenu"
weight: 2
description: "Bien structurer sa page et proposer un visuel homogène et cohérent entre les pages permet de faciliter la navigation et la compréhension du contenu du site."
---


Bien structurer sa page et proposer un visuel homogène et cohérent entre les pages permet de faciliter la navigation et la compréhension du contenu du site. Comme il n'est pas possible d'être exhaustif, nous allons parcourir ici les éléments sur lesquels être vigilants car bien souvent source de non conformité en terme d'accessibilité numérique.


## Les points essentiels à retenir
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




## Structurer le texte

**En bref**
- les titres seront balisés balises avec les balises allant de `<h1>...</h1>` à `<h6>...</h6>`
- Le paragraphe sera balisé avec `<p>...</p>`
- Le bloc de citation avec `<blockquote>...</blockquote>`
- Un extrait de citation (inséré dans un paragraphe) sera balisé par `<q>...</q>`
- Un lien sera balisé avec `<a href="url-vers-la-page">...</a>` ou `<a href="#emplacement-dans-la-page">...</a>`
- Un bouton sera balisé par `<button>...</button>`
- Une image sera balisée par `<img src="lien-vers-l-image/nom-de-l-image" alt="">`

### Balises de titraille, éléments html `h1` à `h6`
Le contenu du document est hiérarchisé à l'aide déléments de titraille (balises allant de `<h1>...</h1>` à `<h6>...</h6>`); S'il est possible d'aller au delà du niveau 6, mieux vaut repenser la hériarchisation de sa page avant de rajouter un titre de niveau 7 ou plus...:
     - `<h1>Titre de niveau 1</h1>`
     - `<h2>Titre de niveau 2</h2>`
     - `<h3>Titre de niveau 3</h3>`
     - `<h4>Titre de niveau 4</h4>`
     - `<h5>Titre de niveau 5</h5>`
     - `<h6>Titre de niveau 6</h6>`
- La hiérarchie de titres sera logique et exhaustive ; on veillera notamment à ce qu'il n'y ait pas de "trous" entre les niveaux de titre (on passerait de h1 à h3, par exemple sans mettre de h2).
- Les balises de titraille seront utilisées pour créer des titres et non pas à des fins de mise en forme ou de présentation du texte.

### Formatage du texte

#### &Agrave; faire
- Utiliser des tailles relatives pour les polices de caractères : (em, rem, %, small...) ; 
- Veiller à déclarer une interligne de 1,5 via la déclaration css `line-height: 1.5;` ; 
- Utiliser la balise `<strong>...</strong>` pour signaler du contenu important et non pas pour mettre du texte en gras. Dans ce cas, on utilisera plutôt la déclaration css `font-weight: bold;` ; 

#### &Agrave; ne pas faire
- Utiliser les balises de titraille à des fins de mise en forme ;
- Justifier le texte - cela rend la lecture très difficile pour les personnes dyslexiques ;
- &Eacute;crire tout en majuscules - on utilisera plutôt la déclaration CSS `text-transform: uppercase;` ; et le "tout majuscules" sera réservé à des portions de texte très courtes ou aux titres ; 
- Utiliser la balise `<br>` (ou pire plusieurs fois cette balise) pour espacer une ligne ; de même on n'utilisera pas des balises de parapgraphes vides `<p></p>` pour espacer les lignes. Au lieu de cela, on utilisera des styles CSS avec des déclarations du type `margin-bottom: 1.5rem;` ;

### Citations

- Un bloc complet de citation sera inséré entre les balises `<blokquote>...</blokquote>` ; 
- Un extrait de citation, à l'intérieur d'un paragraphe, sera inséré entre les balises `<q>...</q>`.
- L'élément `<cite>` contiendra le titre d'une œuvre telle qu'un livre, une chanson, un film, une sculpture... 
{{% notice attention %}}
La spécification WHATWG proscrit l'utilisation de <code>cite</code> pour inclure le nom de l'auteur d'une œuvre... alors que la spécification W3C l'autorise. &Agrave; vous de voir...
{{% /notice %}}

### Changement de langue ou de direction
- Lorsque une portion de texte est écrite dans une langue différente de celle déclarée en entête de page (déclaration `<html lang="fr-FR">`, par exemple), il faudra mentionner le changement de langue avec l'attribut `lang`.  
Exemple :
```html
<p>Nous allons maintenant aborder des notions de <span lang="en">design thinking</span>.</p>
```
- De même, en cas de changment de sens de lecture (le document se lit de gauche à droite et une portion de texte se lit de droite à gauche, par exemple) ; ce changement de sens de lecture sera mentionné via l'attribut `dir`.

### Listes
Il existe 3 façons différentes d'implémenter des listes. Les listes servent à présenter des élements sous forme de liste mais aussi les éléments d'un menu : menu de navigation, fils d'ariane, processus par étape, pagination.  

#### Liste non ordonnée, balises `<ul>...</ul>` 
- On utilisera une liste non ordonnée quand l'ordre des items de la liste (balisée avec `<li>...</li>`) n'a pas d'importance.
- **&Agrave; ne pas faire** : créer une liste en écrivant "à la main" un tiret ou en insérant une image de puce et en séparant chaque item par `<br>` ou en écrivant chaque item dans un paragraphe (dans des balises `<p>...</p>`).

#### Liste ordonnée, balises `<ol>...</ol>`  
On utilisera une liste ordonnée quand l'ordre des items de la liste (balisée avec `<li>...</li>`) a de l'importance.  
Les balises de liste ordonnée seront utilisées notamment pour présenter : 
    - un fil d'ariane ;
    - un processus par étape ;
    - un système de pagination.  

#### Liste de définitions ou de descriptions, balises `<dl>...</dl>` et sous-balises `<dt>...</dt>` et `<dd>...</dd>`    
- Une liste de définitions correspond à une association de clés/valeurs comme dans la présentation d'un glossaire ou d'un événement, par exemple. 
- Il est possible d'associer plusieurs éléments `<dd>...</dd>` pour un même élément `<dt>...</dt>`
- En cas de présentation sur 2 colonnes, on veillera à aligner les élément `dt` à droite et `dd` à gauche afin de faciliter la lecture aux personnes déficients visuels qui utilisent une loupe et aux dyslexiques.

Exemple : 


```html
<dl>
	<dt>Wifi :</dt>
	    <dd>Technique qui permet la communication sans fil entre divers appareils (ordinateur, périphérique, téléviseur…) 
        grâce aux ondes radioélectriques.</dd>
	    <dd>Cas d'usage : Hier, il y a eu une panne de Wifi. Les enfants sont sortis de leur chambre.
        On a discuté. Ils avaient l'air sympa.</dd>
</dl>
```

```html
<dl>
   <dt>Adresse</dt>
        <dd>2 rue des petits pas - 44000 nantes</dd>
   <dt>Jours et heures d'ouverture</dt>
        <dd>Lundi, mardi, jeudi, vendredi : 9h30 - 12h30 / 14h -  19h</dd>
        <dd>Samedi : 9h30 - 12h30</dd>
</dl>
```


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