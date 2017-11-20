<template>
    <div id="app">
        <header-view></header-view>
        <intro-view></intro-view>
        <skills-view></skills-view>
        <experiences-view></experiences-view>
        <schools-view></schools-view>
        <personal-view></personal-view>
        <contact-view></contact-view>
    </div>
</template>

<script>
    import HeaderView from './HeaderView.vue'
    import IntroView from './IntroView.vue'
    import SkillsView from './SkillsView.vue'
    import ExperiencesView from './XPView.vue'
    import SchoolsView from './SchoolsView.vue'
    import PersonalView from './PersonalView.vue'
    import ContactView from './ContactView.vue'

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
            ExperiencesView,
            SchoolsView,
            PersonalView,
            ContactView
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
