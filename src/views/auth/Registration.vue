<template>
<<<<<<< HEAD
  <main class="d-flex align-items-center justify-content-center w-100" style="min-height: 80vh">
    <form action="" id="registration" @submit="handleClick">
          <div class="card">
            <div class="card-header py-2 bg-default border-0">
              <h4 class="h4 text-center text-white">Registration</h4>
=======
  <main class="container-lg">
    <form action="" id="registration" @submit="handleClick">
      <div class="card">
        <div class="card-header py-2 bg-info">
          <h4 class="h4 text-center text-white">Login</h4>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  name="firstname"
                  v-model="form.firstname"
                  autocomplete="given-name"
                  placeholder="firstname"
                />
                <label for="firstname">First Name</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="lastname"
                  name="lastname"
                  v-model="form.lastname"
                  autocomplete="family-name"
                  placeholder="lastname"
                />
                <label for="lastname">Last Name</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  v-model="form.username"
                  autocomplete="username"
                  placeholder="username"
                />
                <label for="username">Username</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  v-model="form.email"
                  autocomplete="email"
                  placeholder="Email"
                />
                <label for="email">Email</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  v-model="form.password"
                  placeholder="Password"
                />
                <label for="password">Password</label>
              </div>
>>>>>>> e0e7012fb3d6b87c2f59ca68fd06edfe70a810a3
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
<<<<<<< HEAD
            <div class="card-footer bg-transparent text-center">
              <small>Already have an account ?<span><router-link to="/login" class="nav-link">Login&nbsp;Here</router-link></span></small>
=======
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  name="address"
                  v-model="form.address"
                  autocomplete="street-address"
                  placeholder="Address"
                />
                <label for="address">Address</label>
              </div>
            </div>

            <div class="w-100 my-3 text-center">
              <button type="reset" class="btn btn-danger mx-1">
                <i class="fa fa-trash"></i>&nbsp;Reset
              </button>
              <button type="submit" class="btn btn-primary mx-1">
                Submit&nbsp;<i class="fa fa-folder-open"></i>
              </button>
>>>>>>> e0e7012fb3d6b87c2f59ca68fd06edfe70a810a3
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
<<<<<<< HEAD
      if (this.form.password !== this.form.cpassword) {
        alert("password doesn't match");
        return false;
      }
      const formReg = document.getElementById("registration");
      if (!formReg.checkValidity()) {
        return false;
      }
      alert(JSON.stringify(this.form));
=======
      this.form.password === this.form.cpassword
        ? console.log("hello")
        : console.log("hi");
      // alert(JSON.stringify(this.form))
>>>>>>> e0e7012fb3d6b87c2f59ca68fd06edfe70a810a3
    },
  },
};
</script>

<style scoped>
</style>
