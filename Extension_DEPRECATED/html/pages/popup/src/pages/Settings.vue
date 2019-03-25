<template>
  <div class="main">
    <div class="general section">
      <h2>General</h2>
      <div class="option" v-for="(option, index) of options" v-bind:key="option">
        <p class="left">{{ option.name }}</p>
        <div class="right">
          <input type="checkbox" class="cbx" :id="'cbx' + index" style="display:none" v-model="options[index].enabled"/>
          <label :for="'cbx' + index" class="toggle">
            <span>
              <svg width="10px" height="10px" viewBox="0 0 10 10">
                <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
              </svg>
            </span>
          </label>
        </div>
      </div>
    </div>
    <div class="presences section">
      <h2>Presences</h2>
    </div>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
      options: [
        {
          name: "Enabled",
          trigger: "enable",
          enabled: true,
        },
        {
          name: 'Media Controls',
          trigger: "media",
          enabled: true
        }
      ]
    };
  },
  mounted() {},
  methods: {
    openInNewTab(url) {
      let page = window.open(url, "_blank");
      win.focus();
    },
    log(src) {
      console.log(this.$data.options[src].enabled)
    }
  }
};
</script>

<style lang="less" scoped>
@import "./../stylesheets/colors.less";

.main {
  overflow: scroll;
  height: 73%;
  margin-top: .5rem;
  margin-left: .5rem;
}

h2 {
  font-family: 'Inter';
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: .2rem;
}

.section {
  background: @background-secondary;
  padding: .5rem;
  border-radius: .5rem;
  margin-bottom: .5rem;
}

p {
  color: gray;
  font-family: 'Inter';
  margin-block-start: .4rem;
  margin-block-end: .4rem;
}

.option {
  display: grid;
  grid-template-areas: "left right";
  margin-left: .5rem;
  .left {
    grid-area: left;
    justify-self: left;
  }
  .right {
    grid-area: right;
    justify-self: right;
    justify-content: center;
  }
}

.toggle {
  position: relative;
  display: block;
  margin-top: .3rem;
  width: 42px;
  height: 24px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transform: translate3d(0, 0, 0);
}
.toggle:before {
  content: "";
  position: relative;
  top: 1px;
  left: 1px;
  width: 2rem;
  height: 1.1rem;
  display: block;
  background: @background-primary;
  border-radius: 12px;
  transition: background 0.2s ease;
}
.toggle span {
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2rem;
  height: 1.2rem;
  display: block;
  background: white;
  border-radius: 50%;
  transition: all 0.2s ease;
}
.toggle span svg {
  padding-left: .01rem;
  margin-left: .28rem;
  margin-top: .273rem;
  fill: none;
}
.toggle span svg path {
  stroke: gray;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 24;
  stroke-dashoffset: 0;
  transition: all 0.5s linear;
}
.cbx:checked + .toggle:before {
  --accent: @accent-primary;
  background: var(--accent); // :style="'--accent: ' + presence.color + ';'"
}
.cbx:checked + .toggle span {
  transform: translateX(18px);
}
.cbx:checked + .toggle span path {
  --accent: @accent-primary;
  stroke: var(--accent);
  stroke-dasharray: 25;
  stroke-dashoffset: 25;
}

</style>
