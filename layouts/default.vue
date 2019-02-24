<template>
  <div>
    <main-header></main-header>
    <nuxt/>
  </div>
</template>

<script>
  import MainHeader from '~/components/MainHeader.vue';

  export default {
    components: { MainHeader }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans|Cabin:300,400,600');
  @import '@drewbot/sass-flexbox-grid/public/sass-flexbox/main.min.css';

  html, body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Cabin", sans-serif;
  }
</style>
