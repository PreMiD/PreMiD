<template>
  <div id="profile">
    <h1>{{username}}</h1>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    username: String
  },
  data() {
    return {};
  }
};
</script>
