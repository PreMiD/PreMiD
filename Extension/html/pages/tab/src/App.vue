<template>
  <div id="app">
    <header>
      <navigation/>
      <div class="shadow"></div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/layout/Navigation.vue";

export default {
  name: "premid-popup",
  components: {
    Navigation
  },
  data() {
    return {};
  },
  mounted() {
  }
};
</script>

<style lang="less">
@import "./stylesheets/colors.less";

body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  height: 100%;
  font-family: Roboto;
  background: #1a1b1e;
  overflow: hidden;
  color: @accent-primary;
}

.shadow {
  position: absolute;
  width: 100%;
  height: 0.25rem;
  margin-top: 0rem;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, .4) 0%, rgba(0, 0, 0, 0) 100%);
  z-index: 1000;
}

h3 {
  font-weight: normal;
}

a {
  text-decoration: none;
  color: @accent-primary;
  cursor: pointer;
}

button:focus {
  outline: none;
  cursor: pointer;
}

::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.6rem;
}

::-webkit-scrollbar-track {
  background: none;
  border: none;
  &:hover {
    background: @scroll-shade;
    border-radius: 0.3rem;
    transition: 500ms;
  }
}

::-webkit-scrollbar-thumb {
  background: @accent-primary;
  border-radius: 0.3rem;
  &:hover {
    background: @accent-secondary;
    transition: 700ms;
  }
}

::-webkit-scrollbar-corner {
  background: transparent;
}

img {
  user-select: none;
  -webkit-user-drag: none;
}
</style>
