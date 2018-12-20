<template>
  <div id="content">
  <div id="loader" style="text-align:center;width:100vw;"><div class="preloader-wrapper big active"> <div class="spinner-layer spinner-blue-only"> <div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"> <div class="circle"></div></div><div class="circle-clipper right"> <div class="circle"></div></div></div></div></div>
    <div class="col s12 m4 center">
      <img style="width:150px;" src="" id="avatar">
      <h1 id="user"></h1>
      <p id="id"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  head: {
    title: { inner: "User" }
  },
  mounted(){
    let scr = document.createElement('script');
    scr.innerHTML = "$.getJSON('https://cors-anywhere.herokuapp.com/http://paz.yt:6942/user/?i='+location.search.substring(1), function(d){document.querySelector('#user').innerHTML += d.name;$('#avatar').attr('src', d.avatar);});$('#loader').remove();";
    document.head.appendChild(scr)
  }
};
</script>