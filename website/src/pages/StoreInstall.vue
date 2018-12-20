<template>
  <div id="content">
    <div class="row xheader">
      <h1>Store</h1>
      <p>Viewing all services.</p>
    </div>
<div id="loader" style="text-align:center;width:100vw;"><div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>
      <div class="row" id="apps">

     </div>
     <div style="display:none;" id="user"><font-awesome-icon icon="user" /></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreInstall",
  head: {
    title: { inner: "Store" }
  },
  mounted(){
    let scr = document.createElement('script');
    scr.innerHTML = "$.getJSON('https://wa.au.paz.yt/premid.php?ALL', function(dd){for(i in dd){d = dd[i];$('#loader').remove();if('services' in d){for(s in d.services){var div = document.createElement('div');div.innerHTML = '<div class=\"col s6 m3\"> <div class=\"card\"> <a data-position=\"top\" class=\"tooltipped\" data-tooltip=\"Install to PreMiD\" href=\"https://raw.githubusercontent.com/xPazz/PreMiD-Services/master/'+d.id+'/'+s+'.js\"><div class=\"card-image\"> <img src=\"https://raw.githubusercontent.com/xPazz/PreMiD-Services/master/'+d.id+'/'+s+'.png\"> <span class=\"card-title\">'+s+'</span> </div></a><div class=\"card-content\"> <p>'+d.services[s].desc+'</p></div><div class=\"card-action\"> <a href=\"'+d.services[s].url+'\">VIEW SITE</a> <a href=\"/user/?'+d.id+'\">'+new XMLSerializer().serializeToString(document.querySelector('#user').firstChild)+' AUTHOR</a></div></div></div>';document.querySelector('#apps').appendChild(div);}}$('*').attr('data-v-9622c9c4', '');var instances = M.Tooltip.init(document.querySelectorAll('.tooltipped'));}});";
    document.head.appendChild(scr);
  }
};
</script>

<style scoped>

.card > a > * {
  transition: all 0.2s ease;
}

.card > a:hover > * {
  filter:brightness(0.8);
}

.dark #content > div > div > div > div > .card-action, .dark #content > #apps > div > div > div > div.card-content {
  background-color:#2a2a2a!important;
}

.card-content {
  border-radius:0!important;
}

.card {
  filter: drop-shadow(0 0 8px #00000080)!important;
  border-radius:1.19rem!important;
  -webkit-box-shadow: unset!important;
    box-shadow: unset!important;
}

.card-image > img {
  border-top-left-radius: 1rem!important;
    border-top-right-radius: 1rem!important;
}

.card-action {
  border-bottom-left-radius: 1rem!important;
  border-bottom-right-radius: 1rem!important;
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