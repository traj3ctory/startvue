<template>
  <div id="app" class="container-fluid contain">
    <layout class="mb-4"/>
    <router-view />
  </div>
</template>

<script>

import layout from './layout'
export default {
  name: 'App',
  //data function
  components: {
    layout,
  }
};
</script>

<style>
.contain {
  background-color: #1a202c !important;
  min-height: 100vh;
  /* display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;*/
} 
</style>
