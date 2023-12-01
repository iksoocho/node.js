<template>
    <div>
        <!-- 같은 데이터를 처리하는 두가지 방식 -->
        <h1>{{title+' !!!'}}</h1>  <!--태그 사이에 {{}} => javascript 영역 -->
        <h2 v-bind:name=" 'sample' "   v-text="title" />  <!--  -->
        <p v-html="tagList" />   <!-- 태그를 인식 시키려면 html 써야됨 but 잘 안씀(아주 간단한 비밀번호 맞다 틀리다 창 정도에만 사용 > 그걸 component로 만들기 뭐하니까)-->
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
            <input type="checkbox" value="서울" v-model="city">서울 <!-- 지금 value 값이 고정되어 있는데 변수로 주고 싶으면 v-bind:value=""로 주면됨-->
            <input type="checkbox" value="대구" v-model="city">대구
            <input type="checkbox" value="부산" v-model="city">부산
            <p>{{city}}</p>
        </div>

        <div>
            <input type="radio" value="독서" v-model="hobby">독서
            <input type="radio" value="영화" v-model="hobby">영화
            <input type="radio" value="운동" v-model="hobby">운동
            <p>{{hobby}}</p>
        </div>
        <hr>

        <img v-bind:src="imgUrl" v-bind:style="styleData"> <!--class, style 은 bind 디렉티브 사용법이 다르다-->
        <img v-bind:src="imgUrl" v-bind:style="[backSetting, addSetting]">  <!--이 방법도 있지만 잘 안쓴다-->

        <div class="container" v-bind:class="{'active' : isActive, 'text-red' : hasError}">Class binding first</div>   <!--예들 들면 목록에서 선택한것만 색이 변한다던지 그럴때 class="",v-bind:class="" 사용, isActive==boolean타입-->

        <div calss="container" v-bind:class="myClass">Class binding second</div>
    </div>
</template>   <!--입력받을때는 model 디렉티브, 동적으로 값을 부여 할때는 bind 디렉티브   checkbox, radio는 따로 기억하자 -->

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
                city : [],          //여러개의 체크박스를 사용할땐 초기값 배열로
                hobby : '',
                imgUrl : 'https://hips.hearstapps.com/hmg-prod/images/concrete-wall-royalty-free-image-1572896179.jpg?resize=1200:*',
                styleData : {
                    backgroundColor : 'skyblue',    //background-color를 카멜 표기법으로 표현 
                    width : '300px',
                    height : '300px'
                },
                backSetting : 'background-color:skyblue; width : 500px',
                addSetting : 'height : 400px',
                isActive : false,
                //hasError : !this.isActive    // 초기값일뿐  >> isActive를 바꿔도 안바뀜
                myClass : 'active'


            }
        },
        computed : {
            hasError(){
                return !this.isActive;   //연결성을 가짐 >> isActive 를 바꿀때마다 자동으로 바뀜
            }
        }
    }
</script>

<style scoped>
    .container{
        width : 100%;
        height : 200px;
    }

    .active{
        background-color : aquamarine;
        font-weight: bold;
    }

    .text-red{
        color: red;
    }
</style>
