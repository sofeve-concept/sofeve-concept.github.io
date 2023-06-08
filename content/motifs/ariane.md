---
title: "Fil d'ariane"
weight: 1
description: "Extrait de code pour un fil d'ariane valide selon le W3C et les critères d'accessibilité numérique."
ico: "fas fa-road"
custom_css: "ariane"
tags: ["HTML", "CSS"]
---

{{< innerhtml >}}
<p>Une bonne pratique d'accessibilité pour le fil d'ariane ("<span lang="en">breadcrumb</span>", en anglais) consiste à ne pas rendre le lien de la page active cliquable.<br>
Cela se fait d'une part à l'aide de la CSS <code>pointer-events</code> qui va désactiver le clic et d'autre part à l'aide de l'attribut HTML <code>tabindex</code> qui va désactiver la prise de focus.</p>
{{< /innerhtml >}}


## Visuel

{{< innerhtml >}}
<nav aria-label="Vous êtes ici" class="demo-ariane">
    <ol>
        <li><a href="/">Accueil</a></li>
        <li><a href="/chapitre">Chapitre</a></li>
        <li><a href="/chapitre/rubrique/">Rubrique</a></li>
        <li><a href="/chapitre/rubrique/page/" aria-current="page" tabindex="-1">Page en cours</a></li>
    </ol>
</nav>
{{< /innerhtml >}}




## Extraits de code

### Code HTML

```html
<nav aria-label="Vous êtes ici" class="demo-ariane">
    <ol>
        <li><a href="/">Accueil</a></li>
        <li><a href="/chapitre">Chapitre</a></li>
        <li><a href="/chapitre/rubrique/">Rubrique</a></li>
        <li><a href="/chapitre/rubrique/page/" aria-current="page" tabindex="-1">Page en cours</a></li>
    </ol>
</nav>

```



### Code CSS

```css
:root {
    --ARIANE-background-color: #e3e3e3;
    --ARIANE-border-color: #d5d5d5;
    --ARIANE-link-color: #575757;
    --ARIANE-link-page-color: #333333;
    --ARIANE-separateur: ">";
}

nav.demo-ariane {
    padding: 0.8em 1em;
    border: 1px solid var(--ARIANE-border-color);
    border-radius: 4px;
    background: var(--ARIANE-background-color);
  }
  
  nav.demo-ariane ol {
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
  }
  
  nav.demo-ariane li {
    display: inline;
  }
  
  nav.demo-ariane li a{
    color: var(--ARIANE-link-color);
  }
  nav.demo-ariane li + li::before {
    padding-right: .5rem;
    padding-left: .5rem;
    content: var(--ARIANE-separateur)
  }
  
  nav.demo-ariane [aria-current="page"] {
    color: var(--ARIANE-link-page-color);
    font-weight: 700;
    text-decoration: none;
    pointer-events: none;
  }
```