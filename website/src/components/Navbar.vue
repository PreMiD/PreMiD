<template>
  <div id="header" class="row">
    <div class="col s1"></div>
    <div class="col s4">
      <router-link to="/">
        <img draggable="false" src="../assets/images/logo.png">
        <h1>PreMiD</h1>
      </router-link>
    </div>
    <div id="links" class="col s6">
      <router-link class="headerLink" to="/support">Support</router-link>
      <router-link class="headerLink" to="/contributors">Contributors</router-link>
      <router-link class="headerLink" to="/downloads">Downloads</router-link>
      <router-link class="headerLink" to="/store">Store</router-link>
      <div class="switch">
        <label>
          Dark Mode<input type="checkbox" id="darkmode" class="togglePresence"><span class="lever" onclick="darkToggle();"></span>
        </label>
      </div>
    </div>
    <div class="col s1"></div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted(){
    let sty = document.createElement('style');
    sty.innerHTML = "#content,#header,a{transition:all 0.2s ease;}html,body{overflow-x: hidden;max-width:100vw;}.dark{background-color:#1a1a1a;color:#fff;}h1{color:#7289da;}";
    document.head.appendChild(sty);
    let scr = document.createElement('script');
    scr.innerHTML = 'darkToggle = function(){if(!window.localStorage.darkmode || window.localStorage.darkmode == "false"){window.localStorage.darkmode = true;$("#header > *, #content, usercard, html, body").addClass("dark");}else{window.localStorage.darkmode = false;$("#header > *, #content, usercard, html, body").removeClass("dark");}}; darkCheck = function(){if(!window.localStorage.darkmode || window.localStorage.darkmode == "false"){if($("#darkmode").prop("checked") == true){$("#darkmode").click();}}else{if($("#darkmode").prop("checked") == false){$("#darkmode").click();}}};window.onload = function(){if(window.localStorage.darkmode == "true"){darkToggle();$("#darkmode").click();darkToggle();}};';
    document.head.appendChild(scr);
  }
};
</script>

<style scoped>
#header {
 box-shadow: 0 0 20px #00000070;
}

#header > #links > a {
  transition: all 0.25s ease;
}
#header > #links > a:hover {
  color:#7289da!important;
}

#header > #links > a:not(.router-link-active) {
  color:#00000070;
}

.dark #header > #links > a:not(.router-link-active) {
  color:#ffffff70;
}

.switch {
    cursor: pointer
}

.switch label .lever {
    width: 42px;
    height: 24px;
    background: #72767d
}

.switch label .lever:before,
.switch label .lever:after {
    width: 18px;
    height: 18px;
    left: 3px;
    top: 3px
}

.switch label .lever:after {
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15)
}

input[type="checkbox"]:checked:not(:disabled)~.lever:active::before,
input[type="checkbox"]:checked:not(:disabled).tabbed:focus~.lever::before {
    background-color: transparent
}

.switch label input[type="checkbox"]:checked+.lever:before,
.switch label input[type="checkbox"]:checked+.lever:after {
    left: 21px
}

.switch label input[type="checkbox"]:checked+.lever:after {
    background-color: #fff
}

.switch label input[type="checkbox"]:checked+.lever {
    background-color: #7289da
}

#header, #header > *, #header > * > *, #header > * > * > *{
  background-color:#fafafa;
}

.dark #header, .dark #header > *, .dark #header > * > *, .dark #header > * > * > *{
  background-color:#2a2a2a;
  color:#fdfdfd;
}

#header {
  height: 60px;
  width: 100%;
  color: #7289da;
  line-height: 60px;
}

#header img {
  margin-top: 5px;
  margin-right: 10px;
  width: 50px;
  float: left;
}

#header h1 {
  margin: 0;
  line-height: 60px;
  font-size: 30px;
  font-weight: 600;
}

#header .headerLink:not(:first-child) {
  margin-right: 25px;
}

#header .headerLink {
  font-size: 20px;
  font-weight: 500;
  float: right;
}
</style>
