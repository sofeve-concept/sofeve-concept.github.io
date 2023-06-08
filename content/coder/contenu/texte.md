---
title: "Texte"
weight: 3
description: "Quelques règles en matière de formatage du texte sont à respecter pour faciliter l'accessibilité numérique de sa page."
---

## Formatage du texte

### &Agrave; faire
- Utiliser des tailles relatives pour les polices de caractères : (em, rem, %, small...) ; 
- Veiller à déclarer une interligne de 1,5 via la déclaration css `line-height: 1.5;` ; 
- Utiliser la balise `<strong>...</strong>` pour signaler du contenu important et non pas pour mettre du texte en gras. Dans ce cas, on utilisera plutôt la déclaration css `font-weight: bold;` ; 

### &Agrave; ne pas faire
- Utiliser les balises de titraille à des fins de mise en forme ;
- Justifier le texte - cela rend la lecture très difficile pour les personnes dyslexiques ;
- &Eacute;crire tout en majuscules - on utilisera plutôt la déclaration CSS `text-transform: uppercase;` ; et le "tout majuscules" sera réservé à des portions de texte très courtes ou aux titres ; 
- Utiliser la balise `<br>` (ou pire plusieurs fois cette balise) pour espacer une ligne ; de même on n'utilisera pas des balises de parapgraphes vides `<p></p>` pour espacer les lignes. Au lieu de cela, on utilisera des styles CSS avec des déclarations du type `margin-bottom: 1.5rem;` ;

## Citations

- Un bloc complet de citation sera inséré entre les balises `<blokquote>...</blokquote>` ; 
- Un extrait de citation, à l'intérieur d'un paragraphe, sera inséré entre les balises `<q>...</q>`.
- L'élément `<cite>` contiendra le titre d'une œuvre telle qu'un livre, une chanson, un film, une sculpture... 
{{% notice attention %}}
La spécification WHATWG proscrit l'utilisation de <code>cite</code> pour inclure le nom de l'auteur d'une œuvre... alors que la spécification W3C l'autorise. &Agrave; vous de voir...
{{% /notice %}}

## Changement de langue ou de direction
- Lorsque une portion de texte est écrite dans une langue différente de celle déclarée en entête de page (déclaration `<html lang="fr-FR">`, par exemple), il faudra mentionner le changement de langue avec l'attribut `lang`.  
Exemple :
```html
<p>Nous allons maintenant aborder des notions de <span lang="en">design thinking</span>.</p>
```
- De même, en cas de changment de sens de lecture (le document se lit de gauche à droite et une portion de texte se lit de droite à gauche, par exemple) ; ce changement de sens de lecture sera mentionné via l'attribut `dir`.
