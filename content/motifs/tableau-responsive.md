---
title: "Tableau"
description: "Extrait de code pour créer un tableau permettant d'avoir une vue sans ascenseur horizontal lors d'un affichage en 320px de large."
ico: "fas fa-table"
custom_css: "tableau"
tags: ["HTML", "CSS"]
---


## Visuel

{{< innerhtml >}}
<div class="marges">
<table class="resp">
        <caption>Répartition en pourcentage des animaux selon la "classification chinoise des Animaux".</caption>
        <thead>
           <tr>
                <th scope="col">Animaux</th>
                <th scope="col">Confusianistes</th>
                <th scope="col">Confus</th>
            </tr>
        </thead> 
        <tbody>
            <tr>
                <th scope="row" data-label="Animaux">Appartenant à l’Empereur</th>
                <td data-label="Confusianistes">12</td>
                <td data-label="Confus">5</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Embaumés</th>
                <td data-label="Confusianistes">75</td>
                <td data-label="Confus">45</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Apprivoisés</th>
                <td data-label="Confusianistes">5</td>
                <td data-label="Confus">24</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Cochons de lait</th>
                <td data-label="Confusianistes">89</td>
                <td data-label="Confus">14</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Sirènes</th>
                <td data-label="Confusianistes">68</td>
                <td data-label="Confus">9</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Fabuleux</th>
                <td data-label="Confusianistes">96</td>
                <td data-label="Confus">45</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Chiens en liberté</th>
                <td data-label="Confusianistes">75</td>
                <td data-label="Confus">38</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Inclus dans la présente classification</th>
                <td data-label="Confusianistes">100</td>
                <td data-label="Confus">6</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Qui s’agitent comme des fous</th>
                <td data-label="Confusianistes">32</td>
                <td data-label="Confus">28</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Innombrables</th>
                <td data-label="Confusianistes">11</td>
                <td data-label="Confus">9</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Dessinés avec un pinceau très fin en poils de chameau</th>
                <td data-label="Confusianistes">42</td>
                <td data-label="Confus">98</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Et cætera</th>
                <td data-label="Confusianistes">21</td>
                <td data-label="Confus">67</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Qui viennent de casser la cruche</th>
                <td data-label="Confusianistes">46</td>
                <td data-label="Confus">2</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Qui de loin semblent des mouches.</th>
                <td data-label="Confusianistes">8</td>
                <td data-label="Confus">77</td>
            </tr>
        </tbody>
    </table>
</div>
{{< /innerhtml >}}




## Extraits de code

### Code HTML

```html
<table>
        <caption>Répartition en pourcentage des animaux selon la "classification chinoise des Animaux".</caption>
        <thead>
           <tr>
                <th scope="col">Animaux</th>
                <th scope="col">Confusianistes</th>
                <th scope="col">Confus</th>
            </tr>
        </thead> 
        <tbody>
            <tr>
                <th scope="row" data-label="Animaux">Appartenant à l’Empereur</th>
                <td data-label="Confusianistes">12</td>
                <td data-label="Confus">5</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Embaumés</th>
                <td data-label="Confusianistes">75</td>
                <td data-label="Confus">45</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Apprivoisés</th>
                <td data-label="Confusianistes">5</td>
                <td data-label="Confus">24</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Cochons de lait</th>
                <td data-label="Confusianistes">89</td>
                <td data-label="Confus">14</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Sirènes</th>
                <td data-label="Confusianistes">68</td>
                <td data-label="Confus">9</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Fabuleux</th>
                <td data-label="Confusianistes">96</td>
                <td data-label="Confus">45</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Chiens en liberté</th>
                <td data-label="Confusianistes">75</td>
                <td data-label="Confus">38</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Inclus dans la présente classification</th>
                <td data-label="Confusianistes">100</td>
                <td data-label="Confus">6</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Qui s’agitent comme des fous</th>
                <td data-label="Confusianistes">32</td>
                <td data-label="Confus">28</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Innombrables</th>
                <td data-label="Confusianistes">11</td>
                <td data-label="Confus">9</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Dessinés avec un pinceau très fin en poils de chameau</th>
                <td data-label="Confusianistes">42</td>
                <td data-label="Confus">98</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Et cætera</th>
                <td data-label="Confusianistes">21</td>
                <td data-label="Confus">67</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Qui viennent de casser la cruche</th>
                <td data-label="Confusianistes">46</td>
                <td data-label="Confus">2</td>
            </tr>
            <tr>
                <th scope="row" data-label="Animaux">Qui de loin semblent des mouches.</th>
                <td data-label="Confusianistes">8</td>
                <td data-label="Confus">77</td>
            </tr>
        </tbody>
</table>
```



### Code CSS

```css
:root {
    --BORDER-color: #333333;
    --THEAD-BACKGROUND-color: #191919;
    --THEAD-color: #FFF;
    --LIGNE-PAIR-color: #DBDBDB;
    --LIGNE-HOVER-color: #93c0eb;
}
table {
     margin: 0 auto; /** centre le tableau*/
     border-collapse: collapse;
     margin-bottom: 2em;
 }
 
 table caption {
     caption-side: top;
 }
 table th,
 table td {
     padding: 0.75em;
     border-bottom: 1px solid var(--BORDER-color);
 }
 
 table thead tr {
     color: var(--THEAD-color);
     background-color: var(--THEAD-BACKGROUND-color);
 }
 
 table tbody tr:nth-child(even){
     background-color: var(--LIGNE-PAIR-color);
 }
 table tbody tr:hover {
     background-color: var(--LIGNE-HOVER-color);
 }
 
 
 table tbody th {
     text-align: right;
 }
 table tbody td {
     text-align: right;
 }
 
 @media screen and (max-width: 992px) {
     table td,
     table th {
         font-size: 0.9em;
     }
 }
 
 @media screen and (max-width: 576px) {
     table thead {
         display: none;
     }
     table tr {
         display: block;
         margin-bottom: 1em;
     }
     table td {
         display: block;
         text-align: left;
     }
     table td::before {
         content: attr(data-label);
         float: left;
         font-weight: bold;
         padding-right: 0.25em;
     }
 }
 
 @media screen and (max-width: 550px) {
     table tr {
         border: 1px solid var(--BORDER-color);
     }
     table th,
     table td {
         padding: 0.75em;
         border-bottom: 0;
     }  
     table tbody th {
         text-align: center;
         background-color: var(--THEAD-BACKGROUND-color);
         color: var(--THEAD-color);
         display: block;
     }
 }
 
```


