---
title: "Saisie et contrôle du formulaire"
draft: false
weight: 2
description: "La mise en place d'aide à la saisie et la gestion des erreurs doivent respecter des règles d'accessibilité."
---



## Champ obligatoire
Si le champ est obligatoire, on utilisera un signe distinctif intégré dans la balise `<label>`. Ce signe ne sera pas implémenté via CSS pour être accessible.  
**Rappel : en aucun cas, on ne signalera le champ obligatoire en utilisant la couleur** (exemple à ne pas suivre : "Les champs obligatoires sont signalés en rouge").  
Enfin, la mention de la présence de champs obligatoire dans le formulaire sera signalée **au début** du formulaire.  
Le champ obligatoire sera codé avec l'attribut `required`.


 ```html
<form ...>
<p>Les champs signalés par une étoile(*) sont obligatoires.</p>
<label for="nom">Date de naissance *</label>
<input type="date" name="date" id="date" required>
...
</form>
```

_Remarque : le `type="date"` utilise la calendrier cliquable natif du navigateur ; plus besoin d'avoir recours à une librairie javascript comme c'était le cas en HTML 4_

## Aide à la saisie

### Généralités
Les aides à la saisie : 
- sont intégrées directement dans les balises <label> ;
- permettent de connaître le format de saisie attendu (ex: 25/11/1987) ;
- permettent de connaître le type et le poids maximal autorisé pour l’envoi de fichiers.

```html
<label for="numero">Votre numéro de client
	<input type="text" id="numero" name="numero" />
	<span>Par exemple : 76432-BTVZ</span>
</label>
```


```html
<label for="photo">Photo de profil
	<input type="file" id="photo" name="photo" />
	<span>Format autorisé : .jpg, .gif, .png - Poids maximum 100 ko.</span>
</label>
```

### Aide à la saisie avec l'attribut `autocomplete`

L'attribut `autocomplete` permet de faciliter le remplissage des champs qui contiennent une information personnelle enregistrée au préalable par l'utilisateur. Voici les attributs les plus courants : 

- Nom : `<input type="text" auto-complete="name" ...>`
- Prénom : `<input type="text" auto-complete="given-name" ...>`
- Mail : `<input type="mail" auto-complete="email" ...>`
- Téléphone : `<input type="tel" auto-complete="tel" ...>`
- Identifiant (nom d'utilisateur) : `<input type="text" auto-complete="username " ...>`
- Mot de passe (associé à l'identifiant) : `<input type="password" auto-complete="current-password" ...>`

Pour voir la liste complète, [consulter la page "input-purpose" du ](https://www.w3.org/TR/WCAG21/#input-purposes).


### Mise en forme complexe de l'aide à la saisie

Les informations à délivrer pour remplir un champ peuvent nécessiter une zone plus importante. Elles seront alors implémentées à l'aide de l'attribut `aria-describedby`.

```html
<label for="document">Ajouter un document à votre dossier </label>
 <input type="file" id="document" name="document" aria-describedby="quoi" />
<div class="quoi">
 <h2>Les documents attendus sont</h2>
 <ul>
	<li>CV</li>
	<li>Lettre de motivation</li>
 </ul>
 <p>Formats acceptés : pdf ou doc</p>
</div>
```


## Gestion des erreurs

La gestion des erreurs suit les règles suivantes : 
- Un message d'erreur sera implémenté accolé au champ en erreur ;
- Le message d'erreur expliquera les raisons de l'erreur de manière claire et sans ambiguïté ; 
- Le message d'erreur rappelera ce qui est attendu dans le champ et donnera des suggestions de correction (exemple : Veuillez renseigner un email valide (nom@domaine.fr) );
- Le message d'erreur sera relié au champ grâce à l'attribut `aria-labelledby` pour pouvoir être restitué par les logiciels de synthèse vocale ;
- Le focus clavier est mis sur le premier champ en erreur afin de pouvoir parcourir tout le formulaire ;
- Le champ en erreur (et/ou son label) ne seront **pas signalés uniquement par la couleur** (le champ en erreur pourra alors avoir une bordure plus grosse par exemple et son label écrit en gras);
- Le champ en erreur possèdera alors l'attribut `aria-invalid="true" ` ;
- Le message d'erreur pour un champ obligatoire qui n'est pas renseigné est contextualisé et unique (exemple : Le champ "Nom" est obligatoire) ;
- Le titre de la page HTML sera modifiée en conséquence.
```html
<head>
<title>Erreur - Formulaire d'envoi de votre commande</title>
...
</head>
```
Enfin, un message d'erreur global peut être implémenté au début du formulaire ; il aura alors le rôle `role="alert"`. **Cette zone prévue pour recevoir le message d'alerte global sera implémentée à vide dans la formulaire puis peuplée au moement du retour d'erreur**.
```html
<form>
<div role="alert"></div>
...
</form>
```
Il est possible aussi de paramétrer la façon dont l'alerte est vocalisée avec les attributs `aria-live` et `aria-atomic`. [Voir la documentation MDN sur ARIA live regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions).

