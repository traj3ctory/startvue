<template>
  <main
    class="d-flex align-items-center justify-content-center"
    style="min-height: 80vh"
  >
    <div class="row w-100">
      <div class="col-lg-5 col-md-8 col-12 mx-auto">
        <form action="" id="login" @submit="handleClick">
          <div class="card border-0 shadow rounded-3">
            <div class="card-header py-2 bg-default">
              <h5 class="h5 text-center text-white">Forgot Password</h5>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="username" class="sr-only">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="username"
                  placeholder="Email"
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
            <small class="text-center d-none"
              >Don't have an account?<span
                ><router-link to="/registration" class="nav-link"
                  >Register&nbsp;Here</router-link
                ></span
              ></small
            >
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "forgot",
  data() {
    return {
      email: "",
    };
  },
};
</script>

