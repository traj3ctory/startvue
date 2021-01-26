<template>
  <div>
    <h1 class="text-white">hello</h1>
    <Header />
    <Body />
  </div>
</template>

<script>
import Header from "./Qheader";
import Body from "./Qbody";

export default {
  name: "question",
  components: {
    Header,
    Body,
  },
};
</script>