<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      Header
    },
    data: () => {
      return {
        message: "Hello"
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 5px 0 5px 0;
    background-color: dimgray;
  }
  .white{
    color: #f3f3f3;
  }
  .white:hover{
    color: #aeaeae;
  }
</style>
