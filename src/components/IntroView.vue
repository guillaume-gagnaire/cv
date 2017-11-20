<template>
    <article id="intro">
        <img src="src/assets/photo.jpg" />
        Depuis mes 15 ans, et d'autant plus après mes études à <strong>EPITECH Toulouse</strong>, j'ai participé à la création de nombreuses entreprises et projets,
        en dirigeant l'aspect technique de ceux-ci.<br /><br />
        Après ces années d'expérience en tant que freelance ou associé, je suis désormais Lead developer chez <strong>NAXXT</strong>, à <strong>Bordeaux</strong>, où je suis en charge du développement de cette <strong>Data Management Platform</strong>.
    </article>
</template>

<script>
    export default {
        name: 'intro-view',
        data () {
            return {

            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    article#intro {
        margin: 0px auto;
        max-width: 1340px;
        padding: 200px 20px;
        font-size: 26px;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.8);

        img {
            width: 200px;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
            margin: 0 40px 40px 0;
            float: left;
        }

        strong {
            color: #009688;
        }
    }
</style>
