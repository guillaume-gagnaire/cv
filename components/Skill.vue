<template>
  <div class="skill" :style="{ backgroundImage: `url(~assets/skills/${skill.slug}.png)` }">
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
  height: 150px;
  width: 150px;
  margin: 0 10px 10px 0;

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
    background: rgba(0, 0, 0, 0);
    -webkit-transition: all 200ms ease-in-out;
    -moz-transition: all 200ms ease-in-out;
    -ms-transition: all 200ms ease-in-out;
    -o-transition: all 200ms ease-in-out;
    transition: all 200ms ease-in-out;
    color: #333;
    font-weight: 300;

    &:hover {
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
    }

    span {
      padding: 5px;
    }
  }
}
</style>

