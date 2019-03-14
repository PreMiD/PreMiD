<template>
  <div class="main">
    <title>PreMiD Installed</title>
    <center>
      <div class="info">
        <center><h2 class="title">Thank you for installing <span class="premid">PreMiD!</span></h2></center>
        <h2 class="subtitle">Did you install the application yet?</h2>
        <h2 class="subtitle">No? Follow these steps:</h2>
        <li v-for="step of steps" v-bind:key="step">{{ step }}</li>
        <h2 class="subtitle">Yes? You are ready to go!</h2>
        <p>Start by using one of our supported services and enjoy the sweet taste of coolness!</p>
        <center>
          <button class="start" title="YouTube" v-on:click="openInNewTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ')">Lets Start!</button>
          <button class="support" title="https://discord.gg/WvfVZ8T" v-on:click="openInNewTab('https://discord.gg/WvfVZ8T')">Get Support</button>
        </center>
      </div>
    </center>
  </div>
</template>

<script>

export default {
  name: "home",
  mounted() {},
  data() {
    return {
      steps: ["Open the installer and wait until it installed", "You may receive a warning about FireWall and SmartScreen (Its not a virus i promise!)","The application should start automatically, you can check this by looking at your Taskbar (Windows) or your Menubar (MacOS)"]
    };
  },
  methods: {
    openInNewTab(url) {
      let page = window.open(url, "_blank");
      win.focus();
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../stylesheets/colors.less";

.main {
  overflow: scroll;
  height: 83.3vh;
  padding: 1.5rem;
}

.info {
  text-align: left;
}

h2 {
  font-family: 'Inter';
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: .2rem;
}
.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.subtitle {
  font-weight: normal;
  color: lightgray;
}

.premid {
  font-family: 'Discord Font';
}

li {
  color: lightgray;
}

p {
  color: lightgray;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: 1rem;
}

.info {
  background: @background-secondary;
  border-radius: .5rem;
  width: fit-content;
  max-width: 30rem;
  padding: 1.5rem;
}

button {
  color: white;
  border: none;
  width: 48%;
  margin-left: .2rem;
  margin-right: .2rem;
  font-family: 'Inter';
  font-size: 1.1rem;
  height: 2.5rem;
  cursor: pointer;
  &.start {
    background: @accent-primary;
  }
  &.support {
    background: @background-primary;
  }
}
</style>
