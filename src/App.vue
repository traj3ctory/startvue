<template>
  <div id="app" class="contain">
    <layout class="mb-4" />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import layout from "./layout";
export default {
  name: "App",
  components: {
    layout,
  },
};
</script>
