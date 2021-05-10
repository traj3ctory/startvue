<template>
  <div id="app" class="contain">
    <layout class="mb-4"/>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import layout from './layout'
export default {
  name: 'App',
  components: {
    layout,
  }
};
</script>

<style>
.contain {
  background-color: #1a202c !important;
  min-height: 100vh;
  padding-bottom: 1rem;
} 
</style>
