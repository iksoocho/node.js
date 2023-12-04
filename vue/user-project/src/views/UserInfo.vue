<template>
  <div class="container">
    <div class="row">
        <table class="table">
           <tr>
                <th class="text-right table-primary">No</th>
                <td class="text-center">{{ userInfo.user_no }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">ID</th>
                <td class="text-center">{{ userInfo.user_id }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">Password</th>
                <td class="text-center">{{ userInfo.user_pwd }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">이름</th>
                <td class="text-center">{{ userInfo.user_name }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">성별</th>
                <td class="text-center">{{ userGender }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">나이</th>
                <td class="text-center">{{ userInfo.user_age }} 세</td>
           </tr>
           <tr>
                <th class="text-right table-primary">가입일자</th>
                <td class="text-center">{{  dataFormat(userInfo.join_date) }}</td>
           </tr>
        </table>
    </div>
    <div class="row">
        <button class="btn btn-info" v-on:click="goToUserUpdate(userInfo.user_id)">수정</button>
        <router-link  to="/" class="btn btn-success">목록</router-link>    <!--router-link의 기본 태그는 a , 바꾸고 싶다면 tag 속성을 사용해서 변경가능  router-link는 단순 페이지 변경-->
        <button v-on:click="deleteInfo(userInfo.user_id)" class="btn btn-warning">삭제</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            searchNo:'',    //route가 넘길 데이터 받는 property (userId값)
            userInfo : {}
        }
    },
    created(){     //created > 데이터 초기화 목적
        this.searchNo = this.$route.query.userId;  //router를 통해 호출이 되면 route가 동작한다 > query 속성에 호출할때 데이터가 담겨있음 > 넘겨준 키(userId)로 전달
        this.getUserInfo();                        //this.$router.push 랑 구별 잘 하기 
    },
    computed :{     //새로운 값으로 덮어쓰기 할때 사용
        userGender(){
            return this.userInfo.user_gender == 'M' ? '남자' : '여자'
        }
    },
    methods:{
        async getUserInfo(){
            let result = await axios.get(`/api/users/${this.searchNo}`)     //result는 객체로 넘어옴 data뿐만 아니라 상태코드 등 같이 넘어옴
                                    .catch(err => console.log(err));
            this.userInfo = result.data;
        },
        dataFormat(value){
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
                return year + '년 ' + month + '월 ' + day+'일';
            },
            async deleteInfo(userId){
                let result = await axios.delete(`/api/users/${userId}`)
                                        .catch(err=>console.log(err));
                console.log(result.data);
                let count = result.data.affectedRows;    //캡쳐 사진 확인하기
                if(count == 0){
                    alert('정상적으로 삭제되지 않았습니다.')
                }else{
                    alert('정상적으로 삭제 되었습니다.')
                    this.$router.push({name : 'userList'});
                }
            },
            goToUserUpdate(id){
                this.$router.push({path : '/userUpdate', query:{userId : id}})
            }
    }

}
</script>

<style>

</style>