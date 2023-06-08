---
title: "Tableaux accessibles"
weight: 2
description: "Selon que le tableau sert à la présentation ou à présenter des données, la façon de coder sera différente."
---

## Ce qu'il faut retenir

On veillera à ce que tous les contenus et toutes les fonctionnalités du tableau soient disponibles quelle que soit la taille de l’écran.  
En particulier, on veillera à ne pas supprimer de fonctionnalités (menus, systèmes de filtres, cartes interactives, etc.) et/ou de contenus (tableaux de données, vidéos, etc.) sur les vues responsive.  

{{< innerhtml >}}
<p>On veillera aussi à ce que le contenu linéarisé du tableau reste compréhensible.<br>  
Avec l'extension de navigateur <span lang="en">"web developper"</span>, cliquer sur <span lang="en">"Misceallanous" - "Linearize page"</span>.</p>
{{< /innerhtml >}}

## Tableaux servant à la mise en forme

Avant l'existence des propriétés CSS flexbox ou gridbox, les tableaux étaient utilisés pour mettre en forme les informations sur une page (une colonne pour revevoir un menu et une autre pour recevoir du contenu, par exemple).  
Aujourd'hui, les tableaux servent de moins en moins à cela mais dans le cas où ils sont utilisés pour mettre en forme le contenu de la page, il faudra rajouter le role aria `role="presentation"`.

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

### Tableau de données simple
Dans le cas d'un tableau de données simple (une seule ligne d'entête), on implémentera l’attribut `scope` sur les balises `<th>` : 
 - si la cellule d'entête porte sur la ligne complète, on écrira `<th scope="row">`
 - si la cellule d'entête porte sur la colonne entière, on écrira `<th scope="col">`

#### Exemple

**Code HTML**


```html
<table ...>
   <caption>Répartition des handicaps selon le type</caption>
<thead>
    <tr>
        <th scope="col">Type de handicap</th>
        <th scope="col">Nombre de personnes concernées (en million)</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">Déficience visuellue</th>
        <td>1.7</td>
    </tr>
    <tr>
        <th scope="row">Déficience auditive</th>
        <td>1.6</td>
    </tr>
    <tr>
        <th scope="row">Handicap physique</th>
        <td>2.3</td>
    </tr>
    <tr>
        <th scope="row">Handicap cognitif</th>
        <td>0.7</td>
    </tr>
</tbody>
<tfoot>
    <tr>
        <th colspan="2">Source Insee - Chiffre 2016</th>
    </tr>
</tfoot>
</table>
```

**Résultat**

{{< innerhtml >}}
<table>
   <caption>Répartition des handicaps selon le type</caption>
<thead>
    <tr>
        <th scope="col">Type de handicap</th>
        <th scope="col">Nombre de personnes concernées (en million)</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">Déficience visuelle</th>
        <td>1.7</td>
    </tr>
    <tr>
        <th scope="row">Déficience auditive</th>
        <td>1.6</td>
    </tr>
    <tr>
        <th scope="row">Handicap physique</th>
        <td>2.3</td>
    </tr>
    <tr>
        <th scope="row">Handicap cognitif</th>
        <td>0.7</td>
    </tr>
</tbody>
<tfoot>
    <tr>
          <th colspan="2">Source Insee - Chiffre 2016</th>
    </tr>
</tfoot>
</table>

{{< /innerhtml >}}



### Tableau de données complexe
Dans le cas d'un tableau de données complexe (une donnée fait référence à plusieurs entêtes), les attributs `headers` et `id` seront utilisés au lieu de l'attribut `scope` : 


```html
<th id="entete-1">Entête 1</th> <th id="entete-2">Entête 2</th>
...
<td headers="entete-1 entete-2"> la valeur de cette cellule se réfère aux entêtes 1 et 2 </th>
```

#### Exemple

