---
title: "Regroupement de champs"
draft: false
weight: 4
description: "Lorsque des champs de même nature sont présentés dans un formulaire, une bonne pratique d'accessibilité consiste à les regrouper."
---



## Implémentation HTML
Les champs de même nature sont regroupés et titré avec `fieldset` et `legend`

**Code HTML**
 ```html
<fieldset>
	<legend>Participant 1</legend>
    <label for="nom-1">Nom</label>
	<input type="text" id="nom-1" name="nom-1" />
	<label for="prenom-1">Prénom</label>
	<input type="text" id="prenom-1" name="prenom-1" />
</fieldset>
<fieldset>
	<legend>Participant 2</legend>
	<label for="nom-2">Nom</label>
	<input type="text" id="nom-2" name="nom-2" />
	<label for="prenom-2">Prénom</label>
	<input type="text" id="prenom-2" name="prenom-2" />
</fieldset>
```

**Visuel**  


{{< innerhtml >}}
<fieldset>
	<legend>Participant 1</legend>
    <label for="nom-1">Nom</label>
	<input type="text" id="nom-1" name="nom-1" />
	<label for="prenom-1">Prénom</label>
	<input type="text" id="prenom-1" name="prenom-1" />
</fieldset>
<fieldset>
	<legend>Participant 2</legend>
	<label for="nom-2">Nom</label>
	<input type="text" id="nom-2" name="nom-2" />
	<label for="prenom-2">Prénom</label>
	<input type="text" id="prenom-2" name="prenom-2" />
</fieldset>
{{< /innerhtml >}}



## Regroupement de boutons radios et de cases à cocher

Les boutons radios et les cases à cocher seront présentés au sein d'une liste.

### Exemple avec des cases à cocher

```html
<fieldset>
    <legend>Activités pratiquées</legend>
	<ul>
            <li>
                <input type="checkbox" id="matin" name="activites" value="Grasse-matinée">
                <label for="matin">Grasse-matinée</label>
            </li>
            <li>
                <input type="checkbox" id="sieste" name="activites" value="sieste">
                <label for="sieste">Sieste</label>
            </li>
        </ul>
</fieldset>
```

{{< innerhtml >}}
<fieldset>
    <legend>Activités pratiquées</legend>
	<ul class="no-liste">
            <li>
                <input type="checkbox" id="matin" name="activites" value="Grasse-matinée">
                <label for="matin">Grasse-matinée</label>
            </li>
            <li>
                <input type="checkbox" id="sieste" name="activites" value="sieste">
                <label for="sieste">Sieste</label>
            </li>
        </ul>
</fieldset>
{{< /innerhtml >}}

### Exemple avec des boutons radios

```html
<fieldset>
    <legend>Aimez-vous le chocolat ?</legend>
	<ul>
            <li>
                <input type="radio" id="oui" value="oui" name="chocolat" />
                <label for="oui">Oui</label>
            </li>
           <li>
                <input type="radio" id="non" value="non" name="chocolat" />
                <label for="non">Non</label>
            </li>
        </ul>
</fieldset>
```

{{< innerhtml >}}
<fieldset>
    <legend>Aimez-vous le chocolat ?</legend>
	<ul class="no-liste">
            <li>
                <input type="radio" id="oui" value="oui" name="chocolat" />
                <label for="oui">Oui</label>
            </li>
           <li>
                <input type="radio" id="non" value="non" name="chocolat" />
                <label for="non">Non</label>
            </li>
        </ul>
</fieldset>
{{< /innerhtml >}}