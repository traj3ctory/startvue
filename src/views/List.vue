<template>
  <div>
    <!-- Loader -->
    <div v-if="loading" class="loader">
      <div class="spinner-border text-light" role="status"></div>
    </div>

    <!-- Display Topics -->
    <div v-if="topics">
      <div
        class="mb-3 border-bottom card shadow-sm"
        v-for="topic in topics"
        :key="topic.searchScore"
      >
        <div class="card-header">{{ topic.package.name }}</div>
        <div class="card-body">{{ topic.package.description }}</div>
      </div>
    </div>

    <!-- Display if not topic -->
    <div v-else>
      <div class="card card-body text-center">
        <h4>No Post</h4>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loader {
  min-height: 100vh;
  min-width: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "list",
  //State
  data() {
    return {
      loading: false,
      posts: [],
      // topics: [],
      total: "",
    };
  },

  //Function
  methods: {
    getUsers: async function () {
      // go get the users using an HTTP call
      this.loading = true;
      try {
        const response = await fetch("https://api.npms.io/v2/search?q=vue");
        let data = await response.json();
        this.topics = data.results;
        this.total = data.total;

        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await res.json();
        this.posts = posts;
      } catch (e) {
        console.log(e.message);
      }
      this.loading = false;
    },
  },

  // when our Vue app is created, go get the list of users
  async created() {
    this.getUsers();
    console.log(this.posts);
  },
  mounted() {
    // console.log("mounted");
    // console.log(this.posts)
    // this.getUsers();
  },
  updated() {
    console.log("updated");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>