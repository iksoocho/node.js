<template>
    <div>
    <PageTitle title="Hello, World!"/>
    <!-- <PageContent :title="header" :count="10" :writer="['Adward']" :regdate="'2023-12-05'" :content="{first : 'Node.js', second : 'vue.js'}"/>  넘기는게 단순 문자열이 아닌 나머지 ex)숫자 배열 객체 등등 이면 v-bind 를 연결해서 사용해야됨 -->
    <PageContent :="info" @update-info="handler" />  <!--게시글 정보 처럼 통으로 정보가 넘어 올떄는 한번에 넘길수도 있음-->
    <RefCom ref="child"/>    <!--ref는 사실 html 태그를 제어 하기 위한 것 > 강제 이벤트 발생을 위해 사용하기도 한다-->
    <button @click="childHandler">자식제어</button>
</div>
</template>

<script>
import PageTitle from './PageTitle.vue'    //자식 component 들고 오기 위해 임포트 
import PageContent from './PageContent.vue'
import RefCom from './RefComponent.vue'

export default {
    data(){
        return{
            header : '새로운 글',
            info : {
                title : 'Today is',
                count : 10,
                writer : 'Adward',
                regdate : '2023-12-05',
                content : '내용 없음'
            }
        }
    },
    components : {          //components > 자식 component  들고옴
        PageTitle,
        PageContent,
        RefCom    

    },
    methods : {
        handler(value){
            alert(value)
        },
        childHandler(){
            // this.$refs.child.content = '부모가 보내는 데이터';
            // this.$refs.child.plusCount();     //자식 component의 methods도 사용가능
            this.$refs.child.$refs.cBtn.click();  
        }
    }
}
</script>

<style>

</style>