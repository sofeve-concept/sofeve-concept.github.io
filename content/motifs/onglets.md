---
title: "Onglets"
description: "Extrait de code pour une présentation avec des onglets valide selon le W3C et les critères d'accessibilité numérique."
ico: "fas fa-th-list"
custom_css: "onglets"
custom_js: "onglets"
tags: ["HTML", "CSS", "JS"]
---

## Visuel

{{< innerhtml >}}
<div class="tabs">
            <h3>Liste d'onglets activables au clavier</h3>
            <div role="tablist" aria-labelledby="tablist-1" class="manual">
                <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
                    <span>Premier onglet</span>
                </button>
                <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
                    <span>Deuxième onglet</span>
                </button>
                <button id="tab-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-3" tabindex="-1">
                    <span>Troisième onglet</span>
                </button>
                <button id="tab-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-4" tabindex="-1">
                    <span>Quatrième onglet</span>
                </button>
            </div>
            <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
                <p>
                    Sunt veniam ad reprehenderit exercitation non dolore exercitation labore deserunt laboris deserunt.
                    Amet irure nulla eu nisi esse. Voluptate incididunt in Lorem cillum ut dolore enim qui magna. Dolore
                    reprehenderit enim amet eu magna duis.
                </p>
                <p>
                    Aute dolore culpa minim id in est dolore officia enim adipisicing. Elit deserunt reprehenderit
                    dolore aute duis ex. Culpa tempor esse non nostrud fugiat nisi deserunt magna amet.
                </p>
                <p>Commodo ex id non consectetur laboris excepteur reprehenderit excepteur in velit veniam ex culpa.
                    Occaecat excepteur in magna tempor. Et exercitation incididunt culpa reprehenderit irure.</p>
            </div>
            <div id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2" class="is-hidden">
                <p>
                    Laboris esse id id consequat cillum eiusmod esse dolore. Dolor non ullamco aliqua cupidatat fugiat
                    non. Amet enim aliquip veniam cillum consequat reprehenderit pariatur velit magna consectetur
                    ullamco fugiat deserunt. Aliquip in pariatur veniam eiusmod magna laboris deserunt ea adipisicing
                    proident laborum. Eiusmod consequat esse occaecat mollit. Commodo quis ea aute aliquip.
                </p>
                <p>Excepteur pariatur ut velit in do occaecat consectetur adipisicing labore ex. Reprehenderit qui non
                    ipsum irure exercitation magna amet pariatur consectetur pariatur tempor ut ex. Sint dolore sit
                    dolore ut eu sit dolor irure adipisicing pariatur elit dolore aliqua adipisicing. Non veniam magna
                    eu irure ad non qui labore reprehenderit est. Occaecat veniam consequat velit Lorem ad aliqua
                    excepteur labore mollit in.</p>
            </div>
            <div id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3" class="is-hidden">
                <p>
                    Ad laborum est minim est anim ea nisi sit. Duis fugiat mollit labore culpa duis. Sint Lorem mollit
                    non ut sit reprehenderit proident cupidatat.
                </p>
                <p>Excepteur pariatur irure nulla anim laboris. Labore anim cupidatat veniam adipisicing cupidatat.
                    Laboris ad culpa laboris culpa dolore nostrud laboris est. Eu ipsum laborum magna irure duis et in
                    nulla et in velit est ut.</p>
            </div>
            <div id="tabpanel-4" role="tabpanel" aria-labelledby="tab-4" class="is-hidden">
                <p>
                    Quis quis ut duis voluptate cupidatat in ullamco dolor dolor dolore anim sit cupidatat esse. Velit
                    tempor quis Lorem voluptate anim consequat cupidatat nostrud dolor culpa. Id laboris velit pariatur
                    et quis labore incididunt adipisicing. Laboris fugiat velit esse fugiat nisi irure sit anim minim
                    anim ipsum nostrud duis ullamco. Consectetur duis veniam tempor proident consectetur qui cupidatat
                    sint cillum laboris nisi laboris excepteur exercitation.
                </p>
                <p>Sunt laboris id magna irure pariatur tempor nostrud Lorem sunt anim duis esse fugiat. Cillum sunt
                    reprehenderit consequat tempor dolor duis dolor aliqua mollit ea. Cillum ea exercitation laborum
                    elit ad ipsum incididunt Lorem amet eiusmod consequat sunt. Id consequat exercitation mollit aute
                    fugiat mollit. Cupidatat sint cillum reprehenderit elit ex sint eu deserunt dolore culpa laborum.
                </p>
            </div>
        </div>
{{< /innerhtml >}}


## Extraits de code

### Code HTML

