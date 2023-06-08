---
title: "Carrousel"
description: "Extrait de code pour un carrousel accessible au clavier."
ico: "fas fa-images"
custom_css: "carrousel"
custom_js: "carrousel"
tags: ["HTML", "CSS", "JS"]
---

## Visuel

{{< innerhtml >}}
<div id="myCarousel" class="carousel-tablist" aria-roledescription="carousel"
            aria-label="Exemple de carrousel">
            <div class="carousel-inner">
                <div class="controls">
                    <button class="rotation" type="button">
                        <svg width="42" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svg-play">
                            <rect class="background" x="2" y="2" rx="5" ry="5" width="38" height="24"></rect>
                            <rect class="border" x="4" y="4" rx="5" ry="5" width="34" height="20"></rect>
                            <polygon class="pause" points="17 8 17 20"></polygon>
                            <polygon class="pause" points="24 8 24 20"></polygon>
                            <polygon class="play" points="15 8 15 20 27 14"></polygon>
                        </svg>
                    </button>
                    <div class="tab-wrapper">
                        <div role="tablist" aria-label="Slides">
                            <button id="carousel-tab-1" type="button" role="tab" aria-label="Slide 1"
                                aria-selected="true" aria-controls="carousel-item-1">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                            <button id="carousel-tab-2" type="button" role="tab" tabindex="-1" aria-label="Slide 2"
                                aria-selected="false" aria-controls="carousel-item-2">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                            <button id="carousel-tab-3" type="button" role="tab" tabindex="-1" aria-label="Slide 3"
                                aria-selected="false" aria-controls="carousel-item-3">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                            <button id="carousel-tab-4" type="button" role="tab" tabindex="-1" aria-label="Slide 4"
                                aria-selected="false" aria-controls="carousel-item-4">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="myCarousel-items" class="carousel-items playing" aria-live="off">
                    <div class="carousel-item active" id="carousel-item-1" role="tabpanel" aria-roledescription="slide"
                        aria-label="1 sur 4">
                        <div class="carousel-image">
                            <a href="#" id="carousel-image-1">
                                <img src="/images/img1.png" alt="Image 1">
                            </a>
                        </div>
                        <div class="carousel-caption">
                            <h3>
                                <a href="#">
                                    Première image
                                </a>
                            </h3>
                            <div class="hidden-xs hidden-sm">
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" id="carousel-item-2" role="tabpanel" aria-roledescription="slide"
                        aria-label="2 sur 4">
                        <div class="carousel-image">
                            <a href="#" id="carousel-image-2">
                                <img src="/images/img2.png" alt="Image 2">
                            </a>
                        </div>
                        <div class="carousel-caption">
                           <h3>
                                <a href="#">
                                    Deuxième image
                                </a>
                            </h3>
                            <div>
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" id="carousel-item-3" role="tabpanel" aria-roledescription="slide"
                        aria-label="3 sur 4">
                        <div class="carousel-image">
                            <a href="#!" id="carousel-image-3">
                                <img src="/images/img3.png" alt="Image 3">
                            </a>
                        </div>
                        <div class="carousel-caption">
                            <h3>
                                <a href="#">
                                    Troisième image
                                </a>
                            </h3>
                            <div>
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" id="carousel-item-4" role="tabpanel" aria-roledescription="slide"
                        aria-label="4 sur 4">
                        <div class="carousel-image">
                            <a href="#" id="carousel-image-4">
                                <img src="/images/img4.png" alt="Image 4">
                            </a>
                        </div>
                      <div class="carousel-caption">
                            <h3>
                                <a href="#">
                                    Quatrième image
                                </a>
                            </h3>
                            <div>
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{{< /innerhtml >}}


## Extraits de code

### Code HTML

