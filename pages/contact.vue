<template>
  <section class="container">
    <p>
      You can contact me in different ways ...
    </p>
    <home-block title="Email" icon="at" color="#03a9f4">
      contact(at)guillaume-gagnaire.dev
    </home-block>
    <home-block title="Phone" icon="phone" color="#03a9f4">
      +33 (0)6 52 35 18 22
    </home-block>
    <home-block title="This form" :icon="['fab', 'wpforms']" color="#03a9f4">
      <form name="contact" netlify>
        <p>
          <label>Your Name*: <input required type="text" name="name" /></label>   
        </p>
        <p>
          <label>Your Email*: <input required type="email" name="email" /></label>
        </p>
        <p>
          <label>Your Phone: <input type="phone" name="phone" /></label>
        </p>
        <p>
          <label>Message*: <textarea required name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
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
  $primaryColor: #03a9f4;

  .container {
    margin: 0 auto;
    max-width: 520px;

    form {
      label {
        font-size: 14px;
      }

      input, textarea {
        border: 1px solid #ccc;
        display: block;
        width: 100%;
        padding: 6px 12px;
        margin: 0.5em 0 1.5em 0;
        font-size: 18px;
        font-weight: 300;
      }

      textarea {
        height: 150px;
      }

      button {
        color: #fff;
        background: $primaryColor;
        border: none;
        padding: 6px 15px;
        font-size: 15px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
</style>

