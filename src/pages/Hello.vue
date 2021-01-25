<template>
  <div class="mt-4">
    <div class="row text-black">
      <div class="col-md-3" v-for="user in users" :key="user.id">
        <div class="card mb-3">
          <div class="card-header text-center">
            <img
              :src="user.avatar"
              width="50%"
              height="auto"
              class="img-fluid"
            />
          </div>
          <div class="card-body" :style="myColor">Name: {{ user.name }}</div>
          <div class="card-footer">Username: {{ user.username }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<style scoped>
</style>

<script>
let users = [
  {
    id: 1,
    name: "Chris",
    username: "chrisoncode",
    avatar: "https://static.toiimg.com/photo/76729750.cms",
  },
  {
    id: 2,
    name: "Nick",
    username: "whatnicktweets",
    avatar: "https://static.toiimg.com/photo/76729750.cms",
  },
  {
    id: 3,
    name: "Holly",
    username: "hollylawly",
    avatar: "https://static.toiimg.com/photo/76729750.cms",
  },
  {
    id: 4,
    name: "Holly",
    username: "hollylawly",
    avatar: "https://static.toiimg.com/photo/76729750.cms",
  },
];

export default {
  name: 'hello',
  
  data() {  
    return {
      users: users,
      myColor: {
        color: "red",
      },
    };
  },
};
</script>