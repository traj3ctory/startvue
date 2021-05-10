<template>
  <div class="col-lg-3 col-md-4 col-6 mx-auto">
    <div class="card mb-3 shadow-sm">
      <div class="content" v-show="!isEditing">
        <div class="card-header">
          {{ todo.title }}
        </div>
        <div class="card-body p-2">
          {{ todo.project }}
        </div>
        <div class="text-right p-1">
          <span class="text-info btn btn-sm" v-on:click="showForm">
            <i class="fas fa-edit"></i>
          </span>
          <span class="text-danger btn btn-sm" v-on:click="deleteTodo(todo)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </div>
      </div>

      <div class="card">
        <div class="card-body p-2" v-show="isEditing">
          <div class="form">
            <div class="form-group mb-2">
              <label>Title</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="todo.title"
              />
            </div>
            <div class="form-group mb-2">
              <label>Project</label>
              <input
                type="text"
                class="form-control form-control-sm"
                v-model="todo.project"
              />
            </div>

            <button class="btn btn-sm btn-info float-right" v-on:click="hideForm">
               <i class="fas fa-chevron-left"></i>&ensp;Back
            </button>
          </div>
        </div>

      <div class="card-footer p-1 mx-auto border-0">
        <button
          class="btn btn-sm btn-success"
          v-show="!isEditing && todo.done"
          disabled
        >
          Completed&ensp;<i class="fas fa-check-double"></i>
        </button>
        <button
          class="btn btn-sm btn-outline-info"
          v-on:click="completeTodo(todo)"
          v-show="!isEditing && !todo.done"
        >
          Pending&ensp;<i class="fas fa-sync"></i>
        </button>
      </div>

      
      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    },
    deleteTodo(todo) {
      this.$emit("delete-todo", todo);
    },
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
  },
};
</script>

<style lang="stylus"></style>
