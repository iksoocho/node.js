const defaultNum = 1;

function add(num1, num2){
    return num1+num2;
}

function minus(num1,num2){
    return num1-num2;
}

function multi(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

module.exports = {
    defaultNum,
    add,
    minus,
    multi,
    divide
}  //객체 형태인데 키:밸류 형태가 아님 > 키 값과 밸류명이 같을때는 줄여서 씀