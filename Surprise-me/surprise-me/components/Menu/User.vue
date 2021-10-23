<template>
  <b-nav-item-dropdown right>
    <!-- Using 'button-content' slot -->
    <template #button-content>
      <em>Usuario</em>
    </template>
    <b-dropdown-item href="#">Logar</b-dropdown-item>
    <b-dropdown-item href="#">Cadastar</b-dropdown-item>
    <b-dropdown-item href="#">Editar</b-dropdown-item>
    <b-dropdown-item href="#">Listagem</b-dropdown-item>
    <b-dropdown-item href="#">Excluir</b-dropdown-item>
  </b-nav-item-dropdown>
  
</template>

<script>
export default {
methods: {
   create: function () {
      
   }
}
};
</script>