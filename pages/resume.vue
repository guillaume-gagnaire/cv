<template>
  <section class="container">
    <div v-for="(cat, i) in $store.state.cv.hard_skills" :key="i">
      <skill-header :title="cat.name" :slug="cat.slug"></skill-header>
      <skill v-for="(skill, key) in cat.skills" :key="key" :skill="skill"></skill>
    </div>
  </section>
</template>

<script>
import Skill from "~/components/Skill.vue";
import SkillHeader from "~/components/SkillHeader.vue";

export default {
  components: { Skill, SkillHeader }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  max-width: 960px;
  padding: 0 20px;
}
</style>

