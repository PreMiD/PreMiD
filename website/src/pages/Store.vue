<template>
  <div id="content">
    <div id="headingMain" class="row">
      <div class="col s2"></div>
      <div class="col s8">
        <div id="expWrapper">
          <h1>Store</h1>
          <p>Get support for over [int] services.</p>
          <router-link to="/store/dashboard" class="waves-effect waves-light btn learn-more">CONTRIBUTE</router-link>
          <router-link to="/store/install" class="waves-effect waves-light btn download">INSTALL</router-link>
        </div>
      </div>
      <div class="col s2"></div>

      <div style="width:100%;">
      	<img draggable="false" src="../assets/images/store1.png" style="border-radius:2rem;height:auto;width:100%;position:absolute;left:-33%;top:25rem;">
      	<span style="position:absolute;left:80%;top:25rem;">this is a description</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Store",
  head: {
    title: { inner: "Store" }
  }
};
</script>

<style scoped>
#headingMain {
  width: 100%;
  height: 200px;
}

#headingMain img {
  height: 150px;
}

#headingMain h1 {
  margin: 0;
  font-size: 35px;
  font-weight: 700;
}

#headingMain p {
  font-size: 20px;
  font-weight: 500;
  color: rgb(10, 10, 10);
}

.dark #headingMain p {
  color: #dadada;
}

#expImgWrapper {
  display: inline-block;
  width: 150px;
}

#expWrapper {
  float: right;
  margin-left: 25px;
  width: calc(100% - 175px);
}

#expWrapper p {
  margin: 0;
}

.btn {
  border-radius: 100px;
  margin-top: 5px;
  padding-left: 25px;
  padding-right: 25px;
}

.learn-more {
  background-color: #7289da;
  margin-right: 5px;
}

.download {
  margin-left: 5px;
  background-color: rgb(20, 20, 20);
}
.dark .download { 
  background-color: #fff;
  color:#000;
}
</style>

