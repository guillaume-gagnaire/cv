<template>
  <section class="container">
    <div v-for="(cat, i) in $store.state.cv.hard_skills" :key="i">
      <h2>{{ cat.name }}</h2>
      <skill v-for="(skill, key) in cat.skills" :key="key" :skill="skill"></skill>
    </div>
  </section>
</template>

<script>
import Skill from "~/components/Skill.vue";

export default {
  components: { Skill }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 960px;
  padding: 0 20px;
}
</style>

