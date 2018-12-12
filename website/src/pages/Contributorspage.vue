<template>
  <div id="content">
    <profile username="Timeraa" />
    <img src="../assets/images/Timeraa.png">
  </div>
</template>

<script>
import Profile from '../components/ContributorProfile'

export default {
  name: 'Contributors',
  components: {Profile},
  head: {
    title: {inner: "Contributors"}
  }
}
</script>

<style scoped>
#content {
  text-align: center;
}

img {
  margin-top: 50px;
  width: 150px;
}

h1,
h2 {
  margin: 0;
}

h1 {
  font-weight: 900;
}

h2 {
  font-weight: 500;
  font-style: italic;
}
</style>
