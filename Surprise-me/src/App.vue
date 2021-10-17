<template>
  <ul id="#example-2">
    <li v-for="item in items" :key="item.id">
      {{ item.nome }} <br>
      {{ item.email }} <br>
      {{ item.status }} <br>
      
    </li>
  </ul>
</template>

<script>
export default {
  el:"#example-2",
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("http://localhost:3030/user", {
      method: "get",
      mode: "cors",
      cache: "default",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (this.items = data.items))
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
