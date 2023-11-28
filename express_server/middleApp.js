const express =  require('express');
const session = require('express-session')
const cors = require('cors');
const app = express();

//application/www-form-urlencoded(content 타입)
const defaultParser = express.urlencoded({extended : false});
//application/json
const jsonParser = express.json();


//경로지정X > 모두 적용
app.use(defaultParser);  

app.post('/info', (req,res)=>{
    res.send('welcome, '+ req.body.name);
});


//경로 지정
app.post('/message', jsonParser, (req,res)=>{
    res.send('MSG: '+ req.body.message);
});

app.listen(5000, ()=>{
    console.log('server start');
});

let sessionSetting = session({
    secret : 'secret key',
    resave : false,
    saveUninitialized : true,
    cookie : {
        httpOnly : true,
        secure : false,
        maxAge : 60000
    }
})

app.use(sessionSetting);

//cors
const corsOption = {
    origin : 'http://192.168.0.29:5500',   //해당 origin 으로 부터 요청이 들어오면 응답한다 , 등록 안된 origin이면 응답 안함
    optionsSuccessStatus : 200
}

app.use(cors(corsOption));






app.get('/',(req,res)=>{
    res.send(req.session);
})

app.post('/login',(req,res)=>{
    const {id , pwd} = req.body;
    req.session.user = id;   //session 고유의 id 값이 있어서 id 말고 user로 바꿈
    req.session.pwd = pwd;
    req.session.save(function(err){
        if(err) throw err;
        res.redirect('/');
    })
})

app.get('/logout', (req,res)=>{
    req.session.destroy();
    req.redirect('/');
})