```html
<div id="myCarousel" class="carousel-tablist" aria-roledescription="carousel"
            aria-label="Exemple de carrousel">
            <div class="carousel-inner">
                <div class="controls">
                    <button class="rotation" type="button">
                        <svg width="42" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svg-play">
                            <rect class="background" x="2" y="2" rx="5" ry="5" width="38" height="24"></rect>
                            <rect class="border" x="4" y="4" rx="5" ry="5" width="34" height="20"></rect>
                            <polygon class="pause" points="17 8 17 20"></polygon>
                            <polygon class="pause" points="24 8 24 20"></polygon>
                            <polygon class="play" points="15 8 15 20 27 14"></polygon>
                        </svg>
                    </button>
                    <div class="tab-wrapper">
                        <div role="tablist" aria-label="Slides">
                            <button id="carousel-tab-1" type="button" role="tab" aria-label="Slide 1"
                                aria-selected="true" aria-controls="carousel-item-1">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                            <button id="carousel-tab-2" type="button" role="tab" tabindex="-1" aria-label="Slide 2"
                                aria-selected="false" aria-controls="carousel-item-2">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                            <button id="carousel-tab-3" type="button" role="tab" tabindex="-1" aria-label="Slide 3"
                                aria-selected="false" aria-controls="carousel-item-3">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                            <button id="carousel-tab-4" type="button" role="tab" tabindex="-1" aria-label="Slide 4"
                                aria-selected="false" aria-controls="carousel-item-4">
                                <svg width="34" height="34" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                    <circle class="border" cx="16" cy="15" r="10"></circle>
                                    <circle class="tab-background" cx="16" cy="15" r="8"></circle>
                                    <circle class="tab" cx="16" cy="15" r="6"></circle>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="myCarousel-items" class="carousel-items playing" aria-live="off">
                    <div class="carousel-item active" id="carousel-item-1" role="tabpanel" aria-roledescription="slide"
                        aria-label="1 sur 4">
                        <div class="carousel-image">
                            <a href="#" id="carousel-image-1">
                                <img src="/images/img1.png" alt="Image 1">
                            </a>
                        </div>
                        <div class="carousel-caption">
                            <h3>
                                <a href="#">
                                    Première image
                                </a>
                            </h3>
                            <div class="hidden-xs hidden-sm">
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" id="carousel-item-2" role="tabpanel" aria-roledescription="slide"
                        aria-label="2 sur 4">
                        <div class="carousel-image">
                            <a href="#" id="carousel-image-2">
                                <img src="/images/img2.png" alt="Image 2">
                            </a>
                        </div>
                        <div class="carousel-caption">
                           <h3>
                                <a href="#">
                                    Deuxième image
                                </a>
                            </h3>
                            <div>
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" id="carousel-item-3" role="tabpanel" aria-roledescription="slide"
                        aria-label="3 sur 4">
                        <div class="carousel-image">
                            <a href="#!" id="carousel-image-3">
                                <img src="/images/img3.png" alt="Image 3">
                            </a>
                        </div>
                        <div class="carousel-caption">
                            <h3>
                                <a href="#">
                                    Troisième image
                                </a>
                            </h3>
                            <div>
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" id="carousel-item-4" role="tabpanel" aria-roledescription="slide"
                        aria-label="4 sur 4">
                        <div class="carousel-image">
                            <a href="#" id="carousel-image-4">
                                <img src="/images/img4.png" alt="Image 4">
                            </a>
                        </div>
                      <div class="carousel-caption">
                            <h3>
                                <a href="#">
                                    Quatrième image
                                </a>
                            </h3>
                            <div>
                                <p><span class="contrast">lorem ipsum</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
```


### Code CSS

Pour adapter la couleur de la barre de navigation et des liens, modifier les codes couleurs dans la déclaration `:root`.

