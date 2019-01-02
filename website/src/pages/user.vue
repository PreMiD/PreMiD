<template>
  <div>
    <div id="loader" style="text-align:center;width:100vw;"><div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>
      <div class="col s12 m4 center">
        <img src="" id="avatar">
        <h1 id="user"></h1>
        <p style="padding-left:8px;padding-right:8px;padding-top:4px;padding-bottom:4px;" id="id"></p>
        <div class="row" style="margin-left:1rem;margin-right:1rem;" id="apps">

        </div>
      </div>
      <div style="display:none;" id="external-link-alt"><font-awesome-icon icon="external-link-alt" /></div>
  </div>
</template>

<style>
.card > a > * {
  transition: all 0.2s ease;
}

.card > a:hover > * {
  filter:brightness(0.8);
}

.dark #view > div > div > div > div > div > .card-action, .dark #view > div > div > div > div > div > div.card-content, .dark #view > div > div > div > div > div > a > div.card-image {
  background-color:#2a2a2a!important;
}

.card-content {
  border-radius:0!important;
}

.card-title {
  padding:1.5rem!important;
}

#view:not(.dark) > div > div > div > div > div > a > div.card-image > .card-title {
  color:#000;
}

.card .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
  margin-left:1rem;margin-right:1rem;
}

#view:not(.dark) > div > div > div > div > div > .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating) {
  color:unset;
  transition:all 0.1s ease;
}

#view:not(.dark) > div > div > div > div > div > .card-action a:not(.btn):not(.btn-large):not(.btn-small):not(.btn-large):not(.btn-floating):hover {
  filter:brightness(1.25);
}

.card {
  filter: drop-shadow(0 0 8px #00000080)!important;
  /*border-radius:1.19rem!important;*/
  -webkit-box-shadow: unset!important;
    box-shadow: unset!important;
}

.card-image > img {
  /*border-top-left-radius: 1rem!important;
    border-top-right-radius: 1rem!important;*/
}

.card-content > p {
  text-align:left;
}

.card-action {
  /*border-bottom-left-radius: 1rem!important;
  border-bottom-right-radius: 1rem!important;*/
  text-align:center;
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

#avatar {
  width:200px;
  transform:scale(0);
  border-radius:100%;
  padding:1rem;
  background:#2f2f2f;
  box-shadow:inset 0 0 20px black;
  transition: all 0.2s ease;
}

#view:not(.dark) > div > #avatar {
  background:#fafafa;
  box-shadow: inset 0 0 16px #00000035;
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
    scr.innerHTML = "$.getJSON('https://api.premid.app/credit/'+location.pathname.split('/user/')[1], function(d){if(d.length==0){document.querySelector('#view').innerHTML='<h1>An error has occurred: User not found in API.</h1>';};document.querySelector('#avatar').src=d[0].avatar;document.querySelector('#id').style.backgroundColor=d[0].roleColor;document.querySelector('#id').innerHTML=d[0].role;document.querySelector('#user').innerHTML=d[0].name});$('#avatar').on('load', function(){document.querySelector('#avatar').style.transform='scale(1)';});$.getJSON('https://api.premid.app/getServices', function(d){for(i = 0; i < d.length; i++){if(location.pathname.split('/user/')[1] == d[i].userID){var div = document.createElement('div');div.innerHTML = '<div class=\"col s6 m4\"> <div class=\"card\"> <a data-position=\"top\" class=\"tooltipped\" onclick=\"sendAddon(\\''+d[i].id+'\\',\\''+d[i].name+'\\');\" data-tooltip=\"Add to PreMiD\" href=\"#\"><div class=\"card-image\"> <img src=\"https://raw.githubusercontent.com/Timeraa/PreMiD/V1.4/presences/'+d[i].name+'/presence.png\"> <span class=\"card-title\">'+d[i].name+'</span> </div></a><div class=\"card-content\"> <p>'+d[i].description+'</p></div><div class=\"card-action\"> <a href=\"http://'+d[i].url+'\">'+new XMLSerializer().serializeToString(document.querySelector('#external-link-alt').firstChild)+' VIEW SITE</a> </div></div></div>';document.querySelector('#apps').appendChild(div);}$('#loader').remove();var datakey=[];for(data in document.querySelector('#view').dataset){datakey.push(data)};$('*').attr('data-'+datakey[0].replace('v', 'v-').replace('v--', 'v-'), '');var instances = M.Tooltip.init(document.querySelectorAll('.tooltipped'));}});";
    document.head.appendChild(scr);
  }
};
</script>