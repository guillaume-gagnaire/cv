<template>
  <div class="skill" :style="{ backgroundImage: `url(~assets/skills/${skill.slug}.png)` }">
    <span>{{ skill.name }}</span>
  </div>
</template>

<script>
export default {
  props: ["skill"]
};
</script>

<style lang="scss">
.skill {
  display: -ms-inline-flexbox;
  display: -webkit-inline-flex;
  display: inline-flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: stretch;
  -ms-flex-line-pack: stretch;
  align-content: stretch;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  height: 150px;
  width: 150px;
}
</style>

