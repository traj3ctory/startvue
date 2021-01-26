<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <router-link tag="li" to="/" class="nav-link"> Home </router-link>
        <router-link tag="li" to="/list" class="nav-link"> List </router-link>
        <router-link tag="li" to="/form" class="nav-link"> form </router-link>
        <router-link tag="li" to="/todo" class="nav-link"> Todo </router-link>
        <router-link tag="li" to="/start" class="nav-link"> Start </router-link>
        <router-link tag="li" to="/quiz" class="nav-link"> Quiz </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "navheader",
};
</script>

<style scoped>
ul > li {
  cursor: pointer;
}
</style>