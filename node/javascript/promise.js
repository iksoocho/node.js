const promise = new Promise((resolve, reject)=>{
    if(true){
        //처리 성공
        resolve("결과 데이터");
    }else{
        //처리 실패
        reject(new Error("에러 메세지"));
    }
});

