<template>
  <div id="content">
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
    scr.innerHTML = "$.getJSON('https://cors-anywhere.herokuapp.com/http://paz.yt:6942/user/?i='+location.search.substring(1), function(d){document.querySelector('#user').innerHTML += d.name;$('#avatar').attr('src', d.avatar);});";
    document.head.appendChild(scr)
  }
};
</script>