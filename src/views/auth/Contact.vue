<template>
  <main>
    <div class="card card-body shadow border-0">
      <form
        class="row g-3 needs-validation"
        id="contact"
        @submit="handleSubmit"
        novalidate
      >
        <div class="col-md-6">
          <label for="firstname" class="form-label">First name</label>
          <input
            type="text"
            class="form-control"
            id="firstname"
            v-model="contact.firstname"
            placeholder="FirstName"
            autocomplete="given-name"
            required
          />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-6">
          <label for="lastname" class="form-label">Last name</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            v-model="contact.lastname"
            placeholder="LastName"
            autocomplete="family-name"
            required
          />
          <div class="valid-feedback">
            Looks good!
          </div>
        </div>
        <div class="col-md-6">
          <label for="username" class="form-label">Username</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="contact.username"
              aria-describedby="inputGroupPrepend"
              placeholder="Username"
              autocomplete="username"
              required
            />
            <div class="invalid-feedback">
              Please choose a username.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="state" class="form-label">State</label>
          <select
            class="form-select"
            id="state"
            v-model="contact.state"
            required
          >
            <option selected disabled value="">--Select State--</option>
            <option value="state">State</option>
          </select>
          <div class="invalid-feedback">
            Please select a valid state.
          </div>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="contact.terms"
              id="terms"
              required
            />
            <label class="form-check-label" for="terms">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import axios from "axios";
const baseURL = "http://localhost:3000/users";

export default {
  name: "contact",
  data() {
    return {
      contact: {
        firstname: "",
        lastname: "",
        username: "",
        state: "",
        terms: "",
      },
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      let contactForm = document.querySelector("#contact");
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add("was-validated");
      } else {
        try {
          let id = Math.floor(Math.random() * 99999);

          this.checkId(id);
          const resp = await axios.post(baseURL, {
            id,
            user: this.contact,
          });
          console.log(resp.data);
          contactForm.reset();
        } catch (e) {
          console.error(e);
        }
      }
    },
    async checkId(id) {
      // CHECK IF AN ID EXIST
      try {
        let resp = await axios.get(baseURL);
        let users = resp.data;
        users.forEach((user) => {
          if (user.id === id) {
            console.log("hey");
            return;
          } else {
            console.log("ho");
          }
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped></style>
