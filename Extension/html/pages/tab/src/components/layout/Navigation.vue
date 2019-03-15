<template>
  <div class="main">
    <center style="display: grid;">
      <center class="back">
        <img class="logo" src="./../../assets/images/logo.svg">
      </center>
    </center>
  </div>
</template>

<script>
export default {
  name: "navigation"
};
</script>

<style lang="less" scoped>
@import "./../../stylesheets/colors.less";

.main {
  background: @background-secondary;
  * {
    user-select: none;
  }
}
.back {
  background: @accent-primary;
}

.logo {
  margin-top: .3rem;
  height: 4rem;
  width: 4rem;
}
</style>
