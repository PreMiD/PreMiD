<template>
  <div id="content">
    <img draggable="false" src="../assets/images/logo.png">
    <h1>PreMiD</h1>
    <h2>Discord Rich Presence for your Media!</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  head: {
    title: {inner: "About"}
  },
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
