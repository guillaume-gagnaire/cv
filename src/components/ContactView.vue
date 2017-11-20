<template>
    <article id="contact">
        <h3>Contactez-moi !</h3>

        <ul>
            <li><strong>Par email :</strong> contact (at) guillaume-gagnaire.com</li>
            <li><strong>Par téléphone :</strong> +33 (0)6 52 35 18 22</li>
        </ul>

    </article>
</template>

<script>
    export default {
        name: 'contact-view',
        data () {
            return {

            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    article#contact {
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
