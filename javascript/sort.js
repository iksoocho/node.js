let names = ["Hong","Kang","Lee","Adward"];
names.sort();
console.log(names);
names.reverse();
console.log(names);

let nums =[40,100,1,5,25,10];
nums.sort(); //기준이 유니코드라서 우리가 원하는 데로 숫자가 정렬되지 않음
console.log(nums);

nums.sort((a,b)=>{
    return a-b;
});          //문자 외의 값들을 원하는 데로 정렬하기 위해서는 재정의 해줘야 한다.
console.log(nums);
