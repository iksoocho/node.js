<template>
    <div>
        <button type="button" v-on:click="increaseCounter">Add + 1</button>
        <input v-model.number="num">
        <button type="button" @click="setCount(num, $event),msg()">Add + {{num}}</button>
        
        <p>The counter is  {{counter}}</p>
        <hr>

        <!-- 이벤트 버블링 -->
        <form @click="msg('form')">
            Form
            <div @click="msg('div')">
                Div
                <p @click="msg('p')">
                    P<a @click="msg('a')" href="http://www.naver.com">네이버</a>
                </p>
            </div>
        </form>

        <!-- 이벤트 버블링 제어 -->
        <form @click.self="msg('form')">
            Form
            <div @click="msg('div')">
                Div
                <p @click.stop="msg('p')">
                    P<a @click.prevent="msg('a')" href="http://www.naver.com">네이버</a>
                </p>
            </div>
        </form>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                num:0,
                counter:0
            }
        },
        methods:{
            increaseCounter(e){
                console.log(e);
                this.counter++;
            },
            setCount(value, event){
                console.log('setCount' , event)
                this.counter = this.counter + value;
            },   //함수만 있으면 핸들러를 대체하는 방식 ,, 함수()면 그냥 함수
            msg(msg){
                alert(`${msg} 선택`)
            },

        }
    }
</script>
<style>
    form, form *{
        margin: 10px;
        border: 1px solid;
    }
</style>
