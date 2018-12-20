<template>

</template>
<script>
export default {
  name: "Feet",
  mounted(){
    let scrr = document.createElement('script');
    scrr.innerHTML = "window.onload = function(){document.querySelector('meta[name=\"og:title\"]').content = document.title.replace(' - PreMiD', '');}";
    document.head.appendChild(scrr);
  }
};
 </script>
