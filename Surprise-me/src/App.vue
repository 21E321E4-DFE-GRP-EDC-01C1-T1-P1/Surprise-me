<template>
  <div id="nav">
    <img src="./assets/surpriselogo.svg" class="logo_app" alt="logo">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/User">User</router-link>
  </div>
  <router-view/>
</template>

<style>
.logo_app {
  border-radius: 190px;
  width:50px;
  height: 50px;
  margin: -30px 10px;
  background-color:aliceblue;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #070707;
}

#nav {
  width: 100%;
  padding: 10px;
  background-color:#808080;
  text-align: justify;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background-color:aliceblue;
}
</style>