**Code HTML**

 ```html
<table>
 <caption >Températures moyennes constatées</caption>
      <thead>
      <tr>
        <th id="temperature">Température</th>
        <th id="printemps" headers="temperature" colspan="2">Printemps</th>
        <th id="ete" headers="temperature" colspan="2">&Eacute;té</th>
        <th id="automne" headers="temperature" colspan="2">Automne</th>
        <th id="hiver"  headers="temperature" colspan="2">Hiver</th>
      </tr>
      <tr>
        <th id="nord">Secteur</th>
        <th id="minimale-printemps" headers="nord printemps">Minimale</th>
        <th id="maximale-printemps" headers="nord printemps">Maximale</th>
        <th id="minimale-ete" headers="nord ete">Minimale</th>
        <th id="maximale-ete" headers="nord ete">Maximale</th>
        <th id="minimale-automne" headers="nord automne">Minimale</th>
        <th id="maximale-automne" headers="nord automne">Maximale</th>
        <th id="minimale-hiver" headers="nord hiver">Minimale</th>
        <th id="maximale-hiver" headers="nord hiver">Maximale</th>
      </tr>
      <tr>
        <th id="nord">Nord</th>
        <td headers="nord printemps minimale-printemps">17</td>
        <td headers="nord printemps maximale-printemps">13</td>
        <td headers="nord ete minimale-ete">0</td>
        <td headers="nord ete maximale-ete">0</td>
        <td headers="nord automne minimale-automne">13</td>
        <td headers="nord automne maximale-automne">7</td>
        <td headers="nord hiver minimale-hiver">13</td>
        <td headers="nord hiver maximale-hiver">7</td>
      </tr>
      <tr>
        <th id="sud">Sud</th>
        <td headers="sud printemps minimale-printemps">17</td>
        <td headers="sud printemps maximale-printemps">13</td>
        <td headers="sud ete minimale-ete">0</td>
        <td headers="sud ete maximale-ete">0</td>
        <td headers="sud automne minimale-automne">13</td>
        <td headers="sud automne maximale-automne">7</td>
        <td headers="sud hiver minimale-hiver">13</td>
        <td headers="sud hiver maximale-hiver">7</td>
      </tr>
      <tr>
        <th id="est">Est</th>
        <td headers="est printemps minimale-printemps">17</td>
        <td headers="est printemps maximale-printemps">12</td>
        <td headers="est ete minimale-ete">0</td>
        <td headers="est ete maximale-ete">1</td>
        <td headers="est automne minimale-automne">13</td>
        <td headers="est automne maximale-automne">7</td>
        <td headers="est hiver minimale-hiver">13</td>
        <td headers="est hiver maximale-hiver">7</td>
      </tr>
      <tr>
        <th id="ouest">Ouest</th>
        <td headers="ouest printemps minimale-printemps">17</td>
        <td headers="ouest printemps maximale-printemps">12</td>
        <td headers="ouest ete minimale-ete">0</td>
        <td headers="ouest ete maximale-ete">1</td>
        <td headers="ouest automne minimale-automne">13</td>
        <td headers="ouest automne maximale-automne">7</td>
       <td headers="ouest hiver minimale-hiver">13</td>
        <td headers="ouest hiver maximale-hiver">7</td>
      </tr>
  </thead>
  <tfoot>
      <tr>
          <td colspan="9">Bien entendu, les chiffres sont totalement fictifs !</td>
      </tr>
  </table>
```

**Résultat**

{{< innerhtml >}}
<table>
 <caption >Températures moyennes constatées</caption>
      <thead>
      <tr>
        <th id="temperature">Température</th>
        <th id="printemps" headers="temperature" colspan="2">Printemps</th>
        <th id="ete" headers="temperature" colspan="2">&Eacute;té</th>
        <th id="automne" headers="temperature" colspan="2">Automne</th>
        <th id="hiver"  headers="temperature" colspan="2">Hiver</th>
      </tr>
      <tr>
        <th id="nord">Secteur</th>
        <th id="minimale-printemps" headers="nord printemps">Minimale</th>
        <th id="maximale-printemps" headers="nord printemps">Maximale</th>
        <th id="minimale-ete" headers="nord ete">Minimale</th>
        <th id="maximale-ete" headers="nord ete">Maximale</th>
        <th id="minimale-automne" headers="nord automne">Minimale</th>
        <th id="maximale-automne" headers="nord automne">Maximale</th>
        <th id="minimale-hiver" headers="nord hiver">Minimale</th>
        <th id="maximale-hiver" headers="nord hiver">Maximale</th>
      </tr>
      <tr>
        <th id="nord">Nord</th>
        <td headers="nord printemps minimale-printemps">17</td>
        <td headers="nord printemps maximale-printemps">13</td>
        <td headers="nord ete minimale-ete">0</td>
        <td headers="nord ete maximale-ete">0</td>
        <td headers="nord automne minimale-automne">13</td>
        <td headers="nord automne maximale-automne">7</td>
        <td headers="nord hiver minimale-hiver">13</td>
        <td headers="nord hiver maximale-hiver">7</td>
      </tr>
      <tr>
        <th id="sud">Sud</th>
        <td headers="sud printemps minimale-printemps">17</td>
        <td headers="sud printemps maximale-printemps">13</td>
        <td headers="sud ete minimale-ete">0</td>
        <td headers="sud ete maximale-ete">0</td>
        <td headers="sud automne minimale-automne">13</td>
        <td headers="sud automne maximale-automne">7</td>
        <td headers="sud hiver minimale-hiver">13</td>
        <td headers="sud hiver maximale-hiver">7</td>
      </tr>
      <tr>
        <th id="est">Est</th>
        <td headers="est printemps minimale-printemps">17</td>
        <td headers="est printemps maximale-printemps">12</td>
        <td headers="est ete minimale-ete">0</td>
        <td headers="est ete maximale-ete">1</td>
        <td headers="est automne minimale-automne">13</td>
        <td headers="est automne maximale-automne">7</td>
        <td headers="est hiver minimale-hiver">13</td>
        <td headers="est hiver maximale-hiver">7</td>
      </tr>
      <tr>
        <th id="ouest">Ouest</th>
        <td headers="ouest printemps minimale-printemps">17</td>
        <td headers="ouest printemps maximale-printemps">12</td>
        <td headers="ouest ete minimale-ete">0</td>
        <td headers="ouest ete maximale-ete">1</td>
        <td headers="ouest automne minimale-automne">13</td>
        <td headers="ouest automne maximale-automne">7</td>
       <td headers="ouest hiver minimale-hiver">13</td>
        <td headers="ouest hiver maximale-hiver">7</td>
      </tr>
  </thead>
  <tfoot>
      <tr>
          <td colspan="9">Bien entendu, les chiffres sont totalement fictifs !</td>
      </tr>
  </table>
  
{{< /innerhtml >}}