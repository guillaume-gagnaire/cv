<template>
  <div class="home-block row">
    <aside class="col">
      <div class="icon" :style="{ backgroundColor: color }">
        <fa :icon="icon"></fa>
      </div>
    </aside>
    <div class="content col">
      <h3>{{ title }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    icon: { type: String, required: true },
    color: { type: String, required: true }
  },
  computed: {
    isCurrent() {
      return this.$route.name === this.to
    }
  },
  methods: {
    goto() {
      this.$router.push({ name: this.to });
    }
  }
}
</script>

<style lang="scss">
  .home-block {
    margin: 40px 0;

    aside {
      flex-grow: 0 !important;

      .icon {
        width: 46px;
        height: 46px;
        color: #fff;
        line-height: 46px;
        text-align: center;
        border-radius: 46px;
        font-size: 20px;
      }
    }
    .content {
      font-size: 18px; 

      h3 {
        margin: 0 0 10px 0;
        font-size: 22px;
      }
    }
  }
</style>