```html
<div class="tabs">
            <h3>Liste d'onglets activables au clavier</h3>
            <div role="tablist" aria-labelledby="tablist-1" class="manual">
                <button id="tab-1" type="button" role="tab" aria-selected="true" aria-controls="tabpanel-1">
                    <span>Premier onglet</span>
                </button>
                <button id="tab-2" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-2" tabindex="-1">
                    <span>Deuxième onglet</span>
                </button>
                <button id="tab-3" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-3" tabindex="-1">
                    <span>Troisième onglet</span>
                </button>
                <button id="tab-4" type="button" role="tab" aria-selected="false" aria-controls="tabpanel-4" tabindex="-1">
                    <span>Quatrième onglet</span>
                </button>
            </div>
            <div id="tabpanel-1" role="tabpanel" aria-labelledby="tab-1">
                <p>
                    Sunt veniam ad reprehenderit exercitation non dolore exercitation labore deserunt laboris deserunt.
                    Amet irure nulla eu nisi esse. Voluptate incididunt in Lorem cillum ut dolore enim qui magna. Dolore
                    reprehenderit enim amet eu magna duis.
                </p>
                <p>
                    Aute dolore culpa minim id in est dolore officia enim adipisicing. Elit deserunt reprehenderit
                    dolore aute duis ex. Culpa tempor esse non nostrud fugiat nisi deserunt magna amet.
                </p>
                <p>Commodo ex id non consectetur laboris excepteur reprehenderit excepteur in velit veniam ex culpa.
                    Occaecat excepteur in magna tempor. Et exercitation incididunt culpa reprehenderit irure.</p>
            </div>
            <div id="tabpanel-2" role="tabpanel" aria-labelledby="tab-2" class="is-hidden">
                <p>
                    Laboris esse id id consequat cillum eiusmod esse dolore. Dolor non ullamco aliqua cupidatat fugiat
                    non. Amet enim aliquip veniam cillum consequat reprehenderit pariatur velit magna consectetur
                    ullamco fugiat deserunt. Aliquip in pariatur veniam eiusmod magna laboris deserunt ea adipisicing
                    proident laborum. Eiusmod consequat esse occaecat mollit. Commodo quis ea aute aliquip.
                </p>
                <p>Excepteur pariatur ut velit in do occaecat consectetur adipisicing labore ex. Reprehenderit qui non
                    ipsum irure exercitation magna amet pariatur consectetur pariatur tempor ut ex. Sint dolore sit
                    dolore ut eu sit dolor irure adipisicing pariatur elit dolore aliqua adipisicing. Non veniam magna
                    eu irure ad non qui labore reprehenderit est. Occaecat veniam consequat velit Lorem ad aliqua
                    excepteur labore mollit in.</p>
            </div>
            <div id="tabpanel-3" role="tabpanel" aria-labelledby="tab-3" class="is-hidden">
                <p>
                    Ad laborum est minim est anim ea nisi sit. Duis fugiat mollit labore culpa duis. Sint Lorem mollit
                    non ut sit reprehenderit proident cupidatat.
                </p>
                <p>Excepteur pariatur irure nulla anim laboris. Labore anim cupidatat veniam adipisicing cupidatat.
                    Laboris ad culpa laboris culpa dolore nostrud laboris est. Eu ipsum laborum magna irure duis et in
                    nulla et in velit est ut.</p>
            </div>
            <div id="tabpanel-4" role="tabpanel" aria-labelledby="tab-4" class="is-hidden">
                <p>
                    Quis quis ut duis voluptate cupidatat in ullamco dolor dolor dolore anim sit cupidatat esse. Velit
                    tempor quis Lorem voluptate anim consequat cupidatat nostrud dolor culpa. Id laboris velit pariatur
                    et quis labore incididunt adipisicing. Laboris fugiat velit esse fugiat nisi irure sit anim minim
                    anim ipsum nostrud duis ullamco. Consectetur duis veniam tempor proident consectetur qui cupidatat
                    sint cillum laboris nisi laboris excepteur exercitation.
                </p>
                <p>Sunt laboris id magna irure pariatur tempor nostrud Lorem sunt anim duis esse fugiat. Cillum sunt
                    reprehenderit consequat tempor dolor duis dolor aliqua mollit ea. Cillum ea exercitation laborum
                    elit ad ipsum incididunt Lorem amet eiusmod consequat sunt. Id consequat exercitation mollit aute
                    fugiat mollit. Cupidatat sint cillum reprehenderit elit ex sint eu deserunt dolore culpa laborum.
                </p>
            </div>
        </div>
```


### Code CSS

Pour adapter la couleur de la barre de navigation et des liens, modifier les codes couleurs dans la déclaration `:root`.

