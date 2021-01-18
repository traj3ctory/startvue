<template>
  <div class="row">
    <div class="mx-auto col-sm-6" v-for="todo in todos" :key="todo.id">
      <div class="card mb-3 shadow-sm p-2">
        <div class="card-header">{{ todo.title }}</div>
        <div class="card-body">
          {{ todo.project }}
        </div>
        <div class="card-footer">
          <div class="float-right">
            <i class="fas fa-trash-alt mr-1"></i>
            <i class="fas fa-edit"></i>
          </div>

          <div align="center" class="mt-4">
            <button class="btn btn-sm btn-success" v-show="todo.done">
              <i class="fas fa-check-circle"></i>&nbsp;Completed
            </button>
            <button class="btn btn-sm btn-danger" v-show="!todo.done">
              <i class="fas fa-times"></i>&nbsp;Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="text/<script">
export default {
    props: ['todo'],
}
</script>

<style></style>
