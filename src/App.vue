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
  color:white;
  min-height: 100vh;
} 
</style>
