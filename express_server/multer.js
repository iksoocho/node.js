const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null,'uploads/');
    },
    filename : function(req, file, cb){
        cb(null, new Date().valueOf()+path.basename(file.originalname));
    }
});

const upload = multer({ storage : storage});

app.post('/profile', upload.single('avatar'),(req,res)=>{  //avatar > input태크의 name값
    console.log(req.file);
    console.log(req.body);
});

//여러개의 파일을 받을때 이름과 갯수 제한 걸어둔다
app.post('/photos', upload.array('photos', 12),(req,res)=>{
    for(let file of req.files){    //files 주의
        console.log(file);
    }
});

app.listen(5000, ()=>{
    console.log('server start');
});