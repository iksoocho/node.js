<template>
  <div>
    <Header />
    <router-view :key="$route.fullPath"/>  <!-- 컴포넌트 re-랜더링-->
    <Footer />
  </div>
</template>
<script>
  import Header from './layouts/Header.vue';
  import Footer from './layouts/Footer.vue';

  export default {
    components  : { Header, Footer }
  }
</script>
