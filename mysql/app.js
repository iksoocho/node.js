require('dotenv').config({ path : './db/mysql.env'});  //db 접속 정보 env
const express = require('express');
const app = express();
const mysql = require('./db.js');  //우리가 만든 db.js모듈 > query 함수를 사용하기 위해서 exports한 모듈

//parser(json타입을 읽을수 있기 위해)
app.use(express.json({
    limit : '50mb'
}));

//server 실행
app.listen(3000, ()=>{
    console.log('server start');
})


//louting 
app.get('/customers', async(req,res)=>{
    let list = await mysql.query('customerList');
    res.send(list);
});

app.get('/customers/:id', async(req,res)=>{
    let data = req.params.id;
    let list = await mysql.query('customerInfo', data);
    res.send(list[0]);
})

app.post('/customers', async(req,res)=>{
    let data = req.body.param;      //set절의 ? 값은 객체로 줘야됨
    let result = await mysql.query('customerInsert', data);
    res.send(result);
});

app.put('/customers/:id', async(req,res)=>{   //:id > 자바에서 /id=?와 같음
    let datas = [ req.body.param, req.params.id];     //쿼리문에 ?가 2개 이기 때문에 배열로 보내야됨, id는 params에 있음
    let result = await mysql.query('customerUpdate', datas)
    res.send(result);
});

app.delete('/customers/:id', async(req,res)=>{
    let data = req.params.id;
    let result = await mysql.query('customerDelete', data);
    res.send(result);
});

app.delete('/customers/:id/:name', async(req,res)=>{
    let datas =[ req.params.id, req.params.name];
    let result = await mysql.query('customerDelete2', datas);
    res.send(result);
})