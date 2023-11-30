<template>
    <div>

    </div>
</template>


<script>
    
    
    export default{
        components : [],   //자식 component 등록
        data(){            //
            return{
                today : new Date()
            }
        },
        computed : {
            AfterYear(){
                return this.today.setFullYear(this.today.getFullYear()+1);
            }
        },

        methods:{
            
        },
        watch : {},
        created(){},
        mounted(){}
    }
</script>


<style>

</style>