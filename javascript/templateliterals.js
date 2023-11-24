let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDay();

let msg = `${year}년
${month}월
${day}일`;    //` 같은 경우 줄바꿈 인식 

console.log(msg);