<template>
  <div id="todoapp" class="container-fluid contain">
    <div class="container-fluid mb-4">
      <todo-list v-bind:todos="todos"></todo-list>
      <create-todo v-on:create-todo="createTodo"></create-todo>
    </div>
  </div>
</template>

<script>
import sweetalert from "sweetalert";
import TodoList from "../components/TodoList";
import CreateTodo from "../components/CreateTodo";

export default {
  name: "todoapp",
  components: {
    TodoList,
    CreateTodo,
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

  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert("Success!", "To-Do created!", "success");
    },
  },
};
</script>

<style>
:root {
  --info: linear-gradient(60deg, #26c6da, #00acc1);
  --error: linear-gradient(60deg, #ef5350, #e53935);
  --success: linear-gradient(60deg, #66bb6a, #43a047);
  --warning: linear-gradient(60deg, #ffa726, #fb8c00);
}
.body {
  width: 100vw;
}

.contain {
  background-color: #1a202c !important;
  display: flex;
  min-height: 100vh;
  align-items: center;
  width: 100vw;
  justify-content: center;
}

.btn-info,
.bg-info {
  background-color: var(--info) !important;
}
.btn-outline-info:hover {
  background-color: var(--info) !important;
}

.btn-success,
.bg-success {
  background-color: var(--success) !important;
}

.btn-warning,
.bg-warning {
  background-color: var(--warning) !important;
}
</style>
