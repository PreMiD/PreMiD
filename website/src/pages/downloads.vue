<template>
  <div id="content">
    <div class="col s12 m4">
      <div class="center">
        <h5>Desktop Application</h5>
      </div>
      <div class="center">
        <div class="flexcenter"><a id="dl" href="#" style="margin:1rem;" class="waves-effect waves-light button-slide button-start"><span>Download</span></a></div>
        <a href="#" onclick="document.querySelector('#os').style.display = 'block';">Not your OS?</a>
        <div class="input-field" style="width:25%;margin-left:37.5%;text-align-last:center;"><select id="os" onchange="setupDownloads(this.value, document.querySelector('#br').value);">
          <option value="" disabled selected>Pick your OS</option>
          <option value="Windows">Windows</option>
          <option value="Mac OS X">Mac OS</option>
          <option value="Linux">Linux</option>
        </select></div>
        <br>
        <div class="center">
          <h5>Browser Extension</h5>
        </div>
        <div class="flexcenter"><a id="ext" href="#" style="margin:1rem;" class="waves-effect waves-light button-slide button-start"><span>Extension</span></a></div>
        <a href="#" onclick="document.querySelector('#br').style.display = 'block';">Not your browser?</a>
        <div class="input-field" style="width:25%;margin-left:37.5%;text-align-last:center;"><select id="br" onchange="setupDownloads(document.querySelector('#os').value, this.value);">
          <option value="" disabled selected>Pick your Browser</option>
          <option value="Chrome">Chromium-based (Opera, Vivalidi, Chrome..)</option>
          <option value="Firefox">Firefox</option>
        </select></div>
        <div id="chrome" style="display:none;">
          <span> Chrome Web Store
          <font-awesome-icon :icon="['fab', 'chrome']" /></span>
        </div>
        <div id="firefox" style="display:none;">
          <span>Firefox Add-ons
          <font-awesome-icon :icon="['fab', 'firefox']" /></span>
        </div>
        <div id="windows" style="display:none;">
          <span>Download for Windows
          <font-awesome-icon :icon="['fab', 'windows']" /></span>
        </div>
        <div id="apple" style="display:none;">
          <span>Download for Mac OS
            <font-awesome-icon :icon="['fab', 'apple']" /></span>
        </div>
        <div id="linux" style="display:none;">
          <span>Download for Linux
           <font-awesome-icon :icon="['fab', 'linux']" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Downloads",
  head: {
    title: { inner: "Downloads" }
  },
  mounted(){
    let dlxs = document.createElement('script');
    dlxs.setAttribute('src', '/static/js/info.js');
    document.head.appendChild(dlxs);
  }
};
</script>

<style scoped>
#dl, #ext, .flexcenter {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:24px;
}
.xheader {
  margin:4rem;
}

.btn {
  border-radius: 100px;
  margin-top: 5px;
  padding-left: 25px;
  padding-right: 25px;
}
</style>