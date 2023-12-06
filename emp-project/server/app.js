require('dotenv').config({ path : './db/mysql.env'})    //환경변수는 가장 위에
const express = require('express');
const app = express();
const mysql = require('./db.js')

app.use(express.json({
    limit: '50mb'
}));

app.listen(3000, ()=>{
    console.log('server start!!!');
});

//전체조회
app.get('/emps', async(req,res)=>{
    let list = await mysql.query('empList');
    res.send(list);
})

//단건조회
app.get('/emps/:emp_no', async(req,res)=>{
    let data = req.params.emp_no;
    let list = await mysql.query('empInfo', data);
    res.send(list[0]); //mysql에서 select는 무조건 배열로 넘오 오기 때문에 단건 조회일 경우 list[0]로 해줘야됨
})

//부서 조회
app.get('/dept', async (req, resp) => {
	let result = await mysql.query('deptList');
	resp.send(result);
});

const empTable = ['emp_no','first_name', 'last_name', 'gender','hire_date'];
const deptEmpTable = ['emp_no', 'dept_no','from_date','to_date'];
const salareisTable = ['emp_no', 'salary','from_date','to_date'];

app.post('/emps', async(req,res)=>{
    let data = req.body.param;

    let empData = {};
    for(let col of empTable){
        let value = data[col];
        if(value == '') continue;
        empData[col] = value;
    }
    console.log(empData);
    let result = await mysql.query('empInsert', empData);

    let deptData = [];     //sql.js에서 쿼리문 확인!! set으로 한방에 넘기는게 아니라 하나히니 따로 넘겨서 ?가 여러개이기 때문에 배열[]로 넘겨줘야됨
    for(let col of deptEmpTable){
        let value = data[col];
        if(value == '') continue;
        deptData.push(value);
    }
    console.log(deptData);
    result = await mysql.query('deptInsert', deptData);

    let salData = {};
    for(let col of salareisTable){
        let value = data[col];
        if(value == '') continue;
        salData[col] = value;
    }
    salData.to_date = '9999-01-01';
    console.log(salData);
    result = await mysql.query('salInsert', salData);

    res.send(result);


    // let result = await mysql.query('empInsert', data);
    // let result2 = await mysql.query('deptInsert', data);
    // let result3 = await mysql.query('salInsert', data);
    // res.send([result,result2,result3]);
})

app.put('/emps/:emp_no', async(req,res)=>{
    let datas = [req.body.param, req.params.emp_no];
    let result =  await mysql.query('empUpdate', datas)
    res.send(result);
})

app.delete('/emps/:emp_no', async(req,res)=>{
    let datas = [req.body.param, req.params.emp_no];
    let result = await mysql.query('empDelete', datas);
    res.send(result);
})