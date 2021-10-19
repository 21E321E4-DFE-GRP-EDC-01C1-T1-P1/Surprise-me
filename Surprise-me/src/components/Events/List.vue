<template>
  <div class="conteiner">
    <div v-for="item in items" :key="item.id">
      <div class="card">
        <img :src="item.imgUrl" alt="Avatar" style="width: 100%" />
        <div class="container">
          <h4>
            <b>Nome: {{ item.nome }}</b>
          </h4>
          <p>@: {{ item.email }}</p>
          <p>Cargo: {{ item.posicao }}</p>
          <p>Atualizado: {{ dataform(item.updatedAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    fetch("http://localhost:3030/user", { method: "GET" })
      .then((res) => res.json())
      .then((data) => (this.items = data))
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  },
  methods: {
  dataform :function (data) {
      var dataAtual = new Date(data);
      var dia = dataAtual.getDate();
      var mes = dataAtual.getMonth() + 1;
      var ano = dataAtual.getFullYear();
      // var horas = dataAtual.getHours();
      // var minutos = dataAtual.getMinutes();
      return `${dia}/${mes}/${ano}`
    }
  },
};
</script>

<style>
.conteiner {
  display: flex;
  background-color:blanchedalmond;
}
img {
  width: 200px;
  height: 200px;
  object-fit: cover;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 200px;
  height: 400px;
  margin: 20px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

</style>
