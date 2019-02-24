<template>
  <section class="container">
    <div class="div"></div>
    <home-block title="Current projects" icon="briefcase" color="#3f51b5">
      I am working at Digital'ize as lead developer, and taking time to think about @BackStart.
    </home-block>
    <home-block title="About me" icon="user" color="#9c27b0">
      <p>I am a fullstack developer mostly in the startup world, providing advice to startups and tools for developers.</p>
      <p>Motivated by a constant need to learn and teach, I want to pull others up to train tomorrow's next generation, focusing on well-being and caring.</p>
    </home-block>
    <home-block title="Passions" icon="heart" color="#d32f2f">
      I am an amateur <a href="https://500px.com/guillaume-gagnaire" target="_blank">photographer</a> and highly passionate about motorcycles.
    </home-block>
  </section>
</template>

<script>
import HomeBlock from '~/components/HomeBlock.vue';

export default {
  components: { HomeBlock }  
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 0 auto;
    max-width: 520px;

    .div {
      background: #d0d0d0;
      height: 1px;
      margin: 1em 0;
    }
  }
</style>

