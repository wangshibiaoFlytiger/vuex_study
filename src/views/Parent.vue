<template>
    <div class="parent">
        <h3>这里是父组件</h3>
        <button type="button" @click="clickHandler">修改自己文本</button>
        <button type="button" @click="clickHandler2">修改子组件文本</button>
        <div>Test: {{msg}}</div>
        <child></child>
    </div>
</template>

<script>
    import Child from './Child.vue'
    import {CHANGE_CHILD_TEXT, CHANGE_TEST_MSG} from "../store/mutation-types";

    export default {
        name: "Parent",
        computed: {
            msg(){
                return this.store.state.module1.testMsg;
            }
        },
        methods:{
            clickHandler(){
                this.store.commit(CHANGE_TEST_MSG, '父组件修改自己后的文本a')
            },
            clickHandler2(){
                this.store.commit(CHANGE_CHILD_TEXT, '父组件修改子组件后的文本a')
            }
        },
        components:{
            'child': Child
        }
    }
</script>

<style scoped>
    .parent{
        background-color: #00BBFF;
        height: 400px;
    }
</style>
