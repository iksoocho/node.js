<template>
    <div>
        <!-- 같은 데이터를 처리하는 두가지 방식 -->
        <h1>{{title+' !!!'}}</h1>  <!--태그 사이에 {{}} => javascript 영역 -->
        <h2 v-bind:name=" 'sample' "   v-text="title" />  <!--  -->
        <p v-html="tagList" />   <!-- 태그를 인식 시키려면 html 써야됨 -->
        <p v-text="tagList" />   <!-- 태그를 인식 못하고 그대로 출력 -->
        <hr>
        <input type="text" v-model="valueModel">
        <p>{{typeof valueModel}}</p>
        <input type="number" v-model.lazy="numberModel">
        <p>{{numberModel+10000}}</p>
        <select v-model="selectModel">
            <option value="summer">여름</option>
            <option value="winter">겨울</option>
        </select>
        <p>{{selectModel}}</p>
        <textarea v-model="textModel" />
        <p>{{textModel}}</p>
        <hr>
        <input type="checkbox" v-model="chData" true-value="여" false-value="부">
        <p>{{chData}}</p>
        <div>
            <input type="checkbox" value="서울" v-model="city">서울
            <input type="checkbox" value="대구" v-model="city">대구
            <input type="checkbox" value="부산" v-model="city">부산
            <p>{{city}}</p>
        </div>

    </div>
</template>

<script>
    //component가 가져야할 속성들 정의
    export default{
        data(){
            return{
                title : 'Hello, Vue.js',
                tagList : '<strong>Today is ...</strong>',
                valueModel : 'Korea',
                numberModel : 0,
                selectModel : 'winter',
                textModel : '콘크리에이트',
                chData : '',
                city : []
            }
        }
    }
</script>
