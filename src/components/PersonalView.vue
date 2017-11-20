<template>
    <article id="personal">
        <h3>Intérêts personnels</h3>
        <ul>
            <li>Moto</li>
            <li>Musique (batteur principalement, mais également guitariste et bassiste)</li>
            <li>Jeux vidéos compétitifs</li>
            <li>Photographie</li>
            <li>Powerlifting, licencié <strong>FFForce</strong> (Fédération française de force athlétique)</li>
        </ul>
    </article>
</template>

<script>
    export default {
        name: 'personal-view',
        data () {
            return {

            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    article#personal {
        margin: 0px auto;
        max-width: 1340px;
        padding: 0px 20px 200px 20px;
        font-size: 18px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.8);

        h3 {
            font-weight: 300;
            font-size: 32px;
        }

        li {
            list-style: none;
            margin-bottom: 0.6em;

            &:before {
                content: '> ';
                color: #009688;
            }
        }

        strong {
            color: #009688;
        }
    }
</style>
