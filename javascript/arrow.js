//함수 선언식 - 호이스팅 된다, var 선언자를 쓰는것과 같음-> var의 단점을 다 가지고 있음
function hello(name){
    return "Hello, " + name;
}

function hello(msg){
    return "msg : "+msg;
}

console.log(hello("안녕하세요."));



//함수 표현식 - 호이스팅 안됨, 많이 쓰는 형식
const message = function(msg){
    return "msg : "+msg;
}

//화살표 함수
const arrHello = (name)=>{return "Hello, "+name};
const arrHello2 = name => "Hello2, "+name;

const arrMesage = (msg)=>{return "msg : "+msg};
const arrMesage2 = msg=>"msg : "+msg;
const arrMesage3 = () => {
                            let today = new Date().getDay;
                            console.log("오늘 날짜 : "+today);
                        };
