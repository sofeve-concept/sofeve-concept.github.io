---
title: "Carte cliquable"
description: "Extrait de code pour créer une carte cliquable valide selon le W3C et les critères d'accessibilité numérique."
ico: "fas fa-money-check"
custom_css: "ariane"
tags: ["HTML", "CSS"]
---




## Visuel

{{< innerhtml >}}
<div class="card demo">
     <h2><a href="#">Carte cliquable</a></h2>
     <p>Extrait de code pour créer une carte cliquable valide selon le W3C et les critères d'accessibilité numérique.</p>
</div>
{{< /innerhtml >}}




## Extraits de code

### Code HTML

```html
<div class="card demo">
     <h2><a href="#">Carte cliquable</a></h2>
     <p>Extrait de code pour créer une carte cliquable valide selon le W3C et les critères d'accessibilité numérique.</p>
</div>
```



### Code CSS

```css
:root {
    --SHADOW-BOX: 0 0 1em gray !important;
    --WHITE-color: white;
    --DARK-color : black;
    --BACKGROUND-HOVER-color: #7ca6da;
}
.card {
     margin: 1em 0 ;
     box-shadow: var(--SHADOW-BOX);
     padding: 1em .5em;
     background-color: var(--WHITE-color);
     transition: 0.5s;
     position: relative;
     height: 100%;
}
.card:hover {
  background-color: var(--BACKGROUND-HOVER-color);
}
.card h2 {
  font-size: 1.5em;
  margin:0 !important;
  padding: 0 0 0 .25em;
}
.card h2::after {
  width:0;
  height:0;
}
.card h2 a {
  color: var(--DARK-color);
  border: 0;
}
.card a:hover,
.card a:focus {
  text-decoration: none;
  border:0;
}
.card a::before {
	bottom: 0;
	content: "";
	display: block;
	height: 100%;
	left: 0;
	outline-color: inherit;
	outline-offset: 2px;
	outline-style: inherit;
	outline-width: 2px;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
	z-index: 1;
}
```