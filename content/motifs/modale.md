---
title: "Fenêtre modale"
description: "Extrait de code pour une fenêtre modale accessible au clavier."
ico: "fas fa-window-maximize"
custom_css: "modale"
custom_js: "modale"
tags: ["HTML", "CSS", "JS"]
---

## Visuel

{{< innerhtml >}}
<button type="button" onclick="openDialog('dialog1', this)">Ouvrir la fenêtre modale</button>
<!-- La fenêtre Modale -->
    <div role="dialog"
         id="dialog1"
         aria-labelledby="dialog1_label"
         aria-modal="true"
         class="none">
         <div class="dialog-header">
      <h1 id="dialog1_label">Titre de la fenêtre modale</h1>
      <button type="button" aria-label="Fermer" title="Fermer la fenêtre modale" onclick="closeDialog(this)">&times;</button>
    </div>
      <div class="dialog-body">
        <p>Labore sit invidunt amet sit sanctus justo tempor sea amet, accusam nonumy et et nonumy aliquyam dolor ipsum vero duo.</p>
    <p>Erat clita accusam sed nonumy, sadipscing no labore sadipscing accusam. Ut diam ea dolor consetetur sed et dolor magna. </p><p>Sit rebum amet et kasd no consetetur no. Et et amet labore ea eos ea no gubergren ipsum, dolores diam invidunt aliquyam erat, et sit sea diam diam gubergren tempor. Erat stet sit dolore et voluptua erat ipsum consetetur. Vero eos.</p>
      </div>
      <div class="dialog-footer">
        <button type="button" onclick="closeDialog(this)">Fermer</button>
      </div>
    </div>
{{< /innerhtml >}}


## Extraits de code

### Code HTML

```html         
<button type="button" onclick="openDialog('dialog1', this)">Ouvrir la fenêtre modale</button>
<!-- La fenêtre Modale -->
    <div role="dialog"
         id="dialog1"
         aria-labelledby="dialog1_label"
         aria-modal="true"
         class="none">
         <div class="dialog-header">
      <h1 id="dialog1_label">Titre de la fenêtre modale</h1>
      <button type="button" aria-label="Fermer" title="Fermer la fenêtre modale" onclick="closeDialog(this)">&times;</button>
    </div>
      <div class="dialog-body">
        <p>Labore sit invidunt amet sit sanctus justo tempor sea amet, accusam nonumy et et nonumy aliquyam dolor ipsum vero duo.</p>
    <p>Erat clita accusam sed nonumy, sadipscing no labore sadipscing accusam. Ut diam ea dolor consetetur sed et dolor magna. </p><p>Sit rebum amet et kasd no consetetur no. Et et amet labore ea eos ea no gubergren ipsum, dolores diam invidunt aliquyam erat, et sit sea diam diam gubergren tempor. Erat stet sit dolore et voluptua erat ipsum consetetur. Vero eos.</p>
      </div>
      <div class="dialog-footer">
        <button type="button" onclick="closeDialog(this)">Fermer</button>
      </div>
    </div>
```


### Code CSS

Pour adapter les couleurs, modifier les codes couleurs dans la déclaration `:root`.

```css
/** Modale **/
:root {
    --BORDER-color: #b0aeae;
    --BACKGROUND-color: #FFFFFF;
    --BODY-FADE-color: rgba(0, 0, 0, 0.5);
    --BOX-SHADOW: 0 19px 38px rgba(0, 0, 0, 0.12), 0 15px 12px rgba(0, 0, 0, 0.22);
    --FOCUS-color: #252d91;
}
.none {
    display: none;
}
[role="alertdialog"],
[role="dialog"] {
    box-sizing: border-box;
    padding: 1em;
    border: 1px solid var(--BORDER-color);
    background-color: var(--BACKGROUND-color);
    min-height: 100vh;
    z-index: 1030;
}
[role="dialog"] *:focus {
    outline: 3px solid var(--FOCUS-color);
}
@media screen and (min-width: 640px) {
    [role="alertdialog"],
    [role="dialog"] {
        position: absolute;
        top: 6rem;
        left: 50vw; /* move to the middle of the screen (assumes relative parent is the body/viewport) */
        transform: translateX(-50%); /* move backwards 50% of this element's width */
        min-width: calc(640px - (15px * 2)); /* == breakpoint - left+right margin */
        min-height: auto;
        box-shadow: var(-BOX-SHADOW);
    }
}
.dialog-header {
    border-bottom: 1px solid var(--BORDER-color);
    padding-bottom: 1.5em;
}

.dialog-header h1 {
    font-size: 1.5em;
    margin: 0;
}
.dialog-header button {
    float: right;
    position: absolute;
    top: 1.2em;
    right: 2%;
    padding: 0.5em;
}

.dialog-body {
    padding: 1.5em 0.5em;
}
.dialog-footer button {
    float: right;
    padding: 0.5em;
}
/* native <dialog> element uses the ::backdrop pseudo-element */
/* dialog::backdrop, */
.dialog-backdrop {
    display: none;
    position: fixed;
    overflow-y: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}

@media screen and (min-width: 640px) {
    .dialog-backdrop {
        background: var(--BODY-FADE-color);
    }
}
.dialog-backdrop.active {
    display: block;
}
.no-scroll {
    overflow-y: auto !important;
}
/* this is added to the body when a dialog is open */
.has-dialog {
    overflow: hidden;
}

```


