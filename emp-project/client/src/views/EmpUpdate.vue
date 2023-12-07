<template>
	<div class="container">
		<div class="row">
			<table class="table">
				<tr>
					<th class="text-right table-primary">사원번호</th>
					<td class="text-center"><input type="text" v-model="empInfo.emp_no"  readonly /></td>
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
						<input type="radio" v-model="empInfo.gender" value="M" onclick="return false;" />남자
						<input type="radio" v-model="empInfo.gender" value="F" onclick="return false;" />여자
					</td>
				</tr>
				<tr>
					<th class="text-right table-primary">입사일자</th>
					<td class="text-center"><input type="date" v-model="empInfo.hire_date" readonly /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">발령일자</th>
					<td class="text-center"><input type="date" v-model="empInfo.from_date" /></td>
				</tr>
				<tr>
					<th class="text-right table-primary">급여</th>
					<td class="text-center"><input type="text" v-model="empInfo.salary" /></td>
				</tr>
			</table>
		</div>
		<div class="row">
			<button class="btn btn-success" @click="updateInfo">수정</button>
		</div>
	</div>
</template>
<script>
import axios from 'axios'

export default{
    data(){
        return {
            searchNo:'',
            empInfo:{},
            depts:{}
        }
    },
    created(){
        this.searchNo = this.$route.query.empNo;
        this.getEmpInfo();
        this.getDept();
        
    },
    methods : {
        async getEmpInfo(){
        
            let result = await axios.get(`/api/emps/${this.searchNo}`).catch(err =>{console.log(err)});
            console.log('사원정보',result.data)
            this.empInfo = result.data;
            let hireDate = this.dateFormat(this.empInfo.hire_date);
			this.empInfo.hire_date = hireDate;
      },
      async getDept() {
          let result = await axios.get(`/api/dept`).catch((err) => console.log(err));
          console.log('부서정보',result.data)
          this.depts = result.data;
        },
        async updateInfo(){
            // if(!this.validation()) return;

            let data = {
                param : {
                    first_name: this.empInfo.first_name,
					last_name: this.empInfo.last_name
                    }                    //"param" : 형태로 보내야됨
            };
            let result = await axios(`/api/emps/${this.empInfo.emp_no}`,  {              //경로 잘 확인!!!!
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
                this.$router.push({ name : 'empList'});

            }
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
        }
    }
}
</script>