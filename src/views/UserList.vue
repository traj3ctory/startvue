<template>
  <main></main>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000/users";

export default {
  name: "UserList",
  data() {
    return {
      users: null,
    };
  },
  methods: {
    async getUsers() {
      try {
        const resp = await axios.post(baseURL);
        console.log(resp.data);
      } catch (e) {}
    },
  },
};
</script>
