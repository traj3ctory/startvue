<template>
  <div>
    <button
     class="position-absolute top-50 end-0 btn btn-sm btn-light"
      v-on:click="openForm"
      v-show="!isCreating"
    >
      <i class="fas fa-plus"></i>
    </button>

    <div
      class="d-flex justify-content-center align-items-center"
    >
      <div class="card shadow-sm" 
      v-show="isCreating">
        <div class="card-body">
          <div class="form">
            <div class="form-group mb-3">
              <label>Title</label>
              <input
                v-model="titleText"
                class="form-control form-control-sm"
                type="text"
              />
            </div>
            <div class="form-group mb-3">
              <label>Project</label>
              <input
                v-model="projectText"
                class="form-control form-control-sm"
                type="text"
              />
            </div>
            <div class="mx-auto">
              <button
                class="btn btn-sm btn-primary mr-1"
                v-on:click="sendForm()"
              >
                <i class="fas fa-check-circle"></i>&ensp;Create
              </button>
              <button class="btn btn-sm btn-danger ml-1 active" v-on:click="closeForm">
                Cancel&ensp;<i class="fas fa-times-circle"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleText: "",
      projectText: "",
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText;
        const project = this.projectText;
        this.$emit("create-todo", {
          title,
          project,
          done: false,
        });
        this.titleText = "";
        this.projectText = "";
        this.isCreating = false;
      }
    },
  },
};
</script>
