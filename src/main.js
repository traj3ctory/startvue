import Vue from 'vue'
import App from './App.vue'
import router from "vue-./router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import route from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter);

// const router = new VueRouter({
//   routes,
//   mode: "history",
// });

// Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
