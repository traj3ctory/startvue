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
    <ul>
      <li v-for="cat in cats" :key="cat.name" class="text-white">{{ cat.name }}</li>
    </ul>
  </div>
</template>

<script> 
export default {
  name: "start",
  
  data() {
    return {
      data: {
        cats: [{ name: "kittyKat" }, { name: "fish" }, { name: "kart" }],
        newCat: "",
      },
    };
  },
  methods: {
    addKitty: function () {
      this.cats.push({ name: this.newCat });
      console.log(this.cats)
      this.newCat = "";
    },
  },
};
</script>

<style scoped>
</style>