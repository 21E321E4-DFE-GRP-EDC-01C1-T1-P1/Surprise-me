<template>
  <div class="conteiner flex justify-between  grid grid-cols-3">
    <div v-for="item in items" class="card_list_user" :key="item.id">
      <div class="card rounded-lg shadow-2xl">
        <img
          :src="item.imgUrl"
          alt="Avatar"
          class="image-avatar rounded-lg"
          style="width: 100%"
        />
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
    dataform: function (data) {
      var dataAtual = new Date(data);
      var dia = dataAtual.getDate();
      var mes = dataAtual.getMonth() + 1;
      var ano = dataAtual.getFullYear();
      // var horas = dataAtual.getHours();
      // var minutos = dataAtual.getMinutes();
      return `${dia}/${mes}/${ano}`;
    },
  },
};
</script>

<style>
.conteiner {
  display: flex;
}
.conteiner p {
  margin: 20px 0px;
}
.image-avatar {
  width: 200px;
  height: 300px;
  object-fit: cover;
}
.card {
  
  transition: 0.3s;
  width: 250px;
  height: 480px;
  margin: 20px;
  background-color: white;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}
</style>
