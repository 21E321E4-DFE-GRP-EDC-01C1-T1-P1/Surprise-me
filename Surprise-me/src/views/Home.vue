<template>
  <div class="home">
    <img alt="logo" class="logo_home" src="../assets/surpriselogo.svg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.logo_home {
  border-radius: 190px;
}
</style>