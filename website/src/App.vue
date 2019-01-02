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
      <router-view id="view" />
    </transition>
    <div style="height:fit-content;width:100vw;" class="footer">
    <div style="height:75px;width:100vw;"></div>
    <div class="footer-thing">
      <div class="footer-item">
        <div class="switch"> 
          <label>
          <span>Dark Mode</span>
          <input type="checkbox" id="darkmode" class="togglePresence">
            <span class="lever" onclick="darkToggle();"></span> 
          </label>
        </div>
      </div>
      <div class="footer-item last">
        <span>running <a id="commit"></a></span>
      </div>
    </div>
    <div style="height:75px;width:100vw;"></div>
    </div>
  </div>
</template>

<script>
import "../static/css/materialize.min.css";
window.$ = require("../static/js/jquery-3.3.1.min.js");
window.JQuery = require("../static/js/jquery-3.3.1.min.js");
import "../static/css/uigradients.min.css";
import Navbar from "./components/Navbar";

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
  },
  mounted(){
    let scrr = document.createElement('script');
    scrr.innerHTML = "var sendAddon = function(iid, nname){var eventt = new CustomEvent('PreMiD_ReceiveExtensionData', {id: iid, name: nname});window.dispatchEvent(eventt);};window.onload = function(){document.querySelector('#commit').innerHTML = document.querySelector('meta[name=\"commit\"]').content;document.querySelector('#commit').href = 'https://github.com/Timeraa/PreMiD/commit/'+document.querySelector('meta[name=\"commit\"]').content;document.querySelector('meta[name=\"og:title\"]').content = document.title.replace(' - PreMiD', '');}";
    document.head.appendChild(scrr);
  }
};

</script>

<style>

.footer {
	background:#f8f8f8;
}

.dark body > #app > .footer {
	background:#2a2a2a;
}

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

#view {
	min-height:calc(100vh - 275px);
}

.fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
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


.switch label input[type=checkbox]:checked+.lever {
    background-color: #84c7c1;
}

.switch > label > span {
  margin-right:0.5rem;
}
.lever {
  margin:0 0 0 0!important;
  margin-bottom:2px!important;
}

.footer-item > .switch, .footer-item {
  width:fit-content;
  display:inline;
}

.footer-item {
  padding:1rem;
  border-radius:2rem;
  box-shadow: inset 0 0 20px #00000035;
}

.dark .footer-item {
  background-color:#1f1f1f;
  box-shadow: inset 0 0 12px #00000010;
}

.last {
  margin-left:62.5%;
}

.footer-thing {
  display:inline;margin-left:2rem;margin-right:2rem;width:100%;
}
</style>
