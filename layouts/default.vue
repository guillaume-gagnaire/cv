<template>
  <div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-145689749-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-145689749-1');
    </script>
    <main-header></main-header>
    <nuxt/>
  </div>
</template>

<script>
import MainHeader from "~/components/MainHeader.vue";

export default {
  components: { MainHeader }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,700|Cabin:300,400,600");
@import "@drewbot/sass-flexbox-grid/public/sass-flexbox/main.min.css";

html,
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}

* {
  -webkit-text-stroke: 0.3px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Cabin", sans-serif;
}
</style>
