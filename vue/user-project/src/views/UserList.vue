<template>
    <div class="container">
        <table class="table">
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
                <tr :key="index" v-for="(user, index) in userList">
                    <td>{{user.user_no}}</td>
                    <td>{{user.user_id}}</td>
                    <td>{{user.user_name}}</td>
                    <td>{{user.user_gender}}</td>
                    <td>{{user.join_date}}</td>
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
        computed : {
            count(){
                return this.userList.length;
            }
        },
        created(){
            //해당 component가 마운트 되기도 전부터 데이터를 들고 있어야 할때 사용, 보통 created 많이 씀
            this.getUserList();
        },
        methods : {
            async getUserList(){
                let result = await axios.get('/users')
                                        .catch(err =>{
                                            console.log(err);
                                        });
                let list = result.data;
                this.userList = list;
            }
        }
    }
</script>
