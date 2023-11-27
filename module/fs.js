const fs = require('fs');

const data = 'Hello, World!!'
fs.writeFileSync('./sample.txt',data,'utf8'); //동기방식

// fs.writeFile('./sample.txt',data,'utf8',(err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('파일 쓰기 완료!');
// });  //비동기 방식 (callback 함수 추가)

fs.readFile('./sample.txt', 'utf8', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
});