<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <b-avatar
          src="..\static\surpriselogo.svg"
          class="d-inline-block align-top"
          alt="Kitten"
          style="background-color: #fff"
          to="/"
        ></b-avatar>
      </b-navbar-brand>
      <b-navbar-brand to="/">Surprise-me</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Eventos</b-nav-item>
          <b-nav-item href="#">Calendario</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <MenuEvents />
          <MenuUser />
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="input-group mb-3" style="max-width: 740px; margin: 1em auto">
        <input
          type="text"
          class="form-control"
          placeholder="Evento"
          aria-label="Evento"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Filtrar
        </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>