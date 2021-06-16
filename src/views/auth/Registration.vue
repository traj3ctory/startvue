<template>
  <main class="d-flex align-items-center justify-content-center w-100" style="min-height: 80vh">
    <form action="" id="registration" @submit="handleClick">
          <div class="card">
            <div class="card-header py-2 bg-default border-0">
              <h4 class="h4 text-center text-white">Registration</h4>
            </div>
            <div class="card-body">
              <div class="row">

                <div class="col-md-6 mb-3">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      name="email"
                      v-model="form.email"
                      autocomplete="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              
                </div>

                <div class="w-100 my-3 text-center">
                  <button type="reset" class="btn btn-danger mx-1">
                    <i class="fa fa-trash"></i>&nbsp;Reset
                  </button>
                  <button type="submit" class="btn btn-primary mx-1">
                    Submit&nbsp;<i class="fa fa-folder-open"></i>
                  </button>
                </div>
              </div>
            <div class="card-footer bg-transparent text-center">
              <small>Already have an account ?<span><router-link to="/login" class="nav-link">Login&nbsp;Here</router-link></span></small>
            </div>
          </div>
    </form>
  </main>
</template>

<script>
export default {
  name: "registration",
  data() {
    return {
      form: {
        username: "",
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        cpassword: "",
        telephone: "",
        address: "",
      },
      show: true,
    };
  },
  methods: {
    handleClick(event) {
      event.preventDefault();
      if (this.form.password !== this.form.cpassword) {
        alert("password doesn't match");
        return false;
      }
      const formReg = document.getElementById("registration");
      if (!formReg.checkValidity()) {
        return false;
      }
      alert(JSON.stringify(this.form));
    },
  },
};
</script>

<style scoped>
</style>
