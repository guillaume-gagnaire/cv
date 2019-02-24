<template>
  <header class="row" :class="{ 'flex-column': big, reverse: !big, big: big }">
    <nav class="col">
      <nav-link to="index">Home</nav-link>
      <nav-link to="resume">Resume</nav-link>
      <nav-link to="blog">Blog</nav-link>
      <nav-link to="contact">Contact me</nav-link>
    </nav>
    <main class="col">
      <div class="photo"></div>
      <div class="text">
        <h1 class="name">
          Guillaume Gagnaire
        </h1>
        <h2 class="title">
          Lead Developer at Digital'ize
        </h2>
      </div>
    </main>
  </header>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  components: { NavLink },
  data() {
    return {
      
    }
  },
  computed: {
    big() {
      return this.$route.name === 'index'
    }
  }
}
</script>

<style lang="scss">
  header {
    nav {
      text-align: right;
    }

    main {
      .photo {
        display: inline-block;
        vertical-align: middle;
        height: 48px;
        width: 48px;
        border-radius: 48px;
        background: url(~assets/photo.jpg) no-repeat center center;
        background-size: cover;
      }

      .text {
        display: inline-block;
        vertical-align: middle;
        padding: 0 0 0 16px;
      }

      .name {
        font-size: 22px;
        margin: 0;
      }

      .title {
        color: #aaa;
        font-size: 15px;
        margin: 0;
      }
    }

    &.big {
      main {
        text-align: center;

        .photo {
          height: 80px;
          width: 80px;
          border-radius: 80px;
          display: block;
          margin: 0 auto;
        }

        .name {
          font-size: 3em;
          font-weight: 600;
          margin: 10px 0;
        }

        .title {
          font-size: 20px;
          font-weight: 300;
        }
      }
    }
  }
</style>

