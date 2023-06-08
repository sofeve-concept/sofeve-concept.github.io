---
title: "Liste déroulante"
draft: false
weight: 5
description: "Dans les formulaires, les listes déroulantes doivent respecter certaines règles."
---

## Règles générales

Les options proposées dans une liste déroulante doivent être ordonnées de manière logique :
- Ordre alphabétique (une liste de langues, par exemple).
- Ordre numérique (une liste de départements, par exemple).


## Implémentation HTML

**Code HTML**
 ```html
<select>
	<option value="Allemagne">Allemagne</option>
	<option value="Belgique">Belgique</option>
	<option value="Espagne">Espagne</option>
	<option value="France">France</option>
	<option value="Italie">Italie</option>
</select>
```

**Visuel**  

{{< innerhtml >}}
<select>
	<option value="Allemagne">Allemagne</option>
	<option value="Belgique">Belgique</option>
	<option value="Espagne">Espagne</option>
	<option value="France">France</option>
	<option value="Italie">Italie</option>
</select>
{{< /innerhtml >}}


### Attribut selected

Si on souhaite privilégier une option, on aura alors recours à l'attribut `selected`.

**Code HTML**
 ```html
<select>
	<option value="Allemagne">Allemagne</option>
	<option value="Belgique">Belgique</option>
	<option value="Espagne">Espagne</option>
	<option value="France" selected>France</option>
	<option value="Italie">Italie</option>
</select>
```

**Visuel**  

{{< innerhtml >}}
<select>
	<option value="Allemagne">Allemagne</option>
	<option value="Belgique">Belgique</option>
	<option value="Espagne">Espagne</option>
	<option value="France" selected>France</option>
	<option value="Italie">Italie</option>
</select>
{{< /innerhtml >}}

## Regroupement des options

Les options pevent être regroupées à l'aide de l'élément HTML `optgroup`.

**Code HTML**
 ```html
<select>
<option value="">Choisissez une destination...</option>
<optgroup label="Asie">
	<option value="Chine">Chine</option>
	<option value="Corée du sud">Corée du sud</option>
	<option value="Japon">Japon</option>
    <option value="Vietnam">Vietnam</option>
</optgroup>
<optgroup label="Europe">
	<option value="Allemagne">Allemagne</option>
	<option value="Belgique">Belgique</option>
	<option value="Espagne">Espagne</option>
	<option value="France">France</option>
	<option value="Italie">Italie</option>
</optgroup>
</select>
```

**Visuel**  

{{< innerhtml >}}
<select>
<option value="">Choisissez une destination...</option>
<optgroup label="Asie">
	<option value="Chine">Chine</option>
	<option value="Corée du sud">Corée du sud</option>
	<option value="Japon">Japon</option>
    <option value="Vietnam">Vietnam</option>
</optgroup>
<optgroup label="Europe">
	<option value="Allemagne">Allemagne</option>
	<option value="Belgique">Belgique</option>
	<option value="Espagne">Espagne</option>
	<option value="France">France</option>
	<option value="Italie">Italie</option>
</optgroup>
</select>
{{< /innerhtml >}}
