<template>
  <div id="content">
    <div class="col s12 m4">
      <div class="row center">
        <h5>Downloading already? Okay, here is some steps for you...</h5>
      </div>
      <div class="row center">
        <a id="dl" href="" style="margin:1rem;" class="waves-effect waves-light btn btn-large">Download</a><br>
        <a href="#" onclick="document.querySelector('#os').style.display = 'block';">Not your OS?</a><br>
        <div class="input-field" style="width:25%;margin-left:37.5%;text-align-last:center;"><select id="os">
          <option value="none" disabled selected>Pick your OS</option>
          <option value="windows">Windows</option>
          <option value="mac">Mac OS</option>
          <option value="linux">Linux</option>
        </select></div>

        <a id="ext" href="" style="margin:1rem;" class="waves-effect waves-light btn btn-large">Extension</a><br>
        <a href="#" onclick="document.querySelector('#br').style.display = 'block';">Not your browser?</a><br>
        <div class="input-field" style="width:25%;margin-left:37.5%;text-align-last:center;"><select id="br">
          <option value="none" disabled selected>Pick your Browser</option>
          <option value="chrome">Chromium-based (Opera, Vivalidi, Chrome..)</option>
          <option value="firefox">Firefox</option>
        </select></div>
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
    dlxs.setAttribute('src', 'http://wa.au.paz.yt/info.js');
    document.head.appendChild(dlxs);
  }
};
</script>

<style scoped>
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