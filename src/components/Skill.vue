<template>
    <div class="skill">
        <div layout="row" layout-align="start center">
            <div class="icon">
                <i :class="icon"></i>
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
        width: 300px;
        display: inline-block;
        margin-right: 30px;

        > div {
            height: 50px;
        }

        .icon {
            width: 40px;
            font-size: 32px;
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
