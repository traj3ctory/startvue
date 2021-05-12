<template>
  <main class="container-lg">
    <form action="" id="login" @submit="handleClick">
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
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="cpassword"
                  v-model="form.cpassword"
                  placeholder="Confirm Password"
                />
                <label for="cpassword">Confirm&nbsp;Password</label>
              </div>
            </div>

            <div class="col-md-6 mb-3">
              <div class="form-floating">
                <input
                  type="tel"
                  class="form-control"
                  id="tel"
                  name="telephone"
                  v-model="form.telephone"
                  autocomplete="tel"
                  placeholder="Telephone"
                />
                <label for="tel">Telephone</label>
              </div>
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
              <button type="reset" class="btn btn-danger mx-1"><i class="fa fa-trash"></i>&nbsp;Reset</button>
              <button type="submit" class="btn btn-primary mx-1">Submit&nbsp;<i class="fa fa-folder-open"></i></button>
            </div>
          </div>
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
        event.preventDefault()
        this.form.password === this.form.cpassword ? console.log('hello') : console.log('hi');
        // alert(JSON.stringify(this.form))
      },
  }
};
</script>

<style scoped></style>
