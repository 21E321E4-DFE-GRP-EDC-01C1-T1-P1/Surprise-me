<template>
  <ul>
    {{OBJ}}
    <li v-for="item in items" :key="item.id">
      {{ item.nome }} <br />
      {{ item.email }} <br />
      {{ item.status }} <br />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      OBJ: this.items,
    };
  },
  created() {
    fetch("http://localhost:3030/user", { method: "GET",})
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((error) => {
        alert(error.message);
      });
  },
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
