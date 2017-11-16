<template>
    <article id="skills">
        <h3>Compétences</h3>

        <h4>Back-end</h4>
        <skill name="PHP" icon="fab fa-" rate="19"></skill>
        <skill name="NodeJS" icon="fab fa-node-js" rate="13"></skill>
        <skill name="MySQL" icon="fab fa-" rate="18"></skill>
        <skill name="MongoDB" icon="fab fa-" rate="18"></skill>

        <h4>Front-end</h4>
        <skill name="HTML 5" icon="fab fa-html5" rate="19"></skill>
        <skill name="CSS 3" icon="fab fa-css3" rate="19"></skill>
        <skill name="JS" icon="fab fa-js" rate="18"></skill>
        <skill name="jQuery" icon="fab fa-" rate="18"></skill>
        <skill name="AngularJS" icon="fab fa-" rate="17"></skill>
        <skill name="VueJS" icon="fab fa-vuejs" rate="12"></skill>

        <h4>Mobile</h4>
        <skill name="Ionic Framework" icon="fab fa-" rate="10"></skill>

        <h4>Système</h4>
        <skill name="C++" icon="fab fa-" rate="10"></skill>
        <skill name="Qt" icon="fab fa-" rate="5"></skill>

        <h4>Administration système</h4>
        <skill name="Debian" icon="fab fa-" rate="15"></skill>
        <skill name="Apache 2" icon="fab fa-" rate="18"></skill>
        <skill name="Nginx" icon="fab fa-" rate="18"></skill>
        <skill name="OpenVZ" icon="fab fa-" rate="15"></skill>
        <skill name="AWS" icon="fab fa-aws" rate="10"></skill>

        <h4>Services & API</h4>
        <skill name="Twilio" icon="fab fa-" rate="17"></skill>
        <skill name="Paypal" icon="fab fa-paypal" rate="17"></skill>
        <skill name="Ogone" icon="fab fa-" rate="17"></skill>
        <skill name="Lemonway" icon="fab fa-" rate="15"></skill>

        <h4>Autres</h4>
        <skill name="Adobe Photoshop" icon="fab fa-" rate="12"></skill>
        <skill name="3Ds Max" icon="fab fa-" rate="7"></skill>
        <skill name="Vue Infinite" icon="fab fa-" rate="5"></skill>
    </article>
</template>

<script>
    import Skill from './Skill.vue'

    export default {
        name: 'skills-view',
        data () {
            return {
            }
        },
        components: {Skill},
        methods: {

        }
    }
</script>
<style lang="scss">
    article#skills {
        margin: 200px auto;
        max-width: 1290px;
        padding: 0 20px;

        h3 {
            font-weight: 300;
            font-size: 32px;
        }

        h4 {
            font-weight: 300;
            border-bottom: 1px solid #e6e6e6;
            padding: 10px 0 10px 0;
        }
    }
</style>
