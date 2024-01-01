<template>
  <div>
    <table class="table">
            
            <thead>
                <tr>
                    <th>사원 번호</th>
                    <th>사원 이름</th>
                    <th>성별</th>
                    <th>고용일자</th>
                    <th>급여</th>
                    <th>부서번호</th>
                    <th>부서이름</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(emp, idx) in empList.slice(pageStartIdx, pageStartIdx + ITEM_PER_PAGE)" :key="idx" v-on:click="goToEmpInfo(emp.emp_no)">
                    <td>{{ emp.emp_no }}</td>
                    <td>{{ emp.first_name + ' ' + emp.last_name }}</td>
                    <td>{{ emp.gender== 'M' ? '남자' : '여자' }}</td>
                    <td>{{ $dateFormat(emp.hire_date,'yyyy-MM-dd') }}</td>
                    <td>{{ emp.salary }}</td>
                    <td>{{ emp.dept_no }}</td>
                    <td>{{ emp.dept_name }}</td>
                </tr>
            </tbody>
            
        </table>
        <!-- <Pagination :total="empList.length" :perPage="ITEM_PER_PAGE" @pageChange="onChangePage" /> -->
        <!-- <Paginate :list="empList" v-bind="{ ITEM_PER_PAGE, PAGE_PER_SECTION }"  v-model="curPage" @change-page="onChangePage" /> -->
        <Paginate :list="empList" :ITEM_PER_PAGE="ITEM_PER_PAGE" :PAGE_PER_SECTION="PAGE_PER_SECTION" :curPage="curPage" @change-page="onChangePage" />
  </div>
</template>

<script>
import axios from 'axios'
import Paginate from '../component/Pagination.vue';


export default{
  components: {
    Paginate,
  },
  data(){
    return{
      empList : [],
      ITEM_PER_PAGE: 10,
      PAGE_PER_SECTION: 5,
      curPage : 1
    }
  },
 
  created(){
    this.getEmpList();
    // this.curPage = 1;
  },
  computed : {
      empGender(){
        return this.empInfo.gender == 'M' ? '남자' : '여자'
      },
      pageStartIdx() {
      return (this.curPage - 1) * this.ITEM_PER_PAGE;
    }
      
      
  },
  methods : {
    async getEmpList(){
      let result = await axios.get('/api/emps')
                              .catch(err => {console.log(err)});
      let list = result.data;
      console.log(list)
      this.empList = list;                      
    },
    goToEmpInfo(no){  //페이지에서 다른 페이지로 넘어갈떄 사용법 (this.$router.push)
      console.log(no)
      this.$router.push({path : '/empInfo', query : {empNo : no} });
   },
   onChangePage(data) {
      this.curPage = data;
    }
  
   
  //   dateFormat(value){
  //       //chatGPT가 알려준 방식 
  //       // const options = { year: 'numeric', month: 'long', day: 'numeric' };
  //       // return new Date(value).toLocaleDateString('ko-KR', options);
        
  //       // 들어오는 value 값이 공백이면 그냥 공백으로 돌려줌
  //       if(value == '') return '';
    
  //       // 현재 Date 혹은 DateTime 데이터를 javaScript date 타입화
  //       var date = new Date(value);

  //       // 연도, 월, 일 추출
  //       var year = date.getFullYear();
  //       var month = date.getMonth() + 1;
  //       var day = date.getDate();

  //       // 월, 일의 경우 한자리 수 값이 있기 때문에 공백에 0 처리
  //       if(month < 10){
  //           month = '0' + month;
  //       }

  //       if(day < 10){
  //           day = '0' + day;
  //       }

  //       // 최종 포맷 (ex - '2021-10-08')
  //       return year + '년 ' + month + '월 ' + day+'일';
  //   }
 }
}
</script>

<style>

</style>