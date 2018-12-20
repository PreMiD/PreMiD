<template>
  <div id="app">
    <Navbar/>
    <transition
      name="fade"
      mode="out-in"
      @beforeLeave="beforeLeave"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import "../static/css/materialize.min.css";
window.$ = require("../static/js/jquery-3.3.1.min.js");
window.JQuery = require("../static/js/jquery-3.3.1.min.js");
import "../static/js/materialize.min.js";
import "../static/css/uigradients.min.css";
import Navbar from "./components/Navbar";

var AppTitle = "PreMiD";
var AppDesc = "Discord Rich Presence for your Media!";
var AppIcon = "/static/favicon.png";

/*
      { ch: "utf-8" },
      { n: "viewport", c: "width=device-width, initial-scale=1" },
      { n: "description", c: AppDesc },
      { n: "author", c: AppTitle+" Team" },
      { n: "X-UA-Compatible", c: "IE=edge" },
      { n: "og:title", c: AppTitle },
      { n: "og:site_name", c: AppDesc },
      { n: "og:image", c: AppIcon },
      { n: "og:url", c: location.href },
      { n: "msapplication-TileImage", c: AppIcon },
      { n: "twitter:card", c: AppIcon },
      { n: "apple-mobile-web-app-title", c: AppTitle },
      { n: "apple-mobile-web-capable", c: "yes" },
      { n: "apple-mobile-web-app-status-bar-style", c: "black" },
      { n: "mobile-web-app-capable", c: "yes" }

          link: [
    { r: "shortcut icon", t: "image/png", h: AppIcon },
    { r: "apple-touch-icon", h: AppIcon },
    { r: "icon", h: AppIcon }
    ],
*/
export default {
  name: "App",
  components: { Navbar },
  data() {
    return {
      prevHeight: 0
    };
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    }
  }
};
</script>

<style>
html,
body {
  --blurple: #7289da;
  margin: 0;
  color: var(--blurple);
}
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/* old fade transition
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-out;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity:0;
}
*/

.button-slide {
  position: relative;
  height: 60px;
  width: fit-content;
  padding-left:16px;
  padding-right:16px;
  background-color: transparent;
  border: 3px solid #fff;
  color: #fff;
  cursor: pointer;
  transition: color 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
}
.button-slide::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #fff;
  -webkit-transform: scaleX(0);
          transform: scaleX(0);
  -webkit-transform-origin: left center;
          transform-origin: left center;
  transition: -webkit-transform 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
  transition: transform 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
  transition: transform 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9), -webkit-transform 150ms cubic-bezier(0.1, 0.7, 0.6, 0.9);
}
.button-slide:hover.button-start {
  color: var(--blurple);
}
.button-slide:hover::before {
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}
.button-slide > span {
  position: relative;
}

.button-slide::before {
  background-color: #000;
}
.button-slide{
  border: 3px solid #000;
  color: #000;
}

.dark .button-slide::before {
  background-color: #fff;
}
.dark .button-slide{
  border: 3px solid #fff;
  color: #fff;
}

.btn:hover{
  filter: brightness(0.65);
}

a:hover:not(.btn) {
  color:#00acff;
}
</style>
