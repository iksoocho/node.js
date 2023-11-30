<template>
    <div>
        <label><input type="text" v-model="msg" placeholder="component test"></label>
        <p>{{msg}}</p>
    </div>
</template>

<script>
    export default {
        name : 'VueComponent',   //없어도 상관 없지만 관례적으로 이름 부여
        data(){                    //component가 관리하는 data
            return{
                msg:'2023-11-30'
            }
        }
    }

</script>

<!--scoped 속성 >  해당 component에만 스타일 적용-->
<style scoped>  
    p{
        background-color: burlywood; 
    }
</style>
