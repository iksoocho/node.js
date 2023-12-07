<template>
    <div class="container">
    <div class="row">
        <table class="table">
           <tr>
                <th class="text-right table-primary">사원번호</th>
                <td class="text-center">{{ empInfo.emp_no }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">사원이름</th>
                <td class="text-center">{{ empInfo.first_name + ' ' + empInfo.last_name }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">성별</th>
                <td class="text-center">{{ empGender }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">교용일자</th>
                <td class="text-center">{{ dateFormat(empInfo.hire_date) }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">급여</th>
                <td class="text-center">{{ empInfo.salary }}</td>
           </tr>
           <tr>
                <th class="text-right table-primary">부서번호</th>
                <td class="text-center">{{ empInfo.dept_no }} </td>
           </tr>
           <tr>
                <th class="text-right table-primary">부서이름</th>
                <td class="text-center">{{  empInfo.dept_name }}</td>
           </tr>
        </table>
    </div>
    <div class="row">
        <button class="btn btn-info" v-on:click="goToEmpUpdate(empInfo.emp_no)">수정</button>
        <router-link  to="/empList" class="btn btn-success">목록</router-link>    <!--router-link의 기본 태그는 a , 바꾸고 싶다면 tag 속성을 사용해서 변경가능  router-link는 단순 페이지 변경-->
        <button v-on:click="deleteInfo(empInfo.emp_no)" class="btn btn-warning">삭제</button>
    </div>
  </div>
  
</template>

<script>
  import axios from 'axios';

  export default{
    data(){
      return{
        searchNo:'',    //empInfo안에 있는 정보라도 나누는게 낫다 > 다른 곳에선 없는 값일수도 있다
        empInfo:{},
        fireDay:''
      }
    },
    created(){
      this.searchNo = this.$route.query.empNo;
      this.getEmpInfo();
      this.fireDay=this.getToday();
      console.log(typeof this.fireDay)
    },
    computed : {
      empGender(){
        return this.empInfo.gender == 'M' ? '남자' : '여자'
      }
    },
    methods:{
      async getEmpInfo(){
        
        let result = await axios.get(`/api/emps/${this.searchNo}`).catch(err =>{console.log(err)});
        console.log(result.data)
        this.empInfo = result.data;
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
        return year + '년 ' + month + '월 ' + day+'일';
      },
      async deleteInfo(empNo){
        let data={
          param : {
            to_date : this.fireDay
          }
        }
        let result = await axios.delete(`/api/emps/${empNo}`, { data: data })
            .catch(err=>console.log(err))
            console.log(result)
        if(result.data.affectedRows == 0){
                alert(`삭제 실패. `)
            }else{
                alert(`정상적으로 삭제 되었습니다.`)
                this.$router.push({ name : 'empList'});

            }
      },
        getToday(){
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0'+(today.getMonth()+1)).slice(-2);
            let day = ('0'+(today.getDate())).slice(-2);
            
            return `${year}-${month}-${day}`
        },
            goToEmpUpdate(no){
                this.$router.push({path : '/empUpdate', query:{empNo : no}})
            }
    }
  }
</script>

<style>

</style>