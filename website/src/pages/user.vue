<template>
  <div id="content">
  <div id="loader" style="text-align:center;width:100vw;"><div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>
    <div class="col s12 m4 center">
      <img style="width:150px;" src="" id="avatar">
      <h1 id="user"></h1>
      <p style="padding-left:8px;padding-right:8px;padding-top:4px;padding-bottom:4px;" id="id"></p>
      <div class="row" style="margin-left:1rem;margin-right:1rem;" id="apps">

      </div>
    </div>
  </div>
</template>

<style>
p {
  color:#000;
}
.dark p {
  color:#fafafa;
}

.card > a > * {
  transition: all 0.2s ease;
}

.card > a:hover > * {
  filter:brightness(0.8);
}

.dark #view > div > div > div > div > .card-action, .dark #view > #apps > div > div > div > div.card-content {
  background-color:#2a2a2a!important;
}

.dark #view > div > #apps > div > div > div > div.card-content, .dark #view > div > #apps > div > div > div > div.card-action{
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
</style>

<script>
export default {
  name: "User",
  head: {
    title: { inner: "User" }
  },
  mounted(){
    let scr = document.createElement('script');
    scr.innerHTML = "$.getJSON('https://wa.au.paz.yt/premid.php?'+location.search.substring(1), function(d){$('#loader').remove();if('services' in d){for(s in d.services){var div = document.createElement('div');div.innerHTML = '<div class=\"col s6 m3\"> <div class=\"card\"> <a data-position=\"top\" class=\"tooltipped\" data-tooltip=\"Install to PreMiD\" href=\"https://raw.githubusercontent.com/xPazz/PreMiD-Services/master/'+d.id+'/'+s+'.js\"><div class=\"card-image\"> <img src=\"https://raw.githubusercontent.com/xPazz/PreMiD-Services/master/'+d.id+'/'+s+'.png\"> <span class=\"card-title\">'+s+'</span> </div></a><div class=\"card-content\"> <p>'+d.services[s].desc+'</p></div><div class=\"card-action\"> <a href=\"'+d.services[s].url+'\">VIEW SITE</a> </div></div></div>';document.querySelector('#apps').appendChild(div);}}document.querySelector('#user').innerHTML = d.name;document.querySelector('#id').innerHTML = d.role;document.querySelector('#id').style.backgroundColor = d.roleColor;$('#avatar').attr('src', d.avatar);var instances = M.Tooltip.init(document.querySelectorAll('.tooltipped'));});";
    document.head.appendChild(scr);
  }
};
</script>