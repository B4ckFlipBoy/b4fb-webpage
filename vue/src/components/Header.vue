<template>
    <div id="Header">
      <div class="grid-x">
        <div class="small-3 h3 border-right no-padding-bottom"><a href="#" class="white v-middle">B4fb.de</a></div>
        <div class="small-2 h5 white underlined no-padding-bottom border-right"><p class="no-padding-bottom"><a href="https://www.b4fb.de/gg-gangster" class="white">GGG</a></p></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
  #Header>div>div>p{
    position: relative;
    top: 10%;
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .v-middle{
    vertical-align: baseline;
  }
  .no-padding-bottom{
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .border-right{
    border-right: 2px solid #555555;
  }
  .underlined{
    text-decoration: underline;
  }
</style>
