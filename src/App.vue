<template>
<div id="app">
  <div class="container-fluid">
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: {
    TodoList,
  },

  //data function
  data() {
    return {
      todos: [
        {
          title: "Todo A",
          project: "Project A",
          done: false,
        },
        {
          title: "Todo B",
          project: "Project B",
          done: true,
        },
        {
          title: "Todo C",
          project: "Project C",
          done: false,
        },
        {
          title: "Todo D",
          project: "Project D",
          done: false,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

