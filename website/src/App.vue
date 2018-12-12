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

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease-out;
  overflow: hidden;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
