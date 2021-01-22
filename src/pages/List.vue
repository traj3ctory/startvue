<template>
  <div :if="users" class="bg-light shadow-sm p-4 my-3">
    <div v-for="{user, index} in users" :key="index">{{ user.package.description }}</div>
  </div>
  <!-- <div class="text-info p-5">Hello</div> -->
</template>

<style>
</style>

<script>
export default {
  //State
  data() {
    return {
      data: {
        users: null, // create the variable so Vue knows it exists
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
      console.log(this.users)
    },
  },

  // when our Vue app is created, go get the list of users
  async created() {
    this.getUsers();
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>