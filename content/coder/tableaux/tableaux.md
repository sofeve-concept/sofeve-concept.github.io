---
title: "Tableaux"
weight: 2
description: "Selon que le tableau sert à la présentation ou à présenter des données, la façon de coder sera différente."
---

## Ce qu'il faut retenir

On veillera à ce que tous les contenus et toutes les fonctionnalités du tableau soient disponibles quelle que soit la taille de l’écran.  
En particulier, on veillera à ne pas supprimer de fonctionnalités (menus, systèmes de filtres, cartes interactives, etc.) et/ou de contenus (tableaux de données, vidéos, etc.) sur les vues responsive.  

{{< innerhtml >}}
<p>On veillera aussi à ce que le contenu linéarisé du tableau reste compréhensible. Avec l'extension de navigateur <span lang="en">"web developper"</span>, cliquer sur <span lang="en">"Misceallanous" - "Linearize page"</span>.</p>

{{< /innerhtml >}}
## Tableaux servant à la mise en forme

Avant l'existence des propriétés CSS flexbox ou gridbox, les tableaux étaient utilisés pour mettre en forme les informations sur une page (une colonne pour revevoir un menu et une autre pour recevoir du contenu, par exemple). Aujourd'hui, les tableaux servent de moins en moins à cela mais dans le cas où ils sont utilisés pour mettre en forme le contenu de la page, il faudra rajouter le role aria `role="presentation"`.   
**Ces tableaux de présentation ne devront en aucun cas intégrer les techniques d'accessibilité présentées pour les tableaux de données.**


 ```html
<table role="presentation">
   ...
</table>
```

## Tableaux de données

Les tableaux de données devront respecter les règles d'accessibilité suivantes : 
- Le tableau de données aura un titre, celui-ci doit être balisé avec l'élément HTML `<caption>` ;
- Les lignes d'entête seront encadrées par les balises `<thead>...</thead>` ;
- Les lignes de données seront encadrées par les balises `<tbody>...</tbody>` ;
- Les cellules d'entête de ligne et de colonne seront encadrées par les balises `<th>...</th>`.
- Dans le cas d'un tableau de données simple (une seule ligne d'entête), l’attribut `scope` sur les balises `<th>` : 
     - si la cellule d'entête porte sur la ligne complète, on écrira `<th scope="row">`
     - si la cellule d'entête porte sur la colonne entière, on écrira `<th scope="col">`
- Dans le cas d'un tableau de données complexe (une donnée fait référence à plusieurs entêtes), les attributs `headers` et `id` seront utilisés : 


 ```html
<th id="entete-1">Entête 1</th> <th id="entete-2">Entête 2</th>
...
<td headers="entete-1 entete-2"> la valeur de cette cellule se réfère aux entêtes 1 et 2 </th>
```