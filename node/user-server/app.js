require('dotenv').config({ path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, ()=>{
    console.log('server start');
})




app.get('/users', async(req,res)=>{
    let list = await mysql.query('userList');
    res.send(list);
})

app.get('/users/:user_id', async(req,res)=>{
    let data = req.params.user_id;
    let list = await mysql.query('userInfo', data);
    res.send(list[0]); //mysql에서 select는 무조건 배열로 넘오 오기 때문에 단건 조회일 경우 list[0]로 해줘야됨
})

app.post('/users', async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('userInsert', data);
    res.send(result);
})

app.put('/users/:user_id', async(req,res)=>{
    let datas = [req.body.param, req.params.user_id];
    let result =  await mysql.query('userUpdate', datas)
    res.send(result);
})

app.delete('/users/:user_id', async(req,res)=>{
    let data = req.params.user_id;
    let result = await mysql.query('userDelete', data);
    res.send(result);
})