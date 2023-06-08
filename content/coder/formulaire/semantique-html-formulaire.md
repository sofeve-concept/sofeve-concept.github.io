---
title: "Sémantique HTML"
draft: false
weight: 1
description: "Les formulaires HTML permettent d'envoyer des données qui seront ensuite traitées côté serveur."
---

## Ce qu'il faut retenir

Un formulaire HTML est composé de plusieurs éléments : zones de texte (sur une seule ligne ou plusieurs lignes), liste de sélection déroulante, cases à cocher, boutons radio et boutons d'action (soumission du formulaire ou effacement des champs).

## Code HTML

{{< innerhtml >}}

<table>
   <caption>Sémantique HTML des formulaires</caption>
<thead>
    <tr>
        <th scope="col">&Eacute;lément HTM</th>
        <th scope="col">Utilisation</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row"><code>&lt;form>...&lt;/form></code></th>
        <td>Déclaration du formulaire</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;fieldset>...&lt;/fieldset></code></th>
        <td>Regroupement de champs de même nature.</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;legend>...&lt;/legend></code></th>
        <td>Intitulé du groupe de champs.<br>
        <span class="fa fa-triangle-exclamation" aria-hidden="true"></span><span class="sr-only">Attention</span> <strong><code>&lt;legend></code> est toujours implémenté après <code>&lt;fieldset></code>.</strong> </td>
    </tr>
     <tr>
        <th scope="row"><code>&lt;label>...&lt;/label></code></th>
        <td>Libellé de champ</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;textarea>...&lt;/textarea></code></th>
        <td>Zone de texte multi-lignes</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;select>...&lt;/select></code></th>
        <td>Déclaration de liste déroulante</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;option>...&lt;/option></code></th>
        <td>Item de la liste déroulante</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;optgroup label="...">...&lt;/optgroup></code></th>
        <td>Regroupement d'options de la liste déroulante.</td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;input></code>
        <br><span class="fa fa-triangle-exclamation" aria-hidden="true"></span><span class="sr-only">Attention</span> <strong>Il s'agit d'une balise orpheline.</strong></th>
        <td>Champ de formulaire (texte, mot de passe, case à cocher, bouton, etc.)
        <ul>
            <li><code>&lt;input type="checkbox" value="valeur1" id="choix1" name="groupeDeCaseACocher"&gt;</code> :
                case à cocher</li>
            <li><code>&lt;input type="radio" value="valeur1"  id="choix1" name="groupeDeBoutonRadio"&gt;</code> :
                bouton radio</li>								
            <li><code>&lt;input type="date" id="laDate" name="laDate" &gt;</code> : champ date (html5)</li>
            <li><code>&lt;input type="email" id="leMail" name="leMail" &gt;</code> : champ mail (html5)</li>
            <li><code>&lt;input type="password" id="mdp" name="mdp" &gt;</code> : champ mot de passe
                (html5)</li>
            <li><code>&lt;input type="search" id="recherche" name="recherche" &gt;</code> : champ de recherche (html5)</li>
             <li><code>&lt;input type="file" id="fichier" name="fichier" &gt;</code> : sélection de fichier pour envoi</li>
        </ul></td>
    </tr>
    <tr>
        <th scope="row"><code>&lt;button>...&lt;/button></code></th>
        <td>Bouton de soumission ou de réinitialisation du formulaire.
        <ul>
            <li><code>&lt;button type="submit"&gt;...&lt;/button></code> : soumission du formulaire</li>
		    <li><code>&lt;button type="reset"&gt;...&lt;/button></code> : réinitialisation du formulaire</li>
		</ul></td>
    </tr>
</tbody>
</table>
{{< /innerhtml >}}

## Cas des formulaire à étapes multiples

Lors d'un formulaire à étapes multiples (étapes de passage de commande, par exemple), il faudra : 
- Prévoir la mise en place d'une navigation du processus à étape (tunnel) avec l'élément HTML `nav` ;
- Identifier l’étape courante avec <aria-current="step">

```html
<nav aria-label="Étapes de votre commande">
	<ol>
		<li><a href="/info">Informations personnelles</a></li>
		<li aria-current="step">Paiement</li>
		<li>Prévisualisation</li>
	</ol>
 </nav>
```