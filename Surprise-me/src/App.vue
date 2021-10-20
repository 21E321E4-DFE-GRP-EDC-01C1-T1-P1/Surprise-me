<template>
  <div>
    <div
      id="nav"
      class="
        bg-gradient-to-r
        from-yellow-400
        via-red-500
        to-pink-500
        text-xl
        grid grid-cols-6
        gap-1
        justify-between
      "
    >
      
      <div class="grid grid-flow-col grid-cols-1 grid-rows-1 ">
        <img src="./assets/surpriselogo.svg" class="logo_app" alt="logo" />
        <router-link class="text-black" to="/">Inicio</router-link> 
        <router-link class="text-black" to="/User">Usuário</router-link>
        <router-link class="text-black" to="/Events">Eventos</router-link>
      </div>
      <div class="flex justify-end">
        <router-link class="text-black order-last" to="/About"
          >Sobre</router-link
        >
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap");

.logo_app {
  border-radius: 190px;
  width: 50px;
  height: 50px;
  margin: 0px 10px;
  background-color: aliceblue;
}

#nav {
  width: 100%;
  padding: 10px;
  background-color: #808080;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: black;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: white;
}
body {
  font-family: "Roboto", sans-serif;
  height: 600px;
}
</style>
