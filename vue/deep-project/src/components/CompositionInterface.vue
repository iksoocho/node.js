<template>
  <div>
    <h3>{{ title }}</h3>
    <p>저자 : {{ author.name }}</p>
    <template v-if="isWrited">
        <p :key="idx" v-for="(info, idx) in author.books">
        {{ info }}
        </p>
    </template>
    <p v-else>아직 출간한 책이 없습니다.</p>
    <button @click="plusBookInfo">정보 업데이트</button>
  </div>
</template>

<script setup>
    import {reactive, ref, computed, watch} from 'vue';
    //data 옵션 : reactive, ref
    //computed : computed
    //watch : watch
    //methods : 내부에 함수로 선언

    const author = reactive ({
        name : 'John Doe',
        books : [
            'Vue2 - Advanced Guide',
            'Vue3 = Basic Guide',
            'vue4 - The Mystery'
        ]
    })

    const title = ref('제목을 입력해 주세요'); //title.value

    const isWrited = computed(()=>{
        return author.books.length > 0 ? 'Yes' : 'No';
    });

    watch(author.books, async(info)=>{
        console.log(info[info.length-1]);
    });

    const plusBookInfo = ()=>{
        let info = 'Node.js - Javascript Runtime'
        author.books.push(info);
    }


</script>

<style>

</style>