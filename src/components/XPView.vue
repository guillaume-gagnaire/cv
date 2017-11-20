<template>
    <article id="xp">
        <h3>Expériences</h3>

        <experience position="Lead Developer" company="NAXXT" from="Juillet 2016" to="Toujours en poste" technologies="PHP 5, NodeJS, HTML 5, CSS 3, AngularJS, VueJS, MongoDB, AWS">
            Je suis responsable du développement de Naxxt, une Data Management Platform innovante. Nous gérons la communication de clients grands comptes en leur permettant d'analyser de façon précise le comportement de leurs clients, et ainsi, envoyer le bon message, au bon client, au bon moment, dans l'optique d'une fidélisation accrue de leurs clients.
        </experience>

        <experience position="Professeur" company="Sup de Pub Bordeaux" from="Septembre 2015" to="Juillet 2017" technologies="PHP 5">
            J'étais, pendant ces deux années, chargé de l'initiation au PHP des classes SP3 Digital, pour leur apprendre les bases de la logique, de la programmation, pour leur assurer une meilleure communication avec les développeurs qu'ils seront amenés à manager.
        </experience>

        <experience position="Lead Fullstack Developer" company="Nala Multimédia" from="Novembre 2013" to="Juillet 2016" technologies="Debian, PHP 5, Apache 2, MySQL, MongoDB, CSS 3, HTML 5, Javascript, Google Maps, Foundation 5, Open Street Map, Photon, Elasticsearch">
            J'étais responsable du développement du projet <a href="https://www.caramaps.com" target="_blank">Caramaps</a>, et je suis intervenu sur de nombreux autres projets en interne ou en prestation externe.
        </experience>

        <experience position="CTO / Co-founder" company="Urdoor SAS" from="Janvier 2013" to="Novembre 2013" technologies="Debian, OpenVZ, Apache 2, Nginx, PHP 5, MySQL, HTML 5, CSS 3, jQuery, Phonegap, Twilio, LemonWay, Google Maps">
            <ul>
                <li>Direction du pôle technique de la société, en choisissant les solutions techniques à utiliser / développer, en gérant les équipes techniques internes et externes.</li>
                <li>Développement du framework principal du projet.</li>
                <li>Développement des API JSON pour les applications mobiles, ainsi que pour les partenaires B2B.</li>
                <li>Mise en place d'un cloud privé sur le serveur dédié (Debian)</li>
                <li>Gestion de la montée en charge en optimisant les requêtes, la sortie client et minimisation de l'impact des visiteurs sur le système.</li>
                <li>Cloisonner chaque applicatif pour éviter des crashs généraux en cas de surcharge.</li>
                <li>Conception de tout l'espace e-commerce en fonction des besoins spécifiques à la logistique du projet</li>
                <li>Formation du personnel à l'utilisation des outils de UrDoor (applications mobiles livreurs, applications web dispatching, gestion de l'emploi du temps …)</li>
                <li>Développement du serveur vocal avec Twilio</li>
                <li>Sécurisation serveur et applicatif</li>
                <li>Implémentation de la solution Lemonway</li>
            </ul>
        </experience>

        <experience position="Lead Developer" company="SeoBeach" from="Septembre 2012" to="Avril 2013" technologies="PHP 5, HTML 5, CSS 3, jQuery, Debian, Apache 2, MySQL">
            <ul>
                <li>Conception et développement d'un assistant virtuel au référencement On-Page, Off-site, local et naturel des sites internet.</li>
                <li>Intégration de la charte graphique fournie par le graphiste du projet.</li>
                <li>Administration système et installation d'un système LAMP sur un serveur dédié Debian.</li>
            </ul>
        </experience>

        <experience position="Lead Developer, Consultant PHP 5" company="Fonxio" from="Février 2012" to="Décembre 2012" technologies="PHP 5, HTML 5, CSS 3, jQuery, Twilio, Ogone">
            <ul>
                <li>Développement d'une solution complète de paiement par CB entre particuliers, par le biais d'un serveur vocal.</li>
                <li>Développement du site vitrine</li>
                <li>Développement de l'espace clients</li>
                <li>Développement d'un backoffice pour le centre d'appels</li>
                <li>Développement de différents serveurs vocaux sous Twilio (Acheteur, Vendeur, Service clients)</li>
                <li>Consulting et conseil après la finalisation du système pour les évolutions du projet.</li>
            </ul>
        </experience>

        <experience position="Lead Developer" company="Seoizi" from="Mars 2012" to="Octobre 2012" technologies="PHP 5, HTML 5, CSS 3, Wordpress, Tumblr">
            <ul>
                <li>Conception et développement d'un outil d'automatisation de référencement internet.</li>
                <li>Gestion d'un réseau de serveurs et d'outils web pour la publication de communiqués de presse.</li>
                <li>Installation d'un serveur dédié Debian avec LAMP.</li>
                <li>Développement d'outils de Spinning automatique</li>
            </ul>
        </experience>

        <experience position="Lead Developer" company="Rent A Bike In France" from="Avril 2012" to="Mai 2012" technologies="PHP 5, HTML 5, CSS 3, jQuery, Google Maps">
            <ul>
                <li>Développement d'un annuaire de magasins de location de vélos en France.</li>
                <li>Optimisation SEO du site.</li>
            </ul>
        </experience>

        <experience position="Développeur PHP 5, R&D" company="Rudy Som" from="Avril 2011" to="Août 2011" technologies="PHP 5, jQuery">
            <ul>
                <li>Développement de classes outils d'assistance au référencement</li>
                <li>R&D dans le domaine de la réécriture dynamique de contexte, appliqué pour un réseau de partage de contenu visuel sur plusieurs domaines, dans le but final d'éviter le Duplicate Content de Google.</li>
                <li>Développement d'outils d'analyse de Content Spinning.</li>
                <li>Développement d'un site de streaming vidéo.</li>
            </ul>
        </experience>
    </article>
</template>

<script>
    import Experience from './Experience.vue'

    export default {
        name: 'experiences-view',
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
    article#xp {
        margin: 0px auto 200px auto;
        max-width: 1340px;
        padding: 0 20px;

        h3 {
            font-weight: 300;
            font-size: 32px;
        }



    }
</style>
