<template>
  <div id="content">
    <div class="col s12 m4 center">
      <span style="font-size:8rem;"><font-awesome-icon icon="exclamation-triangle" /></span><br>
      <h1>404 Not Found</h1>
      <p>The page you tried to request does not exist.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "404 Not Found",
  head: {
    title: { inner: "404 Not Found" }
  }
};
</script>