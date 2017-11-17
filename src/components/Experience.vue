<template>
    <div class="experience">
        <div class="header" layout="row" layout-align="center center">
            <div flex="grow">
                <span class="position">{{ position }}</span> @ <span class="company">{{ company }}</span>
            </div>
            <div class="duration">
                {{ from }} - {{ to }}
            </div>
        </div>
        <div class="desc">
            <slot></slot>
        </div>
        <div class="footer" v-html="tagsHtml">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'experience',
        props: {
            position: String,
            company: String,
            from: String,
            to: String,
            technologies: String
        },
        data () {
            return {

            }
        },
        methods: {
        },
        computed: {
            tagsHtml: function() {
                var final = [];
                var tags = this.technologies.split(',');

                for (var i = 0; i < tags.length; i++) {
                    final.push(tags[i].trim());
                }

                return '<ul class="technologies"><li>' + final.join('</li><li>') + '</li></ul>';
            }
        }
    }
</script>
<style lang="scss">
    .experience {

        .header {
            background: #37474F;
            padding: 30px 35px;
            color: rgba(255, 255, 255, 0.5);
            font-weight: 300;
            font-size: 22px;

            .position {
                color: #fff;
                font-weight: 700;
            }

            .duration {
                margin-left: 20px;
                font-size: 14px;
            }
        }

        .desc {
            color: #fff;
            font-size: 18px;
            background: #009688;
            padding: 50px 50px 30px 50px;
            border-left: 35px solid #00796B;

            ul {
                margin: 0;
                padding: 0;

                li {
                    list-style: none;

                    &:before {
                        content: '> ';
                    }
                }
            }
        }

        .footer {
            background: #009688;
            padding: 10px 10px 10px 50px;
            border-left: 35px solid #00796B;

            ul {
                margin: 0;
                padding: 0;

                li {
                    list-style: none;
                    color: #009688;
                    background: #fff;
                    display: inline-block;
                    margin: 0 10px 10px 0;
                    padding: 5px 8px;
                    -webkit-border-radius: 50px;
                    -moz-border-radius: 50px;
                    border-radius: 50px;
                    font-size: 14px;
                }
            }
        }
    }
</style>
