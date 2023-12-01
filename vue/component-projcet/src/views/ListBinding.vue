<template>
    <div >
        <button v-on:click="addData">+</button>
        <table border="1">
            <thead>
                <tr>
                    <th>제품명</th>
                    <th>가격</th>
                    <th>카테고리</th>
                    <th>배송비</th>
                    <th>삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr v-bind:key="index" v-for="(product, index) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.delivery_price}}</td>
                    <td><button v-on:click="delData(index)">삭제</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
let data = [
    {
        "product_name" : "기계식 키보드",
        "price" : 25000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "무선 마우스",
        "price" : 12000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "아이패드",
        "price" : 725000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "태블릿거치대",
        "price" : 32000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    },
    {
        "product_name" : "무선충전기",
        "price" : 42000,
        "category" : "노트북/태블릿",
        "delivery_price" : 5000
    }
]

export default{
    data(){
        return {
            productList : data
        }
    },
    //함수는 모두 methods로
    methods : {
        addData(){
            let obj = {
                "product_name" : "무선충전기",
                "price" : 42000,
                "category" : "노트북/태블릿",
                "delivery_price" : 5000
            };
            let index = this.productList.length;
            this.productList[index] = obj
            /*
            //추가
            splice(n , 0, {})
            //수정
            splice(n, 1, {})
            //삭제
            splice(n, 1)
            */
            /*
            addData : function(){

            }
            이것과 같은 표기법*/
        },
        delData(index){
            this.productList.splice(index, 1);
        }
       
       
    }
}
    
</script>

<style >
    
</style>
