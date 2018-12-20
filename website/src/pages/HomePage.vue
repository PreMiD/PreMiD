<template>
  <div id="content">
    <div id="headingMain" class="row">
      <div class="col s2"></div>
      <div class="col s8">
        <div id="expImgWrapper">
          <img draggable="false" src="../assets/images/logo.png">
        </div>
        <div id="expWrapper">
          <h1>New Look to your Discord status!</h1>
          <p>Watching videos or listening to music and wanna show this to your friends? PreMiD got you covered!</p>
          <a href="https://github.com/Timeraa/PreMiD" class="waves-effect waves-light btn learn-more"><font-awesome-icon :icon="['fab', 'github']" />&nbsp Learn More</a>
          <router-link to="/downloads" class="waves-effect waves-light btn download"><font-awesome-icon icon="download" />&nbsp Downloads</router-link>
          <a href="https://discord.gg/febqYmx" class="waves-effect waves-light btn" style="background-color:var(--blurple)"><font-awesome-icon :icon="['fab', 'discord']" />&nbsp; DISCORD</a>
        </div>
      </div>
      <div class="col s2"></div>
    </div>

    <div class="carousel carousel-slider center">
      <div class="carousel-item red white-text" href="#one!">
        <h2>First Panel</h2>
        <p class="white-text">This is your first panel</p>
      </div>
      <div class="carousel-item amber white-text" href="#two!">
        <h2>Second Panel</h2>
        <p class="white-text">This is your second panel</p>
      </div>
      <div class="carousel-item green white-text" href="#three!">
        <h2>Third Panel</h2>
        <p class="white-text">This is your third panel</p>
      </div>
      <div class="carousel-item blue white-text" href="#four!">
        <h2>Fourth Panel</h2>
        <p class="white-text">This is your fourth panel</p>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(() => {
  var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });
});

export default {
  name: "Home",
  head: {
    title: { inner: "Home" }
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
</style>

