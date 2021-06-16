<template>
  <main class="d-flex align-items-center justify-content-center" style="min-height: 80vh">
    <div class="row w-100">
      <div class="col-lg-4 col-md-5 col-12 mx-auto">
        <form action="" id="login" @submit="handleClick">
          <div class="card border-0 shadow rounded-3">
            <div class="card-header py-2 bg-default">
              <h5 class="h5 text-center text-white">Login</h5>
            </div>
            <div class="card-body">
              <div class="form-group mb-3">
                <label for="username">Username</label>
                <input
                  type="email"
                  class="form-control"
                  id="username"
                  placeholder="name@example.com"
                />
                
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <!-- Footer -->
            <div class="card-footer w-100 text-center">
              <button type="reset" class="btn btn-sm btn-danger mx-1">
                <i class="fa fa-trash"></i>&nbsp;Reset
              </button>
              <button type="submit" class="btn btn-sm btn-primary mx-1">
                Submit&nbsp;<i class="fa fa-folder-open"></i>
              </button>
            </div>
            <small class="text-center">Don't have an account?<span><router-link to="/registration" class="nav-link">Register&nbsp;Here</router-link></span></small>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    handleClick(event) {
      event.preventDefault();
      if (this.form.password !== this.form.cpassword) {
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
