<template>
  <header layout="column" layout-align="center center">
    <h1><span>Guillaume</span> GAGNAIRE</h1>
    <h6>aka. <a href="https://github.com/heavynounours" target="_blank"><i class="fab fa-github"></i> HeavyNounours</a></h6>
    <h2>Lead Web Developer à <address><i class="fa fa-map-marker-alt"></i> Bordeaux, France</address></h2>
    <div class="icon-down" v-scroll-to="'#intro'">
      <i class="fa fa-angle-double-down"></i>
    </div>
  </header>
</template>

<script>
    export default {
        name: 'header-view',
        data () {
            return {

            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
  header {
    height: 100%;
    height: 100vh;
    background: #009688;
    color: #fff;
    position: relative;

    h1 {
      font-weight: 700;
      margin: 0;
      font-size: 42px;

      span {
        font-weight: 300;
      }
    }

    h6 {
      margin: 0;
      font-size: 26px;
      font-weight: 300;
    }

    h2 {


      address {
        display: inline-block;
        font-style: normal;
        padding: 5px 8px;
        background: rgba(255, 255, 255, 0.2);
      }
    }

    .icon-down {
      margin: 0 0 0 -50px;
      font-size: 32px;
      text-align: center;
      width: 100px;
      position: absolute;
      bottom: 0;
      left: 50%;
      -webkit-transition: all 400ms ease-out;
      -moz-transition: all 400ms ease-out;
      -ms-transition: all 400ms ease-out;
      -o-transition: all 400ms ease-out;
      transition: all 400ms ease-out;
      cursor: pointer;
      padding: 20px 0;

      &:hover {
        padding: 35px 0 5px 0;
      }
    }
  }
</style>
