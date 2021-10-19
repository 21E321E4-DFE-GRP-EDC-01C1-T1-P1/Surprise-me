<template>
  <div class="create">
    <h1>Criação de conta</h1>
    <input type="text" placeholder="Name" v-model="nome" />
    <br />
    <input type="text" placeholder="Email" v-model="email" />
    <br />
    <input type="password" placeholder="Senha" v-model="senha" />
    <br />
    <input type="text" placeholder="Cargo" v-model="posicao" />
    <br />
    <input type="text" placeholder="Status" v-model="status" />
    <br />
    <input type="text" placeholder="Endereço" v-model="endereco" />
    <br />
    <input type="text" placeholder="Url da Imagem" v-model="imgUrl" />
    <br />
    <button @click="create">Criar Conta</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nome: "",
      email: "",
      senha: "",
      posicao: "",
      status: "",
      endereco: "",
      imgUrl: "",
      items: [],
    };
  },
  methods: {
    create() {
      fetch("http://localhost:3030/user", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body:  JSON.stringify({
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        posicao: this.posicao,
        status: this.status,
        endereco: this.endereco,
        imgUrl: this.imgUrl,
      }),
      })
        .then((res) => res.json())
        .then((data) => (this.items = data))
        .then(() => {
          alert(this.items.message);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>
<style scoped>
.create {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}
button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #202020;
  border: 0;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 10px;
  padding:20px 80px;
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>