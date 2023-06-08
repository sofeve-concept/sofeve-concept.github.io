---
title: "Sémantique HTML"
weight: 1
description: "Un tableau HTML permet de présenter des données de manière organisée."
---



## Ce qu'il faut retenir

Un tableau HTML permet de présenter des données de manière organisée.   
Avant l'arrivée du CSS et des propriétés flexbox et grid notamment, les tableaux servaient aussi à la présentation de l'information. Cette façon de faire est à exclure aujourd'hui.

## Code HTML

### Éléments HTML des tableaux

{{< innerhtml >}}
<table>
   <caption>Sémantique HTML des tableaux</caption>
<thead>
    <tr>
        <th scope="col">&Eacute;lément HTM</th>
        <th scope="col">Utilisation</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row"><code>&lt;table>...&lt;/table></code></th>
        <td>Déclaration du tableau</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;caption>...&lt;/caption></code></th>
        <td>Titre du tableau</td>
    </tr>
     <tr>
        <th scope="row"><code>&lt;thead>...&lt;/thead></code></th>
        <td>Section d'entête du tableau</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;tbody>...&lt;/tbody></code></th>
        <td>Section du corps du tableau</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;tfoot>...&lt;/tfoot></code></th>
        <td>Section de pied du tableau</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;tr>...&lt;/tr></code></th>
        <td>Déclaration de ligne de tableau</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;th>...&lt;/th></code></th>
        <td>Déclaration de cellule d'entête de tableau</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;td>...&lt;/td></code></th>
        <td>Déclaration de cellule de tableau</td>
    </tr>
</tbody>
</table>
{{< /innerhtml >}}

### Attributs HTML des tableaux

- `colspan` : permet de fusionner des colonnes. Exemple pour une fusion de 3 colonnes : `<th colspan="3">`
- `rowspan` : permet de fusionner des lignes. Exemple pour une fusion de 2 lignes : `<th rowspan="2">`

**Attributs spécifiques pour les lecteur d'écran**
- `scope` : permet de spécifier sur quoi porte la cellule. 
  - Exemple pour une cellule portant sur toute une colonne : `<th scope="col">`
  - Exemple pour une cellule portant sur toute une ligne : `<th scope="row">`
- `id` et `headers` : permet de créer une association entre plusieurs entêtes. Voir la rubrique [Tableau de données complexe](/coder/tableaux/tableaux-accessibles/#tableau-de-données-complexe) dans Tableaux accessibles.