```css
:root {
    --max-width: 640px;
    --max-height: 640px;
    --items-padding: 5px;
    /** bordure autour des images du carrousel */
    --controls-position: 1em;
    --caption-position: 8%;
    --caption-marge-horizontale: 15%;
    --caption-margin-verticale: 1em;
    --caption-text-padding: .5em;
    --dark-color: #000;
    --dark-transparent-color: rgb(0 0 0 / 65%);
    --light-color: #FFF;
    --hover-color: #C83737;
}

/** pour afficher les boutons de contrôle en bas ;  mettre top au lieu de bottom pour les afficher en haut*/
.carousel-tablist .controls {
    bottom: var(--controls-position);
}

/** pour afficher le texte en haut ; mettre top au lieu de bottom pour positionner à partir du haut*/
.carousel-tablist .carousel-item .carousel-caption {
    bottom: var(--caption-position);
}

img.reload {
    padding: 0.25em;
    display: block-inline;
    position: relative;
    top: 6px;
    height: 0.9em;
}

.carousel-tablist {
    background-color: var(--dark-color);
    max-width: var(--max-width);
}

.carousel-tablist .carousel-inner {
    position: relative;
}

.carousel-tablist .carousel-items {
    padding: var(--items-padding);
}

.carousel-tablist .carousel-items.focus {
    padding: 2px;
    border: solid 3px var(--hover-color);
}

.carousel-tablist .carousel-item {
    display: none;
    max-height: var(--max-height);
    max-width: var(--max-width);
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-tablist .carousel-item.active {
    display: block;
}

/* More like bootstrap, less accessible */

.carousel-tablist .carousel-item .carousel-image a img {
    height: 100%;
    width: 100%;
}

.carousel-tablist .carousel-item .carousel-caption a {
    cursor: pointer;
    text-decoration: underline;
    color: var(--light-color);
    font-weight: 600;
}

.carousel-tablist .carousel-item .carousel-caption a,
.carousel-tablist .carousel-item .carousel-caption span.contrast {
    margin: 0;
    padding: var(--caption-text-padding);
    display: inline-block;
    background-color: var(--dark-transparent-color);
    border-radius: 5px;
    border: 0 solid transparent;
}

.carousel-tablist-moreaccessible .carousel-items .carousel-image a {
    display: block;
    margin: 0;
    padding: 0;
    text-decoration: none;
    border: none;
}

.carousel-tablist .carousel-item .carousel-caption {
    position: absolute;
    right: var(--caption-marge-horizontale);
    left: var(--caption-marge-horizontale);
    padding-top: var(--caption-margin-verticale);
    padding-bottom: var(--caption-margin-verticale);
    color: var(--light-color);
    text-align: center;
}

.carousel-tablist .carousel-item .carousel-caption p {
    font-size: 1em;
    line-height: 1.5;
    margin-bottom: 0;
}

.carousel-tablist-moreaccessible .carousel-item .carousel-caption a {
    display: inline-block;
    margin: 0;
    padding: var(--caption-text-padding);
    color: var(--dark-color);
    background-color: transparent;
    border: none;
    border-radius: 5px;
}

.carousel-tablist-moreaccessible .carousel-item .carousel-caption span.contrast,
.carousel-tablist-moreaccessible .carousel-item .carousel-caption span.contrast:hover {
    background-color: transparent;
}

.carousel-tablist .carousel-item .carousel-caption a:hover,
.carousel-tablist .carousel-item .carousel-caption span.contrast:hover {
    background-color: var(--dark-color);
}

.carousel-tablist .carousel-item .carousel-caption a:focus {
    padding: var(--caption-text-padding);
    border: 2px solid #eee;
    background-color: var(--dark-color);
    outline: none;
    border-width: 2px solid var(--light-color);
    color: var(--light-color);
}


/* Shared CSS for Pause and Tab Controls */

.carousel-tablist .controls {
    box-sizing: border-box;
    position: absolute;
    z-index: 10;
    display: flex;
    width: 100%;
    padding: 0.25em 1.25em 0;
}

.carousel-tablist .tab-wrapper {
    flex: 1 1 auto;
    height: 30px;
    text-align: center;
}

/* SVG Controls */

.carousel-tablist .rotation {
    flex: 0 0 auto;
    height: 30px;
    padding: 0;
    background-color: transparent;
    border: none;
    outline: none;
    z-index: 10;
}

.carousel-tablist .svg-play .background {
    stroke: var(--dark-color);
    fill: var(--dark-color);
    stroke-width: 1px;
    opacity: 0.6;
}

.carousel-tablist .svg-play .border {
    fill: transparent;
    stroke: transparent;
    stroke-width: 2px;
}

.carousel-tablist .svg-play .pause {
    stroke-width: 4;
    fill: transparent;
    stroke: transparent;
}

.carousel-tablist .svg-play .play {
    stroke-width: 1;
    fill: transparent;
    stroke: transparent;
}

.carousel-tablist .pause .svg-play .pause,
.carousel-tablist .play .svg-play .play {
    fill: var(--light-color);
    stroke: var(--light-color);
}

.carousel-tablist .rotation:focus .svg-play .background,
.carousel-tablist .rotation:hover .svg-play .background,
.carousel-tablist .rotation:hover .svg-play .border {
    fill: var(--hover-color);
    stroke: var(--hover-color);
    opacity: 1;
}

.carousel-tablist .rotation:focus .svg-play .border {
    stroke: var(--light-color);
}

/* Shared CSS for Tabs */

.carousel-tablist [role="tablist"] {
    box-sizing: border-box;
    border: 0 transparent solid;
    border-radius: 13px;
    display: inline-block;
    padding-top: 2px;
    height: 30px;
    background-color: var(--dark-transparent-color);
}

.carousel-tablist [role="tablist"].focus {
    border-width: 2px;
    border-color: var(--light-color);
    padding-top: 0;
    background-color: var(--hover-color);
}

.carousel-tablist [role="tab"] {
    position: relative;
    top: -2px;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    outline: none;
    width: 34px;
}

.carousel-tablist [role="tab"] circle.border {
    display: none;
    z-index: 12;
}

.carousel-tablist [role="tab"] circle.tab {
    z-index: 16;
}

.carousel-tablist [role="tab"] circle.tab-background {
    stroke: var(--dark-color);
    fill: var(--dark-color);
    stroke-width: 2px;
    opacity: 0.6;
    z-index: 14;
}

.carousel-tablist [role="tab"] circle.tab,
.carousel-tablist [role="tab"] circle.border {
    stroke: var(--light-color);
    fill: transparent;
    stroke-width: 2px;
}

.carousel-tablist-moreaccessible [role="tab"] circle.tab-background {
    z-index: 16;
}

.carousel-tablist-moreaccessible [role="tab"] circle.tab {
    z-index: 18;
}

.carousel-tablist [role="tab"][aria-selected="true"] circle.tab {
    fill: var(--light-color);
}

.carousel-tablist-moreaccessible [role="tab"] circle.border {
    z-index: 14;
}

.carousel-tablist [role="tab"]:focus circle.border {
    display: block;
    fill: var(--hover-color);
    stroke: var(--light-color);
}

.carousel-tablist [role="tablist"].focus circle.tab-background {
    stroke: var(--hover-color);
    fill: var(--hover-color);
}

.carousel-tablist [role="tab"]:hover circle.tab-background {
    fill: var(--light-color);
    stroke: var(--light-color);
    opacity: 1;
}

.carousel-tablist [role="tab"]:hover circle.border,
.carousel-tablist [role="tab"]:hover circle.tab {
    fill: var(--hover-color);
    stroke: var(--hover-color);
    opacity: 1;
}

.carousel-tablist [role="tab"][aria-selected="true"]:hover circle.tab {
    fill: var(--light-color);
}

/* More accessible carousel styles, with caption and controls above/below image */

.carousel-tablist-moreaccessible {
    padding: 0;
    margin: 0;
    position: relative;
    border: #eee solid 4px;
    border-radius: 5px;
}

.carousel-tablist-moreaccessible .carousel-items,
.carousel-tablist-moreaccessible .carousel-items.focus {
    padding: 0;
    border: none;
}

.carousel-tablist-moreaccessible .carousel-items.focus .carousel-image a {
    padding: 2px;
    border: 3px solid var(--hover-color);
}

/* More accessible caption styling */

.carousel-tablist-moreaccessible .carousel-item {
    padding: 0;
    margin: 0;
    max-height: none;
}

.carousel-tablist-moreaccessible .carousel-item .carousel-caption {
    position: static;
    padding: 0;
    margin: 0;
    height: 60px;
    color: var(--dark-color);
}

.carousel-tablist-moreaccessible .carousel-item .carousel-caption p {
    padding: 0;
    margin: 0;
}

.carousel-tablist-moreaccessible .carousel-item .carousel-caption h3 {
    font-size: 1.1em;
    padding: 0;
    margin: 0;
}

.carousel-tablist-moreaccessible .carousel-item .carousel-caption a:hover {
    background-color: rgb(0 0 0 / 20%);
}

.carousel-tablist-moreaccessible .carousel-item .carousel-caption a:focus {
    padding: 4px;
    border: 2px solid var(--hover-color);
    background-color: transparent;
    color: var(--dark-color);
    outline: none;
}

/* Shared CSS for Pause and Tab Controls */

.carousel-tablist-moreaccessible .controls {
    position: relative;
    top: 0;
    left: 0;
    padding: 0.25em 0.25em 0;
}

/* Shared CSS for Tabs */

.carousel-tablist-moreaccessible [role="tab"] {
    z-index: 20;
}
```


