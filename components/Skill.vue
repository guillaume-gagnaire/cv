<template>
  <div class="skill" :style="{ backgroundImage: `url(skills/${skill.slug}.png)` }">
    <div class="hover">
      <span>{{ skill.name }}</span>
    </div>
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
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  height: 120px;
  width: 120px;
  margin: 0 10px 10px 0;
  background: #fff no-repeat center center;
  background-size: cover;
  vertical-align: top;

  .hover {
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
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
    color: #000;
    font-weight: 700;

    span {
      padding: 0;
      opacity: 0;
      text-align: center;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }
}
</style>

