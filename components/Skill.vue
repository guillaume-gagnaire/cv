<template>
  <div class="skill" :style="{ backgroundImage: `url(skills/${skill.slug}.png)` }">
    <div class="hover">
      <span>{{ skill.name }}</span>
    </div>
    <div class="level">{{ skill.level }}</div>
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
  height: 127px;
  width: 127px;
  margin: 0 10px 10px 0;
  background: #fff no-repeat center center;
  background-size: cover;
  vertical-align: top;
  position: relative;

  .level {
    position: absolute;
    color: rgba(0, 0, 0, 0.5);
    font-size: 10px;
    top: -1px;
    text-transform: uppercase;
    font-weight: 700;
  }

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
      position: relative;
      top: 5px;
      opacity: 0;
      text-align: center;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    &:hover {
      span {
        opacity: 1;
      }
    }
  }
}
</style>
