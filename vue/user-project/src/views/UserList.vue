<template>
    <div class="container">
        <table class="table">
            <caption>Total : {{ count }}</caption>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>이름</th>
                    <th>성별</th>
                    <th>가입날짜</th>
                </tr>
            </thead>

            <tbody>
                <tr :key="index" v-for="(user, index) in userList" v-on:click="goToUserInfo(user.user_id)">
                    <td>{{user.user_no}}</td>
                    <td>{{user.user_id}}</td>
                    <td>{{user.user_name}}</td>
                    <td>{{user.user_gender}}</td>
                    <td>{{dataFormat(user.join_date)}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default{
        data(){
            return {
                userList : []
            }
        },
        computed : {       //연산한 것은 아니지만 수정되면 안되는 경우에도 coputed에 정의한다. > length는 자스에서는 강제로 수정 가능함
            count(){
                return this.userList.length;
            }
        },
        created(){
            //해당 component가 마운트 되기도 전부터 데이터를 들고 있어야 할때 사용, 보통 created 많이 씀
            this.getUserList();
        },
        methods : { 
            async getUserList(){                                     //원래는 서버 쪽에서 cors를 해소해 줘야됨
                let result = await axios.get('/api/users')           //따로 설정 해 주지 않으면 > http://localhost:3000/api/users (pathRewrite 했기 때문에 http://localhost:3000/users 가 된다) 
                                        .catch(err =>{
                                            console.log(err);
                                        });
                let list = result.data;
                this.userList = list;
            },
            goToUserInfo(id){  //페이지에서 다른 페이지로 넘어갈떄 사용법 (this.$router.push)
                console.log(id)
                this.$router.push({path : '/userInfo', query : {userId : id} });   //push >> 라우트에 라우팅된 것들중 어떤것을 가져올건지(path나 name 둘중 하나로 불러온다)
                //name : ruote 로 등록할 떄 사용한 name 속성
                //params : path 속성이 '/target/:id' 일떄 {'id' : 'cho'} 이런식으로 넘겨야된다. query와ㅓ 큰 차이는 없지만 경로에 미리 지정되어 있어야 한다, but query는 지정 되어 있지 않아도 넘길수 있음
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

                // 최종 포맷 (ex - '2021-10-08')
                return year + '년 ' + month + '월 ' + day+'일';
            }
        }
    }
    
</script>
