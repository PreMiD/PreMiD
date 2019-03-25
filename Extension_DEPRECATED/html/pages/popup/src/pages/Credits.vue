<template>
  <div class="main">
    <div v-for="(contributor, index) of contributors" v-bind:key="contributor" :style="'color: ' + contributor.roleColor + ';'" v-on:mouseover="animate(index)" v-on:mouseout="de_animate(index)" :onmouseover="'this.style.background=\'' + contributor.roleColor + '\'; this.style.color=\'#23272A\''" :onmouseout="'this.style.background=\'' + '\'; this.style.color=\'' + contributor.roleColor + '\''" class="contributor">
      <div class="picture"><img src="foo" width="100%" height="100%"></div>
      <span>{{ contributor.role.toUpperCase() }}</span>
      <br>
      <span class="name">{{ contributor.name.toUpperCase() }}</span>
    </div>
    <center v-if="error"><h2>API Response Error</h2></center>
  </div>
</template>

<script>
import request from "request";
import gif_frames from "gif-frames"

export default {
  name: "contributors",
  data() {
    return {
      contributors: [],
      error: false
    }
  },
  mounted() {
    request("https://api.premid.app/credits", (err, res, dat) => {
      let data = JSON.parse(dat);
      data.sort((a, b) => b.rolePosition - a.rolePosition);
      this.$data.contributors = data;
      console.log("foo")
      setTimeout(() => { 
        
        for(let index in this.$data.contributors) {
          // this.$data.contributors[index].avatar

          if (this.$data.contributors[index].avatar.split(".")[this.$data.contributors[index].avatar.split(".").length - 1] == "gif") {
            console.log(this.$data.contributors[index].avatar)
            gif_frames({ url: this.$data.contributors[index].avatar, frames: 0, outputType: 'canvas' }).then(function (frameData) {
              let src = document.body.getElementsByClassName("contributor")[index].children[0].children[0].src = frameData[0].getImage().toDataURL("image/png");
              let store = document.body.getElementsByClassName("contributor")[index].children[0].children[0].still = frameData[0].getImage().toDataURL("image/png");
            }); 
          } else {
            let src = document.body.getElementsByClassName("contributor")[index].children[0].children[0].src = this.$data.contributors[index].avatar;
          }
        }
      }, 1000);
    })
  },
  methods: {
    animate(index) {
      if (this.$data.contributors[index].avatar.split(".")[this.$data.contributors[index].avatar.split(".").length - 1] == "gif") {
        let src = document.body.getElementsByClassName("contributor")[index].children[0].children[0].src = this.$data.contributors[index].avatar;
      }
    },
    de_animate(index) {
      if (this.$data.contributors[index].avatar.split(".")[this.$data.contributors[index].avatar.split(".").length - 1] == "gif") {
        let src = document.body.getElementsByClassName("contributor")[index].children[0].children[0].src = document.body.getElementsByClassName("contributor")[index].children[0].children[0].still;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../stylesheets/colors.less";
@cwidth: 8rem;
@cheight: 11.7rem;


.main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(@cwidth, ((@cwidth + .5rem))));
  justify-content: center;
  padding: 1.5rem;
  overflow: scroll;
  height: 83.3vh;
}

.contributor {
  width: ((@cwidth - .5rem));
  height: ((@cheight - .5rem));
  border-radius: .3rem;
  background: @background-secondary;
  transform: translate(0.5rem);
  margin-bottom: 1rem;
  padding-left: .5rem;
  @transition-time: 150ms;
  transition: 
    box-shadow @transition-time ease, 
    transform @transition-time ease, 
    color @transition-time, 
    background @transition-time;
  &:hover {
    transform: translate(.2rem, -.3rem);
    margin-bottom: .5rem;
    box-shadow: 0.35rem 0.35rem rgba(0, 0, 0, 0.2);
    transition: 
      box-shadow @transition-time ease, 
      transform @transition-time ease, 
      color @transition-time, 
      background @transition-time;
    .picture {
      width: ((@cwidth - 1rem));
      height: ((@cwidth - 1rem));
      margin-top: .5rem;
      margin-left: 0rem;
      transition: 
        margin-top @transition-time ease, 
        margin-left @transition-time ease, 
        width @transition-time ease, 
        height @transition-time ease;
    }
  }
  .picture {
    width: @cwidth;
    height: @cwidth;
    margin-bottom: .25rem;
    margin-left: -.5rem;
    transition: 
      margin-top @transition-time ease, 
      margin-left @transition-time ease, 
      width @transition-time ease, 
      height @transition-time ease;
    img {
      border-radius: .3rem .3rem 0 0;
    }
  }
  span {
    font-weight: bold;
    font-family: 'Discord Font';
    &.name {
      color: white;
      font-size: .8rem;
    }
  }
}
</style>
