<template>
  <div id="content">
    <!--<profile username="Timeraa" />
    <img src="../assets/images/Timeraa.png">-->
  </div>
</template>

<script>
import Profile from '../components/ContributorProfile'

export default {
  name: 'Contributors',
  components: {Profile},
  head: {
    title: {inner: "Contributors"}
  },
  mounted(){
    let scr = document.createElement('script');
    scr.innerHTML = '$.getJSON("https://api.premid.app/credits", function(d){for(i = 0;i < d.length; i++){$("#content").append("<h2 style=\'color:"+d[i].roleColor+";\'>"+d[i].name+"</h2><p>"+d[i].role+"</p><img src=\'"+d[i].avatar+"\' style=\'width:150px;border-radius:1rem;\'>")}});';
    document.head.appendChild(scr);
  }
}
</script>

<style scoped>
#content {
  text-align: center;
}

img {
  margin-top: 50px;
  width: 150px;
}

h1,
h2 {
  margin: 0;
}

h1 {
  font-weight: 900;
}

h2 {
  font-weight: 500;
  font-style: italic;
}
</style>
