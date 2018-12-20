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
    </div>
    <div class="col s1"></div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
#header {
  height: 60px;
  width: 100%;
  background-color: #fff;
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