### Code javascript

```javascript
/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 */

'use strict';

var aria = aria || {};

aria.Utils = aria.Utils || {};

(function () {
  /*
   * When util functions move focus around, set this true so the focus listener
   * can ignore the events.
   */
  aria.Utils.IgnoreUtilFocusChanges = false;

  aria.Utils.dialogOpenClass = 'has-dialog';

  /**
   * @description Set focus on descendant nodes until the first focusable element is
   *       found.
   * @param element
   *          DOM node for which to find the first focusable descendant.
   * @returns {boolean}
   *  true if a focusable element is found and focus is set.
   */
  aria.Utils.focusFirstDescendant = function (element) {
    for (var i = 0; i < element.childNodes.length; i++) {
      var child = element.childNodes[i];
      if (
        aria.Utils.attemptFocus(child) ||
        aria.Utils.focusFirstDescendant(child)
      ) {
        return true;
      }
    }
    return false;
  }; // end focusFirstDescendant

  /**
   * @description Find the last descendant node that is focusable.
   * @param element
   *          DOM node for which to find the last focusable descendant.
   * @returns {boolean}
   *  true if a focusable element is found and focus is set.
   */
  aria.Utils.focusLastDescendant = function (element) {
    for (var i = element.childNodes.length - 1; i >= 0; i--) {
      var child = element.childNodes[i];
      if (
        aria.Utils.attemptFocus(child) ||
        aria.Utils.focusLastDescendant(child)
      ) {
        return true;
      }
    }
    return false;
  }; // end focusLastDescendant

  /**
   * @description Set Attempt to set focus on the current node.
   * @param element
   *          The node to attempt to focus on.
   * @returns {boolean}
   *  true if element is focused.
   */
  aria.Utils.attemptFocus = function (element) {
    if (!aria.Utils.isFocusable(element)) {
      return false;
    }

    aria.Utils.IgnoreUtilFocusChanges = true;
    try {
      element.focus();
    } catch (e) {
      // continue regardless of error
    }
    aria.Utils.IgnoreUtilFocusChanges = false;
    return document.activeElement === element;
  }; // end attemptFocus

  /* Modals can open modals. Keep track of them with this array. */
  aria.OpenDialogList = aria.OpenDialogList || new Array(0);

  /**
   * @returns {object} the last opened dialog (the current dialog)
   */
  aria.getCurrentDialog = function () {
    if (aria.OpenDialogList && aria.OpenDialogList.length) {
      return aria.OpenDialogList[aria.OpenDialogList.length - 1];
    }
  };

  aria.closeCurrentDialog = function () {
    var currentDialog = aria.getCurrentDialog();
    if (currentDialog) {
      currentDialog.close();
      return true;
    }

    return false;
  };

  aria.handleEscape = function (event) {
    var key = event.which || event.keyCode;

    if (key === aria.KeyCode.ESC && aria.closeCurrentDialog()) {
      event.stopPropagation();
    }
  };

  document.addEventListener('keyup', aria.handleEscape);

  /**
   * @class
   * @description Dialog object providing modal focus management.
   *
   * Assumptions: The element serving as the dialog container is present in the
   * DOM and hidden. The dialog container has role='dialog'.
   *
   * @param dialogId
   *          The ID of the element serving as the dialog container.
   * @param focusAfterClosed
   *          Either the DOM node or the ID of the DOM node to focus when the
   *          dialog closes.
   * @param focusFirst
   *          Optional parameter containing either the DOM node or the ID of the
   *          DOM node to focus when the dialog opens. If not specified, the
   *          first focusable element in the dialog will receive focus.
   */
  aria.Dialog = function (dialogId, focusAfterClosed, focusFirst) {
    this.dialogNode = document.getElementById(dialogId);
    if (this.dialogNode === null) {
      throw new Error('No element found with id="' + dialogId + '".');
    }

    var validRoles = ['dialog', 'alertdialog'];
    var isDialog = (this.dialogNode.getAttribute('role') || '')
      .trim()
      .split(/\s+/g)
      .some(function (token) {
        return validRoles.some(function (role) {
          return token === role;
        });
      });
    if (!isDialog) {
      throw new Error(
        'Dialog() requires a DOM element with ARIA role of dialog or alertdialog.'
      );
    }

    // Wrap in an individual backdrop element if one doesn't exist
    // Native <dialog> elements use the ::backdrop pseudo-element, which
    // works similarly.
    var backdropClass = 'dialog-backdrop';
    if (this.dialogNode.parentNode.classList.contains(backdropClass)) {
      this.backdropNode = this.dialogNode.parentNode;
    } else {
      this.backdropNode = document.createElement('div');
      this.backdropNode.className = backdropClass;
      this.dialogNode.parentNode.insertBefore(
        this.backdropNode,
        this.dialogNode
      );
      this.backdropNode.appendChild(this.dialogNode);
    }
    this.backdropNode.classList.add('active');

    // Disable scroll on the body element
    document.body.classList.add(aria.Utils.dialogOpenClass);

    if (typeof focusAfterClosed === 'string') {
      this.focusAfterClosed = document.getElementById(focusAfterClosed);
    } else if (typeof focusAfterClosed === 'object') {
      this.focusAfterClosed = focusAfterClosed;
    } else {
      throw new Error(
        'the focusAfterClosed parameter is required for the aria.Dialog constructor.'
      );
    }

    if (typeof focusFirst === 'string') {
      this.focusFirst = document.getElementById(focusFirst);
    } else if (typeof focusFirst === 'object') {
      this.focusFirst = focusFirst;
    } else {
      this.focusFirst = null;
    }

    // Bracket the dialog node with two invisible, focusable nodes.
    // While this dialog is open, we use these to make sure that focus never
    // leaves the document even if dialogNode is the first or last node.
    var preDiv = document.createElement('div');
    this.preNode = this.dialogNode.parentNode.insertBefore(
      preDiv,
      this.dialogNode
    );
    this.preNode.tabIndex = 0;
    var postDiv = document.createElement('div');
    this.postNode = this.dialogNode.parentNode.insertBefore(
      postDiv,
      this.dialogNode.nextSibling
    );
    this.postNode.tabIndex = 0;

    // If this modal is opening on top of one that is already open,
    // get rid of the document focus listener of the open dialog.
    if (aria.OpenDialogList.length > 0) {
      aria.getCurrentDialog().removeListeners();
    }

    this.addListeners();
    aria.OpenDialogList.push(this);
    this.clearDialog();
    this.dialogNode.className = 'default_dialog'; // make visible

    if (this.focusFirst) {
      this.focusFirst.focus();
    } else {
      aria.Utils.focusFirstDescendant(this.dialogNode);
    }

    this.lastFocus = document.activeElement;
  }; // end Dialog constructor

  aria.Dialog.prototype.clearDialog = function () {
    Array.prototype.map.call(
      this.dialogNode.querySelectorAll('input'),
      function (input) {
        input.value = '';
      }
    );
  };

  /**
   * @description
   *  Hides the current top dialog,
   *  removes listeners of the top dialog,
   *  restore listeners of a parent dialog if one was open under the one that just closed,
   *  and sets focus on the element specified for focusAfterClosed.
   */
  aria.Dialog.prototype.close = function () {
    aria.OpenDialogList.pop();
    this.removeListeners();
    aria.Utils.remove(this.preNode);
    aria.Utils.remove(this.postNode);
    this.dialogNode.className = 'none';
    this.backdropNode.classList.remove('active');
    this.focusAfterClosed.focus();

    // If a dialog was open underneath this one, restore its listeners.
    if (aria.OpenDialogList.length > 0) {
      aria.getCurrentDialog().addListeners();
    } else {
      document.body.classList.remove(aria.Utils.dialogOpenClass);
    }
  }; // end close

  /**
   * @description
   *  Hides the current dialog and replaces it with another.
   *
   * @param newDialogId
   *  ID of the dialog that will replace the currently open top dialog.
   * @param newFocusAfterClosed
   *  Optional ID or DOM node specifying where to place focus when the new dialog closes.
   *  If not specified, focus will be placed on the element specified by the dialog being replaced.
   * @param newFocusFirst
   *  Optional ID or DOM node specifying where to place focus in the new dialog when it opens.
   *  If not specified, the first focusable element will receive focus.
   */
  aria.Dialog.prototype.replace = function (
    newDialogId,
    newFocusAfterClosed,
    newFocusFirst
  ) {
    aria.OpenDialogList.pop();
    this.removeListeners();
    aria.Utils.remove(this.preNode);
    aria.Utils.remove(this.postNode);
    this.dialogNode.className = 'hidden';
    this.backdropNode.classList.remove('active');

    var focusAfterClosed = newFocusAfterClosed || this.focusAfterClosed;
    new aria.Dialog(newDialogId, focusAfterClosed, newFocusFirst);
  }; // end replace

  aria.Dialog.prototype.addListeners = function () {
    document.addEventListener('focus', this.trapFocus, true);
  }; // end addListeners

  aria.Dialog.prototype.removeListeners = function () {
    document.removeEventListener('focus', this.trapFocus, true);
  }; // end removeListeners

  aria.Dialog.prototype.trapFocus = function (event) {
    if (aria.Utils.IgnoreUtilFocusChanges) {
      return;
    }
    var currentDialog = aria.getCurrentDialog();
    if (currentDialog.dialogNode.contains(event.target)) {
      currentDialog.lastFocus = event.target;
    } else {
      aria.Utils.focusFirstDescendant(currentDialog.dialogNode);
      if (currentDialog.lastFocus == document.activeElement) {
        aria.Utils.focusLastDescendant(currentDialog.dialogNode);
      }
      currentDialog.lastFocus = document.activeElement;
    }
  }; // end trapFocus

  window.openDialog = function (dialogId, focusAfterClosed, focusFirst) {
    new aria.Dialog(dialogId, focusAfterClosed, focusFirst);
  };

  window.closeDialog = function (closeButton) {
    var topDialog = aria.getCurrentDialog();
    if (topDialog.dialogNode.contains(closeButton)) {
      topDialog.close();
    }
  }; // end closeDialog

  window.replaceDialog = function (
    newDialogId,
    newFocusAfterClosed,
    newFocusFirst
  ) {
    var topDialog = aria.getCurrentDialog();
    if (topDialog.dialogNode.contains(document.activeElement)) {
      topDialog.replace(newDialogId, newFocusAfterClosed, newFocusFirst);
    }
  }; // end replaceDialog
})();

```

**Vous aurez aussi besoin du fichier utils.js qui permet de gérer les actions au clavier et les rôles aria**

```javascript
'use strict';
/**
 * @namespace aria
 */

var aria = aria || {};

/**
 * @description
 *  Key code constants
 */
aria.KeyCode = {
  BACKSPACE: 8,
  TAB: 9,
  RETURN: 13,
  SHIFT: 16,
  ESC: 27,
  SPACE: 32,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  DELETE: 46,
};

aria.Utils = aria.Utils || {};

// Polyfill src https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
aria.Utils.matches = function (element, selector) {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = element.parentNode.querySelectorAll(s);
        var i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {
          // empty
        }
        return i > -1;
      };
  }

  return element.matches(selector);
};

aria.Utils.remove = function (item) {
  if (item.remove && typeof item.remove === 'function') {
    return item.remove();
  }
  if (
    item.parentNode &&
    item.parentNode.removeChild &&
    typeof item.parentNode.removeChild === 'function'
  ) {
    return item.parentNode.removeChild(item);
  }
  return false;
};

aria.Utils.isFocusable = function (element) {
  if (element.tabIndex < 0) {
    return false;
  }

  if (element.disabled) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return !!element.href && element.rel != 'ignore';
    case 'INPUT':
      return element.type != 'hidden';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
};

aria.Utils.getAncestorBySelector = function (element, selector) {
  if (!aria.Utils.matches(element, selector + ' ' + element.tagName)) {
    // Element is not inside an element that matches selector
    return null;
  }

  // Move up the DOM tree until a parent matching the selector is found
  var currentNode = element;
  var ancestor = null;
  while (ancestor === null) {
    if (aria.Utils.matches(currentNode.parentNode, selector)) {
      ancestor = currentNode.parentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return ancestor;
};

aria.Utils.hasClass = function (element, className) {
  return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
};

aria.Utils.addClass = function (element, className) {
  if (!aria.Utils.hasClass(element, className)) {
    element.className += ' ' + className;
  }
};

aria.Utils.removeClass = function (element, className) {
  var classRegex = new RegExp('(\\s|^)' + className + '(\\s|$)');
  element.className = element.className.replace(classRegex, ' ').trim();
};

aria.Utils.bindMethods = function (object /* , ...methodNames */) {
  var methodNames = Array.prototype.slice.call(arguments, 1);
  methodNames.forEach(function (method) {
    object[method] = object[method].bind(object);
  });
};



/*******************************************************
 * Protection du Courriel
 *******************************************************/
document.addEventListener("DOMContentLoaded", function () {
  // Boucle toute les classes .courriel
  var oC = document.getElementsByClassName("courriel");
  var i;
  for (i = 0; i < oC.length; i++) {
    // récupère l'adresse codée
    var sC = oC[i].getAttribute("data-courriel");
    // Remplace le mot « point » par un point
    sC = sC.replace("rond", ".");
    // Remplacer le mot « arobas » par @
    sC = sC.replace("chez", "@");
    // Ajouter l'attribut « href » avec l'adresse
    oC[i].setAttribute("href", "mailto:" + sC);
    // Ajouter l'adresse comme texte du lien
    oC[i].innerHTML = sC;
  }
});
```
