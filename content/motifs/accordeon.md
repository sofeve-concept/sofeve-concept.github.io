---
title: "Accordéon"
description: "Extrait de code pour un accordéon accessible au clavier."
ico: "fas fa-wave-square"
custom_css: "accordeon"
custom_js: "accordeon"
tags: ["HTML", "CSS", "JS"]
---

## Visuel

{{< innerhtml >}}
 <div id="accordionGroup" class="accordion">
            <h3>
                <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect1"
                    id="accordion1id">
                    <span class="accordion-title">
                        Rubrique1
                        <span class="accordion-icon"></span>
                    </span>
                </button>
            </h3>
            <div id="sect1" role="region" aria-labelledby="accordion1id" class="accordion-panel" hidden="">
                <div>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                </div>
            </div>
            <h3>
                <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect2"
                    id="accordion2id">
                    <span class="accordion-title">
                        Rubrique2
                        <span class="accordion-icon"></span>
                    </span>
                </button>
            </h3>
            <div id="sect2" role="region" aria-labelledby="accordion2id" class="accordion-panel" hidden="">
                <div>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                </div>
            </div>
            <h3>
                <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect3"
                    id="accordion3id">
                    <span class="accordion-title">
                        Rubrique3
                        <span class="accordion-icon"></span>
                    </span>
                </button>
            </h3>
            <div id="sect3" role="region" aria-labelledby="accordion3id" class="accordion-panel" hidden="">
                <div>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>

                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                </div>
            </div>
        </div>

{{< /innerhtml >}}


## Extraits de code

### Code HTML

```html
 <div id="accordionGroup" class="accordion">
            <h3>
                <button type="button" aria-expanded="true" class="accordion-trigger" aria-controls="sect1"
                    id="accordion1id">
                    <span class="accordion-title">
                        Rubrique1
                        <span class="accordion-icon"></span>
                    </span>
                </button>
            </h3>
            <div id="sect1" role="region" aria-labelledby="accordion1id" class="accordion-panel">
                <div>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                </div>
            </div>
            <h3>
                <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect2"
                    id="accordion2id">
                    <span class="accordion-title">
                        Rubrique2
                        <span class="accordion-icon"></span>
                    </span>
                </button>
            </h3>
            <div id="sect2" role="region" aria-labelledby="accordion2id" class="accordion-panel" hidden="">
                <div>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>

                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                </div>
            </div>
            <h3>
                <button type="button" aria-expanded="false" class="accordion-trigger" aria-controls="sect3"
                    id="accordion3id">
                    <span class="accordion-title">
                        Rubrique3
                        <span class="accordion-icon"></span>
                    </span>
                </button>
            </h3>
            <div id="sect3" role="region" aria-labelledby="accordion3id" class="accordion-panel" hidden="">
                <div>
                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>

                    <p>Consectetur cupidatat nisi amet exercitation quis mollit. Incididunt labore voluptate labore
                        nostrud incididunt fugiat labore est anim tempor et Lorem dolor ea. Est aute sint velit deserunt
                        qui adipisicing magna cillum fugiat et exercitation. Consectetur excepteur aliquip duis
                        consectetur minim tempor amet sint fugiat duis irure do. Laboris magna cupidatat sint enim non
                        occaecat cillum anim consectetur mollit laboris anim. Ea velit fugiat nisi aliquip labore sit
                        Lorem laborum mollit sit culpa non sunt.</p>
                </div>
            </div>
        </div>

```


### Code CSS

Pour adapter la couleur de la barre de navigation et des liens, modifier les codes couleurs dans la déclaration `:root`.

