<template>
    <article id="schools">

        <h3>Formations</h3>

        <experience position="EPITECH" company="Toulouse" from="Septembre 2009" to="Juillet 2011" technologies="C, C++, Project Management">
            Durant ces deux années passées à EPITECH Toulouse, j'ai appris de solides bases en project management, et acquis des compétences en programmation système.<br /><br />
            Mais parce que le programme avait été soudainement éloigné des technologies web, et parce que j'ai toujours cru en la pérénisation des technologies web, j'ai choisi d'écourter ce cursus et me lancer dans l'entreprenariat.
        </experience>

        <experience position="Baccalauréat scientifique" company="Lycée Victor Duruy, Bagnères de Bigorre (65)" from="Septembre 2005" to="Juin 2009" technologies="Option Sciences de l'Ingénieur">
            <ul>
                <li>Responsable du club informatique</li>
                <li>Expérience au sein de la radio du lycée</li>
                <li>Membre du groupe de musique du lycée</li>
            </ul>
        </experience>


    </article>
</template>

<script>
    import Experience from './Experience.vue'

    export default {
        name: 'schools-view',
        data () {
            return {

            }
        },
        components: {
            Experience
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    article#schools {
        margin: 0px auto 200px auto;
        max-width: 1340px;
        padding: 0 20px;

        h3 {
            font-weight: 300;
            font-size: 32px;
        }



    }
</style>
