<template>
  <div class="main">
    <center style="display: grid;">
      <center class="back">
        <img class="logo" src="./../../assets/images/logo.svg">
      </center>
      <div class="categories">
        <router-link
          :to="'/' + category.route"
          v-for="category of categories"
          v-bind:key="category"
          class="category"
        >
          <span class="category_title">{{ category.title }}</span>
        </router-link>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      categories: [
        {
          route: "Settings",
          title: "SETTINGS"
        },
        {
          route: "Share",
          title: "SHARE"
        },
        {
          route: "Credits",
          title: "CREDITS"
        }
      ]
    };
  }
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
  margin-top: .2rem;
  height: 3rem;
  width: 3rem;
}

.category {
  color: lightgray;
  .category_title {
    font-family: Inter;
    margin-left: .8rem;
    margin-right: .8rem;
  }
  &::after {
    content: '';
    width: 0px;
    height: 2px;
    background: white;
    transition: width .3s; // someone can figure out why this animation isn't working if they want to
  }
  &.router-link-active {
    color: white;
    transition: width .3s;
    border-bottom: 2px solid white;
    &::after {
      transition: width .3s;
      width: 5px;
    }
  }
}

.categories {
  margin-top: .2rem;
  margin-bottom: 2px;
}
</style>
