<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">사원번호</th>
					<td class="text-center"><input type="text" v-model="empInfo.emp_no"  /></td>
					
				</tr>
				<tr>
					<th class="text-right table-primary">부서</th>
					<td class="text-center">
						<select v-model="empInfo.dept_no">
							<option v-for="(dept, index) in depts" :key="index" :value="dept.dept_no">
								{{ dept.dept_name }}
							</option>
						</select>
					</td>
				
				</tr>
				
				<tr>
					<th class="text-right table-primary">성</th>
					<td class="text-center"><input type="text" v-model="empInfo.first_name" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">이름</th>
					<td class="text-center"><input type="text" v-model="empInfo.last_name" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">성별</th>
					<td class="text-center">
						<input type="radio" v-model="empInfo.gender" value="M" />남자
						<input type="radio" v-model="empInfo.gender" value="F" />여자
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">입사일자</th>
					<td class="text-center"><input type="date" v-model="empInfo.hire_date" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">발령일자</th>
					<td class="text-center"><input type="date" v-model="empInfo.from_date"  /></td>
					<!-- <td>{{ 'dept날짜' + deptInfo.from_date }}</td>
					<td>{{ 'sal날짜' + salInfo.from_date }}</td> -->
				</tr>
				<tr>
					<th class="text-right table-primary">급여</th>
					<td class="text-center"><input type="text" v-model="empInfo.salary" /></td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button class="btn btn-success" @click="insertInfo">저장</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

export default{
  data(){
    return{
      empInfo : {
        emp_no : '',
        first_name:'',
        last_name:'',
        gender:'',
        hire_date:'',
        dept_no:'',
        from_date:'',
        to_date:'9999-01-01',
        salary:''
      },
      depts:{}
    }
  },
  created(){
    this.empInfo.hire_date = this.getToday();
    this.getDept();
  },
  methods:{
    async insertInfo(){
            if(!this.validation()) return;       //아예 아래 전체를 감싸도 됨

            let data = {
                param : this.empInfo                    //"param" : 형태로 보내야됨
            };
            
            let result = await axios(`/api/emps`,  {              //axios.post(경로,  data)도 가능하지만 초보일땐 왼쪽처럼 하자
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                data : JSON.stringify(data)
            })
            .catch(err=>console.log(err))    

            console.log(result.data);    
            if(result.data.message == ''){
                alert(`정상적으로 등록 되었습니다.`)
                this.$router.push({ name : 'empList'});
            }else{
                alert(`등록 실패.`)
                

            }

        },
        getToday(){
            let today = new Date();
            let year = today.getFullYear();
            let month = ('0'+(today.getMonth()+1)).slice(-2);
            let day = ('0'+(today.getDate())).slice(-2);
            
            return `${year}-${month}-${day}`
        },
        async getDept() {
          let result = await axios.get(`/api/dept`).catch((err) => console.log(err));
          this.depts = result.data;
        },
        validation(){
            if(this.empInfo.emp_no == ''){
                alert('사원번호가 입력되지 않았습니다.')
                return false;
            }
            if(this.empInfo.dept_no== ''){
                alert('부서가 입력되지 않았습니다.')
                return false;
            }

            return true;
        }
  }
}
</script>