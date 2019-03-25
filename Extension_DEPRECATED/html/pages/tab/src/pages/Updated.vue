<template>
  <div class="main">
    <title>PreMiD Updated</title>
    <h2>Updated PreMiD!</h2>
  </div>
</template>

<script>
import request from "request";

export default {
  name: "contributors",
  data() {
    return {
      changelog: [
        {
          version: "1.1",
          summary: "FOO BAR ASDASDSDASDASDSDASDASD",
          points: ["foo", "bar", "hello", "world"]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "./../stylesheets/colors.less";

.main {
  padding: 1.5rem;
  overflow: scroll;
  height: 83.3vh;
}

h2 {
  font-family: 'Inter';
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-bottom: .2rem;
}
</style>
