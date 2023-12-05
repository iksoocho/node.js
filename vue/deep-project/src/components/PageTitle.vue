<!--자식 component-->

<template>
  <h2>{{ title }}</h2>
</template>

<script>
//PageTitle.vue

export default {
    props : ['title']     //props >  부모가 넘겨 주는 데이터를 자식이 받는 부분 computed 처럼 readonly, [''] > 가장 기본적인 형태 아묻따 받겠다
    
}
</script>

<style>

</style>