### Code javascript

```javascript
/*
 *   File:   carousel-tablist.js
 *
 *   Desc:   Carousel Tablist widget that implements ARIA Authoring Practices
 *
 */

"use strict";

// takes options object: { accessibleCaptions: boolean, autoplay: boolean, playButton: boolean }
// defaults are: { accessibleCaptions: true, autoplay: false, playButton: true }

var CarouselTablist = function (node, options) {
  // merge passed options with defaults
  options = Object.assign(
    { moreaccessible: false, paused: false, norotate: false },
    options || {}
  );

  // a prefers-reduced-motion user setting must always override autoplay
  var hasReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (hasReducedMotion.matches) {
    options.paused = true;
  }

  /* DOM properties */
  this.domNode = node;

  this.tablistNode = node.querySelector("[role=tablist]");
  this.containerNode = node.querySelector(".carousel-items");

  this.tabNodes = [];
  this.tabpanelNodes = [];

  this.liveRegionNode = node.querySelector(".carousel-items");
  this.pausePlayButtonNode = document.querySelector(
    ".carousel-tablist .controls button.rotation"
  );

  this.playLabel = "Lecture automatique";
  this.pauseLabel = "Arrêt du défilement automatique";

  /* State properties */
  this.hasUserActivatedPlay = false; // set when the user activates the play/pause button
  this.isAutoRotationDisabled = options.norotate; // This property for disabling auto rotation
  this.isPlayingEnabled = !options.paused; // This property is also set in updatePlaying method
  this.timeInterval = 5000; // length of slide rotation in ms
  this.currentIndex = 0; // index of current slide
  this.slideTimeout = null; // save reference to setTimeout

  // initialize tabs
  this.tablistNode.addEventListener("focusin", this.handleTabFocus.bind(this));
  this.tablistNode.addEventListener("focusout", this.handleTabBlur.bind(this));

  var nodes = node.querySelectorAll('[role="tab"]');

  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];

    this.tabNodes.push(n);

    n.addEventListener("keydown", this.handleTabKeydown.bind(this));
    n.addEventListener("click", this.handleTabClick.bind(this));

    // initialize tabpanels

    var tabpanelNode = document.getElementById(n.getAttribute("aria-controls"));

    if (tabpanelNode) {
      this.tabpanelNodes.push(tabpanelNode);

      // support stopping rotation when any element receives focus in the tabpanel
      tabpanelNode.addEventListener(
        "focusin",
        this.handleTabpanelFocusIn.bind(this)
      );
      tabpanelNode.addEventListener(
        "focusout",
        this.handleTabpanelFocusOut.bind(this)
      );

      var imageLink = tabpanelNode.querySelector(".carousel-image a");

      if (imageLink) {
        imageLink.addEventListener(
          "focus",
          this.handleImageLinkFocus.bind(this)
        );
        imageLink.addEventListener("blur", this.handleImageLinkBlur.bind(this));
      }
    } else {
      this.tabpanelNodes.push(null);
    }
  }

  // Pause Button
  if (this.pausePlayButtonNode) {
    this.pausePlayButtonNode.addEventListener(
      "click",
      this.handlePausePlayButtonClick.bind(this)
    );
  }

  // Handle hover events
  this.domNode.addEventListener("mouseover", this.handleMouseOver.bind(this));
  this.domNode.addEventListener("mouseout", this.handleMouseOut.bind(this));

  // initialize behavior based on options

  this.enableOrDisableAutoRotation(options.norotate);
  this.updatePlaying(!options.paused && !options.norotate);
  this.setAccessibleStyling(options.moreaccessible);
  this.rotateSlides();
};

/* Public function to disable/enable rotation and if false, hide pause/play button*/
CarouselTablist.prototype.enableOrDisableAutoRotation = function (disable) {
  this.isAutoRotationDisabled = disable;
  this.pausePlayButtonNode.hidden = disable;
};

/* Public function to update controls/caption styling */
CarouselTablist.prototype.setAccessibleStyling = function (accessible) {
  if (accessible) {
    this.domNode.classList.add("carousel-tablist-moreaccessible");
  } else {
    this.domNode.classList.remove("carousel-tablist-moreaccessible");
  }
};

CarouselTablist.prototype.hideTabpanel = function (index) {
  var tabNode = this.tabNodes[index];
  var panelNode = this.tabpanelNodes[index];

  tabNode.setAttribute("aria-selected", "false");
  tabNode.setAttribute("tabindex", "-1");

  if (panelNode) {
    panelNode.classList.remove("active");
  }
};

CarouselTablist.prototype.showTabpanel = function (index, moveFocus) {
  var tabNode = this.tabNodes[index];
  var panelNode = this.tabpanelNodes[index];

  tabNode.setAttribute("aria-selected", "true");
  tabNode.removeAttribute("tabindex");

  if (panelNode) {
    panelNode.classList.add("active");
  }

  if (moveFocus) {
    tabNode.focus();
  }
};

CarouselTablist.prototype.setSelectedTab = function (index, moveFocus) {
  if (index === this.currentIndex) {
    return;
  }
  this.currentIndex = index;

  for (var i = 0; i < this.tabNodes.length; i++) {
    this.hideTabpanel(i);
  }

  this.showTabpanel(index, moveFocus);
};

CarouselTablist.prototype.setSelectedToPreviousTab = function (moveFocus) {
  var nextIndex = this.currentIndex - 1;

  if (nextIndex < 0) {
    nextIndex = this.tabNodes.length - 1;
  }

  this.setSelectedTab(nextIndex, moveFocus);
};

CarouselTablist.prototype.setSelectedToNextTab = function (moveFocus) {
  var nextIndex = this.currentIndex + 1;

  if (nextIndex >= this.tabNodes.length) {
    nextIndex = 0;
  }

  this.setSelectedTab(nextIndex, moveFocus);
};

CarouselTablist.prototype.rotateSlides = function () {
  if (!this.isAutoRotationDisabled) {
    if (
      (!this.hasFocus && !this.hasHover && this.isPlayingEnabled) ||
      this.hasUserActivatedPlay
    ) {
      this.setSelectedToNextTab(false);
    }
  }

  this.slideTimeout = setTimeout(
    this.rotateSlides.bind(this),
    this.timeInterval
  );
};

CarouselTablist.prototype.updatePlaying = function (play) {
  this.isPlayingEnabled = play;

  if (play) {
    this.pausePlayButtonNode.setAttribute("aria-label", this.pauseLabel);
    this.pausePlayButtonNode.classList.remove("play");
    this.pausePlayButtonNode.classList.add("pause");
    this.liveRegionNode.setAttribute("aria-live", "off");
  } else {
    this.pausePlayButtonNode.setAttribute("aria-label", this.playLabel);
    this.pausePlayButtonNode.classList.remove("pause");
    this.pausePlayButtonNode.classList.add("play");
    this.liveRegionNode.setAttribute("aria-live", "polite");
  }
};

/* Event Handlers */

CarouselTablist.prototype.handleImageLinkFocus = function () {
  this.liveRegionNode.classList.add("focus");
};

CarouselTablist.prototype.handleImageLinkBlur = function () {
  this.liveRegionNode.classList.remove("focus");
};

CarouselTablist.prototype.handleMouseOver = function (event) {
  if (!this.pausePlayButtonNode.contains(event.target)) {
    this.hasHover = true;
  }
};

CarouselTablist.prototype.handleMouseOut = function () {
  this.hasHover = false;
};

/* EVENT HANDLERS */

CarouselTablist.prototype.handlePausePlayButtonClick = function () {
  this.hasUserActivatedPlay = !this.isPlayingEnabled;
  this.updatePlaying(!this.isPlayingEnabled);
};

/* Event Handlers for Tabs*/

CarouselTablist.prototype.handleTabKeydown = function (event) {
  var flag = false;

  switch (event.key) {
    case "ArrowRight":
      this.setSelectedToNextTab(true);
      flag = true;
      break;

    case "ArrowLeft":
      this.setSelectedToPreviousTab(true);
      flag = true;
      break;

    case "Home":
      this.setSelectedTab(0, true);
      flag = true;
      break;

    case "End":
      this.setSelectedTab(this.tabNodes.length - 1, true);
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

CarouselTablist.prototype.handleTabClick = function (event) {
  var index = this.tabNodes.indexOf(event.currentTarget);
  this.setSelectedTab(index, true);
};

CarouselTablist.prototype.handleTabFocus = function () {
  this.tablistNode.classList.add("focus");
  this.liveRegionNode.setAttribute("aria-live", "polite");
  this.hasFocus = true;
};

CarouselTablist.prototype.handleTabBlur = function () {
  this.tablistNode.classList.remove("focus");
  if (this.playState) {
    this.liveRegionNode.setAttribute("aria-live", "off");
  }

  this.hasFocus = false;
};

/* Event Handlers for Tabpanels*/

CarouselTablist.prototype.handleTabpanelFocusIn = function () {
  this.hasFocus = true;
};

CarouselTablist.prototype.handleTabpanelFocusOut = function () {
  this.hasFocus = false;
};

/* Initialize Carousel Tablists and options */

window.addEventListener(
  "load",
  function () {
    var carouselEls = document.querySelectorAll(".carousel-tablist");
    var carousels = [];

    // set example behavior based on
    // default setting of the checkboxes and the parameters in the URL
    // update checkboxes based on any corresponding URL parameters
    var checkboxes = document.querySelectorAll(
      ".carousel-options input[type=checkbox]"
    );
    var urlParams = new URLSearchParams(location.search);
    var carouselOptions = {};

    // initialize example features based on
    // default setting of the checkboxes and the parameters in the URL
    // update checkboxes based on any corresponding URL parameters
    checkboxes.forEach(function (checkbox) {
      var checked = checkbox.checked;

      if (urlParams.has(checkbox.value)) {
        var urlParam = urlParams.get(checkbox.value);
        if (typeof urlParam === "string") {
          checked = urlParam === "true";
          checkbox.checked = checked;
        }
      }

      carouselOptions[checkbox.value] = checkbox.checked;
    });

    carouselEls.forEach(function (node) {
      carousels.push(new CarouselTablist(node, carouselOptions));
    });

    // add change event to checkboxes
    checkboxes.forEach(function (checkbox) {
      var updateEvent;
      switch (checkbox.value) {
        case "moreaccessible":
          updateEvent = "setAccessibleStyling";
          break;
        case "norotate":
          updateEvent = "enableOrDisableAutoRotation";
          break;
      }

      // update the carousel behavior and URL when a checkbox state changes
      checkbox.addEventListener("change", function (event) {
        urlParams.set(event.target.value, event.target.checked + "");
        window.history.replaceState(
          null,
          "",
          window.location.pathname + "?" + urlParams
        );

        if (updateEvent) {
          carousels.forEach(function (carousel) {
            carousel[updateEvent](event.target.checked);
          });
        }
      });
    });
  },
  false
);

```