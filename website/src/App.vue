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
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: { Navbar },
  head: {
    link: [{ r: "shortcut icon", t: "image/png", h: "/static/favicon.png" }],
    meta: [
      { ch: "utf-8" },
      { n: "viewport", c: "width=device-width, initial-scale=1" }
    ]
  },
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
  margin: 0;
  color: #7289da;
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
  width: 300px;
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
  color: #f1b00f;
}
.button-slide:hover.button-next {
  color: #c598af;
}
.button-slide:hover::before {
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}
.button-slide > span {
  position: relative;
}
</style>
