<template>
  <div class="container">
    <div class="row">
        <table class="table">
            
           <tr>
                <th class="text-right table-primary">ID</th>
                <th class="text-center">
                    <input type="text" v-model="userInfo.user_id" >
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
        <button class="btn btn-info" v-on:click="insertInfo">저장</button>
        
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            userInfo : {
                user_id : '',
                user_pwd : '',
                user_name : null,
                user_gender: null,
                user_age : 0 ,
                join_date : ''
            }
        }
    },
    created () {
        this.userInfo.join_date = this.getToday()
    },
    methods:{
        async insertInfo(){
            if(!this.validation()) return;       //아예 아래 전체를 감싸도 됨

            let data = {
                param : this.userInfo                    //"param" : 형태로 보내야됨
            };
            let result = await axios(`/api/users`,  {              //axios.post(경로,  data)도 가능하지만 초보일땐 왼쪽처럼 하자
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                data : JSON.stringify(data)
            })
            .catch(err=>console.log(err))    

            console.log(result.data)    
            if(result.data.insertId == 0){
                alert(`등록 되지 않았습니다. \n메세지를 확인 해 주세요.\n${result.data.message}`)
            }else{
                alert(`정상적으로 등록 되었습니다.\n No.${result.data.insertId}`)
                this.$router.push({ name : 'userList'});

            }

        },
        getToday(){
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0'+(today.getMonth()+1)).slice(-2);
            let day = ('0'+(today.getDate())).slice(-2);
            
            return `${year}-${month}-${day}`
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