<template>
    <article id="skills">
        <h3>Compétences</h3>

        <h4>Back-end</h4>
        <skill name="PHP" icon="src/assets/techs/php.png" rate="19"></skill>
        <skill name="NodeJS" icon="src/assets/techs/nodejs.png" rate="13"></skill>
        <skill name="MySQL" icon="src/assets/techs/mysql.png" rate="18"></skill>
        <skill name="MongoDB" icon="src/assets/techs/mongodb.png" rate="18"></skill>

        <h4>Front-end</h4>
        <skill name="HTML 5" icon="src/assets/techs/html5.png" rate="19"></skill>
        <skill name="CSS 3" icon="src/assets/techs/css3.png" rate="19"></skill>
        <skill name="JS" icon="src/assets/techs/js.png" rate="18"></skill>
        <skill name="jQuery" icon="src/assets/techs/jquery.png" rate="18"></skill>
        <skill name="AngularJS" icon="src/assets/techs/angularjs.png" rate="17"></skill>
        <skill name="VueJS" icon="src/assets/techs/vuejs.png" rate="12"></skill>

        <h4>Mobile</h4>
        <skill name="Ionic" icon="src/assets/techs/ionic.jpg" rate="10"></skill>

        <h4>Software</h4>
        <skill name="C" icon="src/assets/techs/c.png" rate="10"></skill>
        <skill name="C++" icon="src/assets/techs/cpp.png" rate="10"></skill>
        <skill name="Qt" icon="src/assets/techs/qt.png" rate="5"></skill>

        <h4>Administration système</h4>
        <skill name="Debian" icon="src/assets/techs/debian.png" rate="15"></skill>
        <skill name="Apache 2" icon="src/assets/techs/apache.png" rate="18"></skill>
        <skill name="Nginx" icon="src/assets/techs/nginx.png" rate="18"></skill>
        <skill name="OpenVZ" icon="src/assets/techs/openvz.png" rate="15"></skill>
        <skill name="AWS" icon="src/assets/techs/aws.png" rate="10"></skill>

        <h4>Services & API</h4>
        <skill name="Twilio" icon="src/assets/techs/twilio.png" rate="17"></skill>
        <skill name="Paypal" icon="src/assets/techs/paypal.png" rate="17"></skill>
        <skill name="Ogone" icon="src/assets/techs/ogone.jpg" rate="17"></skill>
        <skill name="Lemonway" icon="src/assets/techs/lemonway.png" rate="15"></skill>

        <h4>Autres</h4>
        <skill name="Git" icon="src/assets/techs/git.png" rate="16"></skill>
        <skill name="Photoshop" icon="src/assets/techs/photoshop.png" rate="12"></skill>
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
        margin: 0px auto 200px auto;
        max-width: 1340px;
        padding: 0 20px;

        h3 {
            font-weight: 300;
            font-size: 32px;
        }

        h4 {
            font-weight: 700;
            border-bottom: 1px solid #e6e6e6;
            padding: 10px 0 10px 0;
        }
    }
</style>
