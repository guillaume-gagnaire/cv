<template>
  <header class="row" :class="{ 'flex-column': big, reverse: !big, big: big }">
    <nav class="col">
      <button @click="$refs.links.open()">
        <fa icon="bars"></fa>
      </button>
      <div class="links">
        <nav-link to="index">Home</nav-link>
        <nav-link to="resume">Resume</nav-link>
        <nav-link blank to="https://dev.to/heavynounours">Blog</nav-link>
        <nav-link to="contact">Contact me</nav-link>
      </div>
      <sweet-modal style="display: none" ref="links" width="100vw">
        <nav-link block @change="$refs.links.close()" to="index">Home</nav-link>
        <nav-link block @change="$refs.links.close()" to="resume">Resume</nav-link>
        <nav-link block @change="$refs.links.close()" blank to="https://dev.to/heavynounours">Blog</nav-link>
        <nav-link block @change="$refs.links.close()" to="contact">Contact me</nav-link>
      </sweet-modal>
    </nav>
    <main class="col">
      <div class="photo"></div>
      <div class="text">
        <h1 class="name">Guillaume Gagnaire</h1>
        <h2 class="title">Lead Developer at Digital'ize</h2>
      </div>
    </main>
  </header>
</template>

<script>
import NavLink from "./NavLink.vue";
import { SweetModal } from "sweet-modal-vue";

export default {
  components: { NavLink, SweetModal },
  computed: {
    big() {
      return this.$route.name === "index";
    }
  }
};
</script>

<style lang="scss">
header {
  nav {
    text-align: right;

    button {
      background: none;
      height: 32px;
      width: 32px;
      line-height: 32px;
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 4px;
      cursor: pointer;
      outline: none;
      margin: 7px;
      display: none;
    }
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
      color: rgba(0, 0, 0, 0.6);
      font-size: 15px;
      font-weight: 300;
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

      .text {
        padding: 0;
      }
    }
  }
}

@media screen and (max-width: 760px) {
  header {
    nav {
      flex-grow: 0 !important;

      .links {
        display: none;
      }

      button {
        display: inline-block;
      }
    }
  }
}
</style>

