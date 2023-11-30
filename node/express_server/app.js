const fs = require('fs');
const express = require('express');
const userRouter = require('./user.js');   //외부 라우터
const app = express();

app.use('/user', userRouter);

app.use('/public', express.static('images'));

app.use(function(err,req,res,next){
    res.status(500).json({statusCode: res.statusCode, errMessage : err.message});
});

app.get('/error', (req,res,next)=>{
    next(new Error('Process Fail! Check Data!'));
})




const jsonFile = fs.readFileSync('../json-server/db.json');
const jsonData = JSON.parse(jsonFile);

//sql문 같은 역할
const getData = (target, where)=>{
    let data = jsonData[target];
    if(Array.isArray(data)){    //Array.isArray 배열인지 아닌지 판별
        let list = data;
        for(let obj of list){
            if(obj.id == where){
                data = obj;
            }
        }
    }
    return data;
}

app.get('/', (req, res)=>{
    res.send('Server Connect');
});

//전체 조회
//posts
app.get('/posts',(req,res)=>{
    let data = getData('posts');
    res.json(data);
});

//comments
app.get('/comments',(req,res)=>{
    let data = getData('comments');
    res.json(data);
})

//profile
app.get('/profile',(req,res)=>{
    let data = getData('profile');
    res.json(data);
})


//단건 조회(:id > 특정 값)
app.get('/posts/:id', (req,res)=>{
    let data = getData('posts',req.params.id);
    res.json(data);
});

app.get('/comments/:id', (req,res)=>{
    let data = getData('comments',req.params.id);
    res.json(data);
});
//profile 은 배열이 아니기 때문에 조건을 걸수 없다


//하나의 경로로 4가지 메소드를 사용해서 처리 가능 > 세분화 하기 어렵기 때문에 4가지 모두 다 쓰기보다느 유동적으로 몇개씩 묶어서 사용
app.route('/emps')
.get((req,res)=>{
    res.send('사원 전체 조회');
})
.post((req,res)=>{
    res.send('사원 등록');
})
.put((req,res)=>{
    res.send('사원 수정');
})
.delete((req,res)=>{
    res.send('사원 삭제');
})




app.listen(3000, ()=>{
    console.log('서버가 실행됩니다.');
    console.log('http://localhost:3000');
});


