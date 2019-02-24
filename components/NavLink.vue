<template>
  <span class="nav-link" :class="{ current: isCurrent, block: block }" @click="goto()">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    to: { type: String, required: true },
    block: { type: Boolean, default: false }
  },
  computed: {
    isCurrent() {
      return this.$route.name === this.to
    }
  },
  methods: {
    goto() {
      this.$router.push({ name: this.to });
      this.$emit('change');
    }
  }
}
</script>

<style lang="scss">
  $primaryColor: #03a9f4;

  .nav-link {
    display: inline-block;
    color: $primaryColor;
    padding: 6px 15px;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
    font-family: "Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif!important;

    &.current {
      color: #fff;
      background: $primaryColor;
    }

    &.block {
      display: block;
    }
  }
</style>

