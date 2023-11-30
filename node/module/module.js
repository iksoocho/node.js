const {add, minus} = require('./calculator');   //사용 하고자 하는 대상만 가져올수 있음,  const cal=require() 형태로 전체를 다 가져올수도 있음(cal.add 등등)

console.log(add(100, 10));
console.log(minus(25,3));

