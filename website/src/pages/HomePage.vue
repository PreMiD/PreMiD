<template>
  <div>
    <div id="headingMain" class="center">
      <div class="row">
          <img style="margin:1rem;" draggable="false" src="../assets/images/logo.png">
          <h1>New Look to your Discord status!</h1>
          <p>Watching videos or listening to music and wanna show this to your friends? PreMiD got you covered!</p>
          <a href="https://github.com/Timeraa/PreMiD" class="waves-effect waves-light btn learn-more"><font-awesome-icon :icon="['fab', 'github']" />&nbsp Learn More</a>
          <router-link to="/downloads" class="waves-effect waves-light btn download"><font-awesome-icon icon="download" />&nbsp Downloads</router-link>
          <a href="https://discord.gg/febqYmx" class="waves-effect waves-light btn" style="background-color:var(--blurple)"><font-awesome-icon :icon="['fab', 'discord']" />&nbsp; DISCORD</a>
      </div>
    </div>

    <div class="row center">
		<div class="carousel-container">
		  <div class="carousel my-carousel carousel--translate">
		    <input class="carousel__activator" type="radio" name="carousel" id="F" checked="checked"/>
		    <input class="carousel__activator" type="radio" name="carousel" id="G"/>
		    <input class="carousel__activator" type="radio" name="carousel" id="H"/>
		    <input class="carousel__activator" type="radio" name="carousel" id="I"/>
		    <input class="carousel__activator" type="radio" name="carousel" id="J"/>
		    <div class="carousel__controls">
		      <label class="carousel__control carousel__control--backward" for="J"></label>
		      <label class="carousel__control carousel__control--forward" for="G"></label>
		    </div>
		    <div class="carousel__controls">
		      <label class="carousel__control carousel__control--backward" for="F"></label>
		      <label class="carousel__control carousel__control--forward" for="H"></label>
		    </div>
		    <div class="carousel__controls">
		      <label class="carousel__control carousel__control--backward" for="G"></label>
		      <label class="carousel__control carousel__control--forward" for="I"></label>
		    </div>
		    <div class="carousel__controls">
		      <label class="carousel__control carousel__control--backward" for="H"></label>
		      <label class="carousel__control carousel__control--forward" for="J"></label>
		    </div>
		    <div class="carousel__controls">
		      <label class="carousel__control carousel__control--backward" for="I"></label>
		      <label class="carousel__control carousel__control--forward" for="F"></label>
		    </div>
		    <div class="carousel__track">
		      <li class="carousel__slide">
		        <h1>F</h1>
		      </li>
		      <li class="carousel__slide">
		        <h1>G</h1>
		      </li>
		      <li class="carousel__slide">
		        <h1>H</h1>
		      </li>
		      <li class="carousel__slide">
		        <h1>I</h1>
		      </li>
		      <li class="carousel__slide">
		        <h1>J</h1>
		      </li>
		    </div>
		    <div class="carousel__indicators">
		      <label class="carousel__indicator" for="F"></label>
		      <label class="carousel__indicator" for="G"></label>
		      <label class="carousel__indicator" for="H"></label>
		      <label class="carousel__indicator" for="I"></label>
		      <label class="carousel__indicator" for="J"></label>
		    </div>
		  </div>
		</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  head: {
    title: { inner: "Home" }
  },
  mounted(){
    let scrr=document.createElement('script');scrr.innerHTML = "window.onload = function(){}";document.head.appendChild(scrr);
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

/* CAROUSEL */
.carousel {
  height: 300px;
  width: 400px;
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 0;
  list-style: none;
}
.carousel__controls,
.carousel__activator {
  display: none;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__track {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__slide:nth-of-type(1) {
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__controls:nth-of-type(1) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(1):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(1) {
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__track {
  -webkit-transform: translateX(-100%);
          transform: translateX(-100%);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__slide:nth-of-type(2) {
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__controls:nth-of-type(2) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(2):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(2) {
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__track {
  -webkit-transform: translateX(-200%);
          transform: translateX(-200%);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__slide:nth-of-type(3) {
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__controls:nth-of-type(3) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(3):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(3) {
  opacity: 1;
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__track {
  -webkit-transform: translateX(-300%);
          transform: translateX(-300%);
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__slide:nth-of-type(4) {
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__controls:nth-of-type(4) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(4):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(4) {
  opacity: 1;
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__track {
  -webkit-transform: translateX(-400%);
          transform: translateX(-400%);
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__slide:nth-of-type(5) {
  transition: opacity 0.5s, -webkit-transform 0.5s;
  transition: opacity 0.5s, transform 0.5s;
  transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
  -webkit-transform: scale(1);
          transform: scale(1);
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__controls:nth-of-type(5) {
  display: block;
  opacity: 1;
}
.carousel__activator:nth-of-type(5):checked ~ .carousel__indicators .carousel__indicator:nth-of-type(5) {
  opacity: 1;
}
.carousel__control {
  height: 30px;
  width: 30px;
  margin-top: -15px;
  top: 50%;
  position: absolute;
  display: block;
  cursor: pointer;
  border-width: 5px 5px 0 0;
  border-style: solid;
  border-color: #fafafa;
  opacity: 0.35;
  outline: 0;
  z-index: 3;
}
.carousel__control:hover {
  opacity: 1;
}
.carousel__control--backward {
  left: 10px;
  -webkit-transform: rotate(-135deg);
          transform: rotate(-135deg);
}
.carousel__control--forward {
  right: 10px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.carousel__indicators {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
.carousel__indicator {
  height: 15px;
  width: 15px;
  border-radius: 100%;
  display: inline-block;
  z-index: 2;
  cursor: pointer;
  opacity: 0.35;
  margin: 0 2.5px 0 2.5px;
}
.carousel__indicator:hover {
  opacity: 0.75;
}
.carousel__track {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  margin: 0;
  transition: -webkit-transform 0.5s ease 0s;
  transition: transform 0.5s ease 0s;
  transition: transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s;
}
.carousel__track .carousel__slide {
  display: block;
  top: 0;
  left: 0;
  right: 0;
  opacity: 1;
}
.carousel__track .carousel__slide:nth-of-type(1) {
  -webkit-transform: translateX(0%);
          transform: translateX(0%);
}
.carousel__track .carousel__slide:nth-of-type(2) {
  -webkit-transform: translateX(100%);
          transform: translateX(100%);
}
.carousel__track .carousel__slide:nth-of-type(3) {
  -webkit-transform: translateX(200%);
          transform: translateX(200%);
}
.carousel__track .carousel__slide:nth-of-type(4) {
  -webkit-transform: translateX(300%);
          transform: translateX(300%);
}
.carousel__track .carousel__slide:nth-of-type(5) {
  -webkit-transform: translateX(400%);
          transform: translateX(400%);
}
.carousel--scale .carousel__slide {
  -webkit-transform: scale(0);
          transform: scale(0);
}
.carousel__slide {
  height: 100%;
  position: absolute;
  overflow-y: auto;
  opacity: 0;
}
.carousel-container {
  display: inline-block;
}
.my-carousel {
  border-radius: 5px;
  margin: 30px;
  width:80vw;
  height:24rem;
}
.carousel__slide {
  overflow: hidden;
}
.carousel--thumb .carousel__indicator {
  height: 30px;
  width: 30px;
}
.carousel__indicator {
  background-color: #fafafa;
}
.carousel__slide:nth-of-type(1),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(1) {
  background-image: url("https://unsplash.it/300?random");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(2),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(2) {
  background-image: url("https://unsplash.it/600?random");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(3),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(3) {
  background-image: url("https://unsplash.it/900?random");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(4),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(4) {
  background-image: url("https://unsplash.it/1200?random");
  background-size: cover;
  background-position: center;
}
.carousel__slide:nth-of-type(5),
.carousel--thumb .carousel__indicators .carousel__indicator:nth-of-type(5) {
  background-image: url("https://unsplash.it/1500?random");
  background-size: cover;
  background-position: center;
}

</style>

