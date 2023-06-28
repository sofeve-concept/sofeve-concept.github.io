/********************************************************************
 * Fonction menu hamburger
 ********************************************************************/

function hamburger() {
  var hamb = document.getElementById("hamburger");
  let state = hamb.getAttribute("aria-expanded");
  state === "false"
    ? hamb.setAttribute("aria-expanded", "true")
    : hamb.setAttribute("aria-expanded", "false");
}


function gestionMenuHamburger() {

  var theLinks = document.querySelectorAll('.navbar li');
  for (i = 0; i < theLinks.length; i++) {
    // apparition/disparition du menu hamburger au clic sur lien
    theLinks[i].addEventListener('click', function (e) {
      document.getElementById("hamburger").setAttribute('aria-expanded', false);
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
      document.getElementById("hamburger").setAttribute('aria-expanded', false);
    }
  };

}
gestionMenuHamburger()

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
    // Remplace le mot « rond » par un point
    sC = sC.replace("rond", ".");
    // Remplacer le mot « chez » par @
    sC = sC.replace("chez", "@");
    // Ajouter l'attribut « href » avec l'adresse
    oC[i].setAttribute("href", "mailto:" + sC);
    // Ajouter l'adresse comme texte du lien
    oC[i].innerHTML = sC;
  }
});


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

