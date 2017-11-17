<template>
    <div id="app">
        <header-view></header-view>
        <intro-view></intro-view>
        <skills-view></skills-view>
        <experiences-view></experiences-view>
    </div>
</template>

<script>
    import HeaderView from './HeaderView.vue'
    import IntroView from './IntroView.vue'
    import SkillsView from './SkillsView.vue'
    import ExperiencesView from './XPView.vue'

    export default {
        name: 'app',
        props: ['sharedState'],
        data () {
            return {

            }
        },
        components: {
            HeaderView,
            IntroView,
            SkillsView,
            ExperiencesView
        }
    }
</script>
<style lang="scss">
    @import '../scss/main';

    * {
        font-family: 'Roboto', sans-serif;
    }

    body, html {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    
    a {
        color: inherit;
        text-decoration: none;
    }
    
    a:hover {
        text-decoration: underline;
    }
</style>
