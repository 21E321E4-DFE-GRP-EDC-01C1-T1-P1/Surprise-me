<template>
  <div v-for="item in items" :key="item.id">
    <div class="card">
      <img  :src="item.imgUrl" alt="Avatar" style="width: 100%" />
      <div class="container">
        <h4>
          <b>Nome: {{ item.nome }}</b>
        </h4>
        <p>@: {{ item.email }}</p>
        <p>Cargo: {{item.posicao}}</p>
      </div>
    </div>
  </div>
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
    fetch("http://localhost:3030/user", { method: "GET" })
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .catch((error) => {
        alert(error.message);
      });
  },
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 200px;
  height: 350px;
  margin: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

body{
  width: 100%;
  margin: 20px;
  display:flex;
  flex-direction:row;
}
</style>
