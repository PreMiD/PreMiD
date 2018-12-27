<template>
  <div id="header" class="row">
    <div class="col">
      <router-link to="/">
        <img draggable="false" src="../assets/images/logo.png">
        <h1>PreMiD</h1>
      </router-link>
    </div>
    <div id="links" class="col">
      <router-link class="headerLink" to="/contributors"><font-awesome-icon icon="users" /> Contributors</router-link>
      <router-link class="headerLink" to="/downloads"><font-awesome-icon icon="download" /> Downloads</router-link>
      <router-link class="headerLink" to="/store"><font-awesome-icon icon="store" /> Store</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  mounted(){
    let sty = document.createElement('style');
    sty.innerHTML = "#view,#header,a{transition:all 0.2s ease;}html,body{overflow-x: hidden;max-width:100vw;}.dark{background-color:#1a1a1a;color:#fff;}h1{color:#7289da;}";
    document.head.appendChild(sty);
    let scr = document.createElement('script');
    scr.innerHTML = 'darkToggle = function(){if(!window.localStorage.darkmode || window.localStorage.darkmode == "false"){window.localStorage.darkmode = true;$("#header > *, #view, usercard, html, body, .footer-item").addClass("dark");}else{window.localStorage.darkmode = false;$("#header > *, #view, usercard, html, body, .footer-item").removeClass("dark");}}; darkCheck = function(){if(!window.localStorage.darkmode || window.localStorage.darkmode == "false"){if($("#darkmode").prop("checked") == true){$("#darkmode").click();}}else{if($("#darkmode").prop("checked") == false){$("#darkmode").click();}}};startupTheme = function(){if(window.localStorage.darkmode == "true"){darkToggle();$("#darkmode").click();darkToggle();}};startupTheme();';
    document.head.appendChild(scr);
  }
};
</script>

<style scoped>
#header > div > a > h1 {
  font-family: "Uni Sans Heavy CAPS", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#header > div.col {
  margin-left:1.5rem;
}

@font-face {
    font-family: "Uni Sans Thin CAPS";
    src: url("/static/fonts/uni-sans.thin-caps-webfont.eot");
    src: url("/static/fonts/uni-sans.thin-caps-webfont.eot?#iefix") format("embedded-opentype"),
    url("/static/fonts/uni-sans.thin-caps-webfont.woff2") format("woff2"),
    url("/static/fonts/uni-sans.thin-caps-webfont.woff") format("woff"),
    url("/static/fonts/uni-sans.thin-caps-webfont.ttf") format("truetype"),
    url("/static/fonts/uni-sans.thin-caps-webfont.svg#uni_sansthin_caps") format("svg");
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: "Uni Sans Heavy CAPS";
    src: url("/static/fonts/uni-sans.heavy-caps-webfont.eot");
    src: url("/static/fonts/uni-sans.heavy-caps-webfont.eot?#iefix") format("embedded-opentype"),
    url("/static/fonts/uni-sans.heavy-caps-webfont.woff2") format("woff2"),
    url("/static/fonts/uni-sans.heavy-caps-webfont.woff") format("woff"),
    url("/static/fonts/uni-sans.heavy-caps-webfont.ttf") format("truetype"),
    url("/static/fonts/uni-sans.heavy-caps-webfont.svg#uni_sansheavy_caps") format("svg");
    font-weight: normal;
    font-style: normal;
}

#header {
 box-shadow: 0 0 20px #00000070;
}

.dark #header > #links > a {
  transition: all 0.25s ease;
  color:#fff;
}

#header > #links > a {
  color:#000;
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

#header > *, #header > * > *, #header > * > * > *{
  background-color:transparent;
}

#header{
  background-color:#fafafa;
}

.dark #header{
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
  margin-top: 10px;
  margin-right: 10px;
  width: auto;
  float: left;
  height:40px;
}

#header h1 {
  margin: 0;
  line-height: 60px;
  font-size: 24px;
  font-weight: 600;
  width:fit-content;
  height:fit-content;
  display:inline;
}

#header > .s4 {
  width:fit-content;
}
#links {
  float:right;
  margin-right:1.5rem;
}
#header .headerLink:not(:first-child) {
  margin-right: 25px;
}

#header .headerLink {
  font-size: 20px;
  font-weight: 500;
  float: right;
}

@media (max-width: 760px) {
  #header > div.col > a > h1 {
    display:none;
  }
}

@media (max-width: 670px) {
  #links > a {
    font-size:0!important;
  }
  #links > a > svg {
    font-size:25px!important;
  }
  #links > a {
    margin-top:10px;
    margin-left:32px;
    margin-right:32px;
  }
}


@media (max-width: 475px) {
  #links > a {
    margin-top:10px;
    margin-left:16px;
    margin-right:16px;
  }
}


</style>
