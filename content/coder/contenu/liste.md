---
title: "Listes"
weight: 4
description: "Il existe trois façons de présenter une liste dans une page web."
---



## Listes
Il existe 3 façons différentes d'implémenter des listes. Les listes servent à présenter des élements sous forme de liste mais aussi les éléments d'un menu : menu de navigation, fils d'ariane, processus par étape, pagination.  

### Liste non ordonnée, balises `<ul>...</ul>` 
- On utilisera une liste non ordonnée quand l'ordre des items de la liste (balisée avec `<li>...</li>`) n'a pas d'importance.
- **&Agrave; ne pas faire** : créer une liste en écrivant "à la main" un tiret ou en insérant une image de puce et en séparant chaque item par `<br>` ou en écrivant chaque item dans un paragraphe (dans des balises `<p>...</p>`).

### Liste ordonnée, balises `<ol>...</ol>`  
On utilisera une liste ordonnée quand l'ordre des items de la liste (balisée avec `<li>...</li>`) a de l'importance.  
Les balises de liste ordonnée seront utilisées notamment pour présenter : 
    - un fil d'ariane ;
    - un processus par étape ;
    - un système de pagination.  

### Liste de définitions ou de descriptions, balises `<dl>...</dl>` et sous-balises `<dt>...</dt>` et `<dd>...</dd>`    
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

