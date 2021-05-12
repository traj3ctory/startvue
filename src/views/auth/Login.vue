<template>
  <div class="row">
    <div class="col-md-6 mx-auto">
      <main>
        <form action="" id="login">
          <div class="card">
            <div class="card-header py-2 bg-info">
              <h4 class="h4 text-center text-white">Login</h4>
            </div>
            <div class="card-body">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Username</label>
              </div>
              <div class="form-floating">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Password</label>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  </div>
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
};
</script>

<style scoped></style>
