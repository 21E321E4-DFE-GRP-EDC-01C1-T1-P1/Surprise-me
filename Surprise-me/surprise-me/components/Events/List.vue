<template>
  <div>
    <div v-for="item in items" :key="item.id" class="my-3">
      <b-card no-body class="overflow-hidden " style="max-width: 740px">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img
              v-bind:src="item.imgUrl"
              v-bind:alt="item.nome"
              class="rounded-0"
            ></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-bind:title="item.nome">
              <b-card-text>
                {{ item.descricao }}
              </b-card-text>
              <b-card-text>
              Atualizado: {{ dataform(item.updatedAt) }}
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
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
    fetch("http://localhost:3030/events", { method: "GET" })
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
</style>
