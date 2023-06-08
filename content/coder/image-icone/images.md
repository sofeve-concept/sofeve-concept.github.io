---
title: "Les images"
weight: 2
description: "L'accessibilité numérique des images sera traitée différemment selon qu'il s'agit d'images informatives, décoratives, illustratives."
---


## Ce qu'il faut retenir

On n'utilisera pas le style CSS pour afficher les images porteuses d’informations telles que :
- Logos
- Images-textes
- Images-liens et boutons

Les images s'implémentent avec l'élément HTML `<img src="...">` ; dans certatins cas, un attribut `alt`(pour alternative visuelle) sera ajouté.


## Image sans alternative textuelle

Quand **les images ou les icônes sont décoratives**, on n'ajoute pas d'alternative textuelle (`alt`). On peut alors coder l'image de plusieurs manières : 

### &Eacute;lément HTML `img`

- avec alternative textuelle vide `alt=""` : 
```html
<img src="mon_image_decorative.png" alt="">
```
- sans l'attribut `alt`  et avec l'attribut `role="presentation"` : 
```html
<img src="mon_image_decorative.png" role="presentation">
```
### &Eacute;lément HTML `svg`
- avec l'attribut `focusable="false"` et le role aria `aria-hidden="true"`
```html
<svg aria-hidden="true" focusable="false">
	...
</svg>
```

## Image avec alternative textuelle

On ajoute une alternative textuelle quand les images ou les icônes sont :
- illustratives ou informatives
- des liens ou des boutons seuls

L'alternative textuelle se pose soit avec l'attribit `alt`, soit avec l'attribut `title`, soit avec les attributs aria `aria-label` ou `aria-labelledby`.

{{< innerhtml >}}
<table>
            <caption>Alternatives textuelles à utiliser selon le type d'image</caption>
       <thead>
        <tr>
            <th rowspan="2">&Eacute;lément HTML</th>
            <th colspan="3">Alternatives textuelles</th>
            </tr>
        <tr>
        <th>alt<br>
        </th>
        <th>title<br>
        </th>
        <th>aria-label<br>
        aria-labelledby<br>
        aria-describedby<br>
        </th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>&lt;img... alt="Description de l'image."&gt;
        </td>
        <td>x<br>
        </td>
        <td><br>
        </td>
        <td>x<br>
        </td>
        </tr>
        <tr>
        <td>&lt;input type="image" alt="Description de l'image."... &gt;
        </td>
        <td>x<br>
        </td>
        <td><br>
        </td>
        <td>x<br>
        </td>
        </tr>
        <tr>
        <td>&lt;area...alt="Description de l'image."&gt;
        </td>
        <td>x<br>
        </td>
        <td><br>
        </td>
        <td>x<br>
        </td>
        </tr>
        <tr>
        <td>&lt;object type="images"...&gt;
        </td>
        <td><br>
        </td>
        <td>x<br>
        </td>
        <td>x<br>
        </td>
        </tr>
        <tr>
        <td>&lt;embed type="images/..."...&gt;
        </td>
        <td><br>
        </td>
        <td>x<br>
        </td>
        <td>x<br>
        </td>
        </tr>
        <tr>
        <td>&lt;canvas ...&gt;
        </td>
        <td><br>
        </td>
        <td>x<br>
        </td>
        <td>x<br>
        </td>
        </tr>
        </tbody>
        </table>
        {{< /innerhtml >}}

 #### &Eacute;lément HTML `svg`

 Pour les svg, on aura recours à l'élément `<title>...</title>` (et non pas l'attribut `title`) et au rôle aria `role="img"`.

 ```html
<svg aria-labelledby="monTexte" role="img">
     <title id="monTexte">L'alternative textuelle de l'image</title>
	...
</svg>
```

Dans la cas où l'image svg nécessite une description plus détaillée, on utilisera alors l'élément `<desc>...</desc>`.   
 ```html
<svg aria-labelledby="monTexte maDescription" role="img">
     <title id="monTexte">Titre de l'image</title>
     <desc id="maDescription">Description détaillée de l'image.</desc>
	...
</svg>
```

#### Cas des images-liens
Exemple avec un texte visuellement caché et lu par les lecteurs d'écran grâce à la classe de style `sr-only` (screen reader only)

**HTML**
```html
<button>
     <svg focusable="false" aria-hidden="true">...</svg>
     <span class="sr-only">Rechercher</span>
</button>
```

**CSS**
```css
.sr-only{
position:absolute;
top:-10000px;
}
```

Autre implémentation possible : 

```html
<button aria-label="Rechercher">
     <svg focusable="false" aria-hidden="true">...</svg>
</button>
```

```html
<a href="..." aria-label="Rechercher">
     <svg focusable="false" aria-hidden="true">...</svg>
</a>
```


##  Les images légendées

Les images légendées doivent être balisées avec `<figure role="figure">` et `<figcaption>`.

La balise `<figure role="figure">` doit :

- Englober l’image ainsi que la légende, qui doit de son côté être balisée avec `<figcaption>`.
- Posséder un attribut aria-label dont le contenu doit reprendre celui de la balise `<figcaption>`.

```html
<figure role="figure" aria-label="Clavier permettant de lire et d'écrire en braille">
<img src="images/clavier.jpg" alt="Clavier Tact-braille" />
    <figcaption>Clavier TACT-BRAILLE permettant de lire et d'écrire en braille.</figcaption>
</figure>
```

## Les polices de caractère symboliques

Parmi les polices de cacractères symboliques, les plus connues sont :
- [Awesome](https://fontawesome.com/icons?d=gallery)
- [Bootstrap icons](https://icons.getbootstrap.com/)
- [Material Icons](https://fonts.google.com/icons?selected=Material+Icons)

Si le symbole n'apporte pas d'information, il sera masqué aux lecteurs d'écran via l'attribut aria `aria-hidden="true"`.
```html
<span class="fas fa-gift" aria-hidden="true"></span>
```

Si le symbole est porteur d'information, on apportera sa signification via l'attribut aria `aria-label`

```html
<span class="fas fa-search" aria-label="Rechercher"></span>
```


