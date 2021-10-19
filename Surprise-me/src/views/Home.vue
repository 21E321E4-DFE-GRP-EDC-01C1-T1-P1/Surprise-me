<template>
  <div class="home">
    <img alt="logo" class="logo_home" src="../assets/surpriselogo.svg">
    <ListUser msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListUser from '@/components/ListUser.vue'

export default {
  name: 'Home',
  components: {
    ListUser
  }
}
</script>
<style>
.logo_home {
  border-radius: 190px;
  background-color:aliceblue;
}
.home{
  background-color: bisque;
}
</style>