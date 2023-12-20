<template>
  <div>

    <VueComponent />
     <Nav />
     <router-view/>
  </div>
</template>

<script>
  import VueComponent from './components/VueComponent.vue'
  import Nav from  './layouts/NavBar.vue'

  export default{
    components : {
      VueComponent,
      Nav
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
