import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import Vuex from 'vuex'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import route from './routes'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Vuex)

// Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