```css
:root {
    --accordeon-width: 50%;
    --acccordeon-border-radius: 0;
    --accordeon-border-color: #858585;
    --accordeon-entete-color: #212121;
    --accordeon-entete-hover-background-color: #e1edfe;
    --accordeon-entete-hover-color: #0759d5;
    --accordeon-focus-border-color: #0759d5;
    --accordeon-focus-within-background-color: #f7f7f7;
}

.accordion {
    margin: 0;
    padding: 0;
    border: 2px solid var(--accordeon-border-color);
    border-radius: var(--acccordeon-border-radius);
    width: var(--accordeon-width);
}

.accordion h3 {
    margin: 0;
    padding: 0;
}

.accordion:focus-within {
    border-color: var(--accordeon-focus-border-color);
}

.accordion>*+* {
    border-top: 1px solid var(--accordeon-border-color);
}

.accordion-trigger {
    background: none;
    color: var(--accordeon-entete-color);
    display: block;
    font-size: 1rem;
    font-weight: normal;
    margin: 0;
    padding: 1em 1.5em;
    position: relative;
    text-align: left;
    width: 100%;
    outline: none;
}

.accordion-trigger:focus {
    outline: 4px solid transparent;
}

.accordion>*:first-child .accordion-trigger,
.accordion>*:first-child {
    border-radius: var(--acccordeon-border-radius) var(--acccordeon-border-radius) 0 0;
}

.accordion>*:last-child .accordion-trigger,
.accordion>*:last-child {
    border-radius: 0 0 var(--acccordeon-border-radius) var(--acccordeon-border-radius);
}

button {
    border-style: none;
}

.accordion button::-moz-focus-inner {
    border: 0;
}

.accordion-title {
    display: block;
    pointer-events: none;
    border: transparent 2px solid;
    border-radius: var(--acccordeon-border-radius);
    padding: 0.25em;
    outline: none;
}

.accordion-trigger:focus .accordion-title {
    font-weight: bold;
}

.accordion-icon {
    border: solid currentcolor;
    border-width: 0 2px 2px 0;
    height: 0.5rem;
    pointer-events: none;
    position: absolute;
    right: 2em;
    top: 50%;
    transform: translateY(-60%) rotate(45deg);
    width: 0.5rem;
}

.accordion-trigger:focus,
.accordion-trigger:hover {
    background: var(--accordeon-entete-hover-background-color);
}

.accordion-trigger:focus .accordion-title,
.accordion-trigger:hover .accordion-title {
    color: var(--accordeon-entete-hover-color);
    font-weight: bold;
}

.accordion-trigger:focus .accordion-icon,
.accordion-trigger:hover .accordion-icon {
    border-color: var(--accordeon-entete-hover-color);
}

.accordion-trigger[aria-expanded="true"] .accordion-icon {
    transform: translateY(-50%) rotate(-135deg);
}

.accordion-panel {
    margin: 0;
    padding: 1em 1.5em;
}

/* For Edge bug https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4806035/ */
.accordion-panel[hidden] {
    display: none;
}
```


### Code javascript

```javascript

"use strict";

class Accordion {
  constructor(domNode) {
    this.rootEl = domNode;
    this.buttonEl = this.rootEl.querySelector("button[aria-expanded]");

    const controlsId = this.buttonEl.getAttribute("aria-controls");
    this.contentEl = document.getElementById(controlsId);

    this.open = this.buttonEl.getAttribute("aria-expanded") === "true";

    // add event listeners
    this.buttonEl.addEventListener("click", this.onButtonClick.bind(this));
  }

  onButtonClick() {
    this.toggle(!this.open);
  }

  toggle(open) {
    // don't do anything if the open state doesn't change
    if (open === this.open) {
      return;
    }

    // update the internal state
    this.open = open;

    // handle DOM updates
    this.buttonEl.setAttribute("aria-expanded", `${open}`);
    if (open) {
      this.contentEl.removeAttribute("hidden");
    } else {
      this.contentEl.setAttribute("hidden", "");
    }
  }

  // Add public open and close methods for convenience
  open() {
    this.toggle(true);
  }

  close() {
    this.toggle(false);
  }
}

// init accordions
const accordions = document.querySelectorAll(".accordion h3");
accordions.forEach((accordionEl) => {
  new Accordion(accordionEl);
});

```