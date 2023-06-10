/**
 * Fonction pour afficher le sous-menu au clic de souris 
 * inspiré de : https://www.w3schools.com/howto/howto_js_dropdown.asp
 */


function hamburger() {
  var hamb = document.getElementById("hamburger");
  hamb.addEventListener('click', function (e) {
    let state = hamb.getAttribute('aria-expanded');
    state === 'false' ? hamb.setAttribute('aria-expanded', 'true') : hamb.setAttribute('aria-expanded', 'false');
  });
}

hamburger();

function sandwitch() {
  var hamb = document.getElementById("sandwitch");
  hamb.addEventListener('click', function (e) {
    let state = hamb.getAttribute('aria-expanded');
    state === 'false' ? hamb.setAttribute('aria-expanded', 'true') : hamb.setAttribute('aria-expanded', 'false');
  });
}


function menuEtSousMenuDeroulant() {

  var theButtons = document.querySelectorAll('.navbar button[aria-expanded]:not(#hamburger)');

  for (i = 0; i < theButtons.length; i++) {

    // apparition/disparition du sous-menu au clic
    theButtons[i].addEventListener('click', function (e) {
      var thisButton = e.target;
      for (j = 0; j < theButtons.length; j++) {
        if (thisButton !== theButtons[j])
          theButtons[j].setAttribute('aria-expanded', 'false')
      }
      var stateButton = thisButton.getAttribute('aria-expanded') === 'false' ? true : false;
      thisButton.setAttribute('aria-expanded', stateButton);
    });

    // disparition des sous-menu quand changement de focus sur bouton
    theButtons[i].addEventListener('focus', function (e) {
      var thisButton = e.target;
      for (j = 0; j < theButtons.length; j++) {
        if (thisButton !== theButtons[j])
          theButtons[j].setAttribute('aria-expanded', 'false')
      }
    });
  }

  // disparition du sous-menu et focus sur le bouton correspondant au sous-menu
  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEchap = false;
    if ("key" in evt) {
      isEchap = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEchap = (evt.keyCode === 27);
    }
    if (isEchap) {
      for (j = 0; j < theButtons.length; j++) {
        if (theButtons[j].getAttribute('aria-expanded') === 'true') {
          theButtons[j].setAttribute('aria-expanded', 'false');
          theButtons[j].focus()
        }
      }
    }
  };

}
menuEtSousMenuDeroulant()


// Fermeture de tous les sous-menus via clic dans le body
function fermerMenuViaClicBody(event) {
  var theButtons = document.querySelectorAll('.navbar button[aria-expanded]');
  if (!event.target.matches('.navbar button[aria-expanded]')) {
    for (i = 0; i < theButtons.length; i++) {
      theButtons[i].setAttribute('aria-expanded', 'false');
    }
  }
}

document.body.addEventListener('click', fermerMenuViaClicBody, false);



/********************************************************************
 * Fonction pour activer/désactiver le menu haut
 * et faire apparaître/disparaître le bouton de retour en haut de page
 ********************************************************************/
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav.navbar ul li");
  window.onscroll = () => {
    document.getElementById("RetourEnHaut").className =
      window.pageYOffset > 100 ? "cVisible" : "cInvisible";
    var current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };
});


/************************************* PORTFOLIO - FILTRE ***********************************/

// filterSelection("all")
//    function filterSelection(c) {
//      var x, i;
//      x = document.getElementsByClassName("vignette");
//      if (c == "all") c = "";
//      for (i = 0; i < x.length; i++) {
//        filtreRemoveClass(x[i], "show");
//        if (x[i].className.indexOf(c) > -1) filtreAddClass(x[i], "show");
//      }
//    }
   
//    function filtreAddClass(element, name) {
//      var i, arr1, arr2;
//      arr1 = element.className.split(" ");
//      arr2 = name.split(" ");
//      for (i = 0; i < arr2.length; i++) {
//        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//      }
//    }
   
//    function filtreRemoveClass(element, name) {
//      var i, arr1, arr2;
//      arr1 = element.className.split(" ");
//      arr2 = name.split(" ");
//      for (i = 0; i < arr2.length; i++) {
//        while (arr1.indexOf(arr2[i]) > -1) {
//          arr1.splice(arr1.indexOf(arr2[i]), 1);     
//        }
//      }
//      element.className = arr1.join(" ");
//    }
   
   
//    // Add active class to the current button (highlight it)
//    var btnContainer = document.getElementById("myFilter");
//    var btns = btnContainer.getElementsByClassName("btn-outline");
//    for (var i = 0; i < btns.length; i++) {
//      btns[i].addEventListener("click", function(){
//        var current = document.getElementsByClassName("active");
//        current[0].className = current[0].className.replace(" active", "");
//        this.className += " active";
//      });
//    }

/************************************* DIALOG ***********************************/
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

window.addEventListener('click', (event) => {
  var dialog = document.querySelector('.dialog_layer')
  if (event.target === dialog) {
    close(dialog);
  }
});


// Fermeture de tous les sous-menus via clic dans le body
function fermerDialogViaClicBody(event) {
  var dialog = document.querySelectorAll('.dialog_layer');
  if (!event.target.matches('.dialog_layer')) {
    close(dialog)
  }
}

document.body.addEventListener('click', fermerMenuViaClicBody, false);