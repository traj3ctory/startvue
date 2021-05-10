<template>
  <div>
    <input
      class="form-control mb-3"
      type="text"
      name="cat"
      id="cat"
      width="200px"
      @keyup.enter="addKitty"
    />
    <button class="btn btn-sm btn-info" type="submit" @click="addKitty">
      + Add
    </button>
    <hr />
    <ul v-if="cats">
      <li v-for="cat in cats" :key="cat.name" class="text-white">
        {{ cat.name }}
      </li>
    </ul>
    <div v-if="!cats">No cat available</div>
  </div>
</template>

<script>
export default {
  name: "start",
  data() {
    return {
      cats: [{ name: "kittyKat" }, { name: "fish" }, { name: "kart" }],
      newCat: "",
    };
  },
  methods: {
    addKitty: function () {
      this.cats.push({ name: this.newCat });
      console.log(this.cats);
      this.newCat = "";
    },
  },
};
</script>

<style scoped>
</style>