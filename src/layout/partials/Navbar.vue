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
        <router-link
          v-for="route in routes"
          :key="route.name"
          tag="li"
          :to="route.path"
          class="nav-link"
        >
          {{ route.name }}
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
let routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/list",
    name: "List",
  },
  {
    path: "/form",
    name: "Form",
  },
  {
    path: "/todo",
    name: "Todo",
  },
  {
    path: "/start",
    name: "Start",
  },
  {
    path: "/quiz",
    name: "Quiz",
  },
  {
    path: "/login",
    name: "Login",
  },
  {
    path: "/forgot",
    name: "Forgot",
  },
  {
    path: "/registration",
    name: "Registration",
  },
];
export default {
  name: "navheader",
  data() {
    return {
      routes: routes,
    };
  },
};
</script>

<style scoped>
ul > li {
  cursor: pointer;
}
</style>
