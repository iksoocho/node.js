<template>
    <div class="container">
    <div class="row">
        <table class="table">
            <tr>
                <th class="text-right table-primary">No</th>
                <th class="text-center">
                    <input type="text" v-model="userInfo.user_no" readonly>
                </th>
           </tr>
           <tr>
                <th class="text-right table-primary">ID</th>
                <th class="text-center">
                    <input type="text" v-model="userInfo.user_id" readonly>
                </th>
           </tr>
           <tr>
                <th class="text-right table-primary">Password</th>
                <th class="text-center">
                    <input type="password" v-model="userInfo.user_pwd">
                </th>
           </tr>
           <tr>
                <th class="text-right table-primary">이름</th>
                <th class="text-center">
                    <input type="text" v-model="userInfo.user_name">
                </th>
           </tr>
           <tr>
                <th class="text-right table-primary">성별</th>
                <th class="text-center">
                    <input type="radio" value="M" v-model="userInfo.user_gender">남자
                    <input type="radio" value="F" v-model="userInfo.user_gender">여자
                </th>
           </tr>
           <tr>
                <th class="text-right table-primary">나이</th>
                <th class="text-center">
                    <input type="number" v-model="userInfo.user_age">
                </th>
           </tr>
           <tr>
                <th class="text-right table-primary">가입일자</th>
                <th class="text-center">
                    <input type="date" v-model="userInfo.join_date">   <!--input type="date"속성일떄는 yyyy-MM-dd만 인식-->
                </th>
           </tr>
        </table>
    </div>
    <div class="row">
        <button class="btn btn-info" v-on:click="updateInfo">저장</button>
        
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            searchId : '',
            userInfo : {}
            
        }
    },
    created(){     //created > 데이터 초기화 목적
        this.searchNo = this.$route.query.userId;  //router를 통해 호출이 되면 route가 동작한다 > query 속성에 호출할때 데이터가 담겨있음 > 넘겨준 키(userId)로 전달
        this.getUserInfo();
    },
    methods:{
        async getUserInfo(){
            let result = await axios.get(`/api/users/${this.searchNo}`)     //result는 객체로 넘어옴 data뿐만 아니라 상태코드 등 같이 넘어옴
                                    .catch(err => console.log(err));
            this.userInfo = result.data;
            let newDate = this.dateFormat(this.userInfo.join_date)
            this.userInfo.join_date = newDate;
        },
        dateFormat(value){
                //chatGPT가 알려준 방식 
                // const options = { year: 'numeric', month: 'long', day: 'numeric' };
                // return new Date(value).toLocaleDateString('ko-KR', options);
               
                // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
                if(value == '') return '';
            
                // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
                var date = new Date(value);

                // 연도, 월, 일 추출
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();

                // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
                if(month < 10){
                    month = '0' + month;
                }

                if(day < 10){
                    day = '0' + day;
                }

                // 최종 포맷 
                return year + '-' + month + '-' + day;
            },
        async updateInfo(){
            if(!this.validation()) return;

            let data = {
                param : this.userInfo                    //"param" : 형태로 보내야됨
            };
            let result = await axios(`/api/users/${this.userInfo.user_id}`,  {              //경로 잘 확인!!!!
                method : 'put',
                headers : {
                    'Content-Type' : 'application/json'
                },
                data : JSON.stringify(data)
            })
            .catch(err=>console.log(err))   

            if(result.data.changedRows == 0){
                alert(`수정 되지 않았습니다. `)
            }else{
                alert(`정상적으로 수정 되었습니다.`)
                this.$router.push({ name : 'userList'});

            }
        },
        
        validation(){
            if(this.userInfo.user_id == ''){
                alert('아이디가 입력되지 않았습니다.')
                return false;
            }
            if(this.userInfo.user_pwd == ''){
                alert('비밀번호가 입력되지 않았습니다.')
                return false;
            }

            return true;
        }

    }
}
</script>

<style>

</style>