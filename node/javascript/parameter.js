//매개변수 기본값(유효성 검사와도 관련있음)
function printMsg(msg='메세지를 입력해주세요.', to=''){
    console.log(msg,to);
}

printMsg('have a nice day👍','좋은 하루 보내세요.');
printMsg();



//나머지 매개변수
function sum(x,y,...args){
    let result = x+y;
    console.log(args.length);
    for(let num of args){
        result += num;
    }
    return result;
}

console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));
