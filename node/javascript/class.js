class Human{
    //필드,생성자,메소드
    constructor(){
        this._ssn;
        this._name ='Hong';
        this._age;
    }//생성자 안에 필드 선언


    set ssn(ssn){
        this._ssn = ssn;
    }

    get ssn(){
        return this._ssn;
    }

    set age(age){
        this._age=age;
    }

    get age(){
        return this._age;
    }

    set name(name){
        this._name=name;
    }
    get name(){
        return this._name;
    }

    getInfo(){
        console.log(this._ssn, this._name+"  만 "+ this._age+"살");
    }
}

let hu = new Human();
hu.ssn = '931212';
hu.name = '조익수';
hu.age = 29;
hu.getInfo();
