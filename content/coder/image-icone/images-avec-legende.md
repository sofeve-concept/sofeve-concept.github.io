---
title: "Image légendée"
weight: 3
description: "Le HTML5 a introduit un nouvel élément <figure> pour insérer une figure avec une légende."
---

## Implémentation HTML

Les images légendées doivent être balisées avec `<figure role="figure">` et `<figcaption>`.

La balise `<figure role="figure">` doit :

- Englober l’image ainsi que la légende, qui doit de son côté être balisée avec `<figcaption>`.
- Posséder un attribut aria-label dont le contenu doit correspondre à celui de la balise `<figcaption>`.


## Code et rendu

### Code HTML

```html
<figure role="figure" aria-label="Clavier permettant de lire et d'écrire en braille">
<img src="images/clavier.jpg" alt="Clavier Tact-braille" />
    <figcaption>Clavier TACT-BRAILLE permettant de lire et d'écrire en braille.</figcaption>
</figure>
```

### Rendu visuel


{{< innerhtml >}}
<figure role="figure" aria-label="Clavier Tact-braille permettant de lire et d'écrire en braille">
<img src="/images/tact-braille.jpg" alt="Clavier Tact-braille" />
    <figcaption>Clavier Tact-braille permettant de lire et d'écrire en braille.</figcaption>
</figure>
{{< /innerhtml >}}