<template>
  <div class="skill-header" :style="{ backgroundImage: `url(/skills/${slug}.png)` }">
    <div class="hover">
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "slug"]
};
</script>

<style lang="scss">
.skill-header {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
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
  height: 130px;
  width: 100%;
  margin: 30px 0 10px 0;
  background: #fff no-repeat center center;
  background-size: cover;

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
    -webkit-justify-content: flex-start;
    -ms-flex-pack: flex-start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.7);
    font-weight: 300;

    span {
      padding: 20px;
      font-size: 32px;
      font-weight: 500;
      background: #fff;
      color: #000;
    }
  }
}
</style>

