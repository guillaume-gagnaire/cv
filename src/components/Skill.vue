<template>
    <div class="skill">
        <div layout="row" layout-align="start center">
            <div class="icon" layout="column" layout-align="center center">
                <img :src="icon" :alt="name" />
            </div>
            <div class="name" flex="grow">
                {{ name }}
            </div>
            <div class="rate">
                <div v-bind:style="{width: (parseInt(rate) / 20 * 100) + '%'}">
                    {{ rate }}/20
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'skill',
        props: {
            name: String,
            icon: String,
            rate: String
        },
        data () {
            return {

            }
        },
        methods: {
        }
    }
</script>
<style lang="scss">
    .skill {
        max-width: 100%;
        width: 285px;
        display: inline-block;
        margin-right: 30px;
        vertical-align: top;

        > div {
            height: 80px;
        }

        .icon {
            width: 40px;
            height: 50px;
            font-size: 32px;
            text-align: center;
            margin-right: 15px;

            img {
                max-width: 40px;
                max-height: 40px;
            }
        }

        .name {
            font-weight: 300;
        }

        .rate {
            width: 150px;
            height: 25px;
            position: relative;
            overflow: hidden;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            border-radius: 5px;
            background: #eee;

            > div {
                position: absolute;
                top: 0;
                left: 0;
                background: #009688;
                height: 25px;
                text-align: center;
                line-height: 25px;
                color: #fff;
                font-size: 12px;
            }
        }
    }
</style>
