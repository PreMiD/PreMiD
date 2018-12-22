<template>
  <div>
    <div id="headingMain" class="center">
      <div class="row">
          <h1>Store</h1>
          <p>Publish your own add-ons for PreMiD or download work by others.</p>
          <router-link to="/store/dashboard" class="waves-effect waves-light btn learn-more">PUBLISH</router-link>
          <router-link to="/store/install" class="waves-effect waves-light btn download">INSTALL</router-link>
      </div>
    </div>

    <div class="row center uig-lawrencium">
      <div style="width:fit-content;height:fit-content;float:left;margin:1rem;">
        <h5 style="color:#fff;"><b>Header</b></h5>
        <p style="color:#fff;">other text</p>
      </div>
      <div class="banner-right">
      </div>
    </div>

    <div style="--uig-direction:270deg;" class="row center uig-lawrencium">
      <div style="width:fit-content;height:fit-content;float:right;margin:1rem;">
        <h5 style="color:#fff;"><b>Header</b></h5>
        <p style="color:#fff;">other text</p>
      </div>
      <div class="banner-left">
      </div>
    </div>

    <div class="row center uig-lawrencium">
      <div style="width:fit-content;height:fit-content;float:left;margin:1rem;">
        <h5 style="color:#fff;"><b>Header</b></h5>
        <p style="color:#fff;">other text</p>
      </div>
      <div class="banner-right">
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
  max-width: 150px;
}

#expWrapper {
  float: right;
  width: calc(100% - 175px);
}

#expWrapper p {
  margin: 0;
}
#expWrapper > a{
  margin-top:16px;
}

.btn {
  border-radius: 100px;
  margin:6px;
  padding-left: 25px;
  padding-right: 25px;
}

.learn-more {
  background-color: #b64c23;
}

.download {
  margin-left: 5px;
  background-color: rgb(20, 20, 20);
}
.dark .download { 
  background-color: #fff;
  color:#000;
}

.banner-right {
  float:right;
}

.link-item {
  max-height:75px;
  margin:1rem;
  opacity:0.5;
  filter: grayscale(1);
  transition: all 0.2s ease;
}

.link-item:hover {
  filter: grayscale(0);
  opacity:0.75;
}

.link-item:active {
  filter: grayscale(0);
  opacity:1;
}
</style>