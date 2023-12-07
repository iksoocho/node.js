require('dotenv').config({ path : './db/mysql.env'});
const express = require('express');
const app = express();
const mysql = require('./db.js');

app.use(express.json({
    limit : '50mb'
}));

app.listen(3000, ()=>{
    console.log('server start');
});

//전체조회
app.get('/board', async(req,res)=>{
    let list = await mysql.query('boardList');
    res.send(list);
})

//단건조회
app.get('/board/:no', async(req,res)=>{
    let data = req.params.no;
    let list = await mysql.query('boardInfo', data);
    res.send(list[0]); //mysql에서 select는 무조건 배열로 넘오 오기 때문에 단건 조회일 경우 list[0]로 해줘야됨
})

//댓글 조회
app.get('/comment/:bno', async(req,res)=>{
    let data = req.params.bno;
    let list = await mysql.query('commentList',data);
    res.send(list);
})

//게시물 등록
app.post('/board', async(req,res)=>{
    let data = req.body.param;
    let result = await mysql.query('boardInsert', data);
    res.send(result);
})

//게시물 수정
app.put('/board/:no', async(req,res)=>{
    let datas = [req.body.param, req.params.no];
    let result =  await mysql.query('boardUpdate', datas)
    res.send(result);
})

//게시물 삭제
app.delete('/board/:no', async(req,res)=>{
    let data = req.params.no;
    let result = await mysql.query('boardDelete', data);
    res.send(result);
})