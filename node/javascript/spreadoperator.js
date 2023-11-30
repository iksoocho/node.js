let array = [1,2,3];
let string = "Hello";
//[1,2,3,"H","e","l","l","o"]를 만들려고 한다
let newArray =[];
for(let a of array){
    newArray.push(a);
}
for(let a of string){
    newArray.push(a);
}
console.log(newArray);

//위의 코드와 같은 결과
let arr = [...array,...string];
console.log(arr);