```css
:root {
    --min-width: 640px;
    --max-height: 640px;
    --items-padding: 5px;
    --text-padding: 1em;

    --border-color: #b7b7b8;
    --background-color: #edeff3;
    --background-selected-color: #fbfcfe;
    --border-selected-color: #C83737;
}

.tabs {
    font-family: Arial, Helvetica, sans-serif;
}

[role="tablist"] {
    min-width: var(--min-width);
}

[role="tab"],
[role="tab"]:focus,
[role="tab"]:hover {
    position: relative;
    z-index: 2;
    top: 2px;
    margin: 0;
    margin-top: 5px;
    padding: 5px;
    border: 1px solid var(--border-color);
    border-bottom: 2px solid var(--border-color);
    border-radius: 5px 5px 0 0;
    overflow: visible;
    background: var(--background-color);
    outline: none;
    font-weight: bold;
}

[role="tab"]:focus,
[role="tab"]:hover {
    border-top-color: var(--border-selected-color);
    border-bottom-color: var(--background-selected-color);
    background: var(--background-selected-color);
    box-shadow: inset 0 .25em .15em var(--border-selected-color);
}

[role="tab"][aria-selected="true"] {
    padding: 2px 2px 4px;
    margin-top: 0;
    border-width: 2px;
    border-top-width: 6px;
    border-top-color: var(--border-selected-color);
    border-bottom-color: var(--background-selected-color);
    background: var(--background-selected-color);
}

[role="tab"][aria-selected="false"] {
    border-bottom: 1px solid var(--border-color);
}

[role="tab"] span {
    display: inline-block;
    margin: 2px;
    padding: 4px 6px;
}

[role="tabpanel"] {
    padding: var(--text-padding);
    border: 2px solid var(--border-color);
    border-radius: 0 5px 5px;
    background: var(--background-selected-color);
    min-height: 10em;
    min-width: 550px;
    overflow: auto;
}

[role="tabpanel"].is-hidden {
    display: none;
}

[role="tabpanel"] p {
    margin: 0;
}
```


### Code javascript

```javascript

"use strict";

class TabsManual {
  constructor(groupNode) {
    this.tablistNode = groupNode;

    this.tabs = [];

    this.firstTab = null;
    this.lastTab = null;

    this.tabs = Array.from(this.tablistNode.querySelectorAll("[role=tab]"));
    this.tabpanels = [];

    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      var tabpanel = document.getElementById(tab.getAttribute("aria-controls"));

      tab.tabIndex = -1;
      tab.setAttribute("aria-selected", "false");
      this.tabpanels.push(tabpanel);

      tab.addEventListener("keydown", this.onKeydown.bind(this));
      tab.addEventListener("click", this.onClick.bind(this));

      if (!this.firstTab) {
        this.firstTab = tab;
      }
      this.lastTab = tab;
    }

    this.setSelectedTab(this.firstTab);
  }

  setSelectedTab(currentTab) {
    for (var i = 0; i < this.tabs.length; i += 1) {
      var tab = this.tabs[i];
      if (currentTab === tab) {
        tab.setAttribute("aria-selected", "true");
        tab.removeAttribute("tabindex");
        this.tabpanels[i].classList.remove("is-hidden");
      } else {
        tab.setAttribute("aria-selected", "false");
        tab.tabIndex = -1;
        this.tabpanels[i].classList.add("is-hidden");
      }
    }
  }

  moveFocusToTab(currentTab) {
    currentTab.focus();
  }

  moveFocusToPreviousTab(currentTab) {
    var index;

    if (currentTab === this.firstTab) {
      this.moveFocusToTab(this.lastTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index - 1]);
    }
  }

  moveFocusToNextTab(currentTab) {
    var index;

    if (currentTab === this.lastTab) {
      this.moveFocusToTab(this.firstTab);
    } else {
      index = this.tabs.indexOf(currentTab);
      this.moveFocusToTab(this.tabs[index + 1]);
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    var tgt = event.currentTarget,
      flag = false;

    switch (event.key) {
      case "ArrowLeft":
        this.moveFocusToPreviousTab(tgt);
        flag = true;
        break;

      case "ArrowRight":
        this.moveFocusToNextTab(tgt);
        flag = true;
        break;

      case "Home":
        this.moveFocusToTab(this.firstTab);
        flag = true;
        break;

      case "End":
        this.moveFocusToTab(this.lastTab);
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  // Since this example uses buttons for the tabs, the click onr also is activated
  // with the space and enter keys
  onClick(event) {
    this.setSelectedTab(event.currentTarget);
  }
}

// Initialize tablist

window.addEventListener("load", function () {
  var tablists = document.querySelectorAll("[role=tablist].manual");
  for (var i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
});


```