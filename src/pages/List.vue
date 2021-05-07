<template>
  <div class="bg-light shadow-sm p-4 my-3">
    <div class="mb-3 border-bottom" v-for="user in users" :key="user.id">{{ user.package.name }}</div>
  </div>
  <!-- <div class="text-info p-5">Hello</div> -->
</template>

<style>
</style>

<script>
export default {
  name: 'list',
  //State
  data() {
    return {
      data: {
        users: [],
        totalVuePackages: [], // create the variable so Vue knows it exists
      },
    };
  },

  //Function
  methods: {
    getUsers: async function () {
      // go get the users using an HTTP call

      const response = await fetch("https://api.npms.io/v2/search?q=vue");
      const data = await response.json();
      this.totalVuePackages = data.total;
      this.users = data.results;
      console.log(this.users);
      console.log(this.totalVuePackages);
    },
  },

  // when our Vue app is created, go get the list of users
  async created() {
    this.getUsers();
  },
  mounted() {
    console.log("mounted");
    this.getUsers();
  },
  updated() {
    console.log("updated");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>