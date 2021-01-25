import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// import route from './routes'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter);

import list from './pages/List.vue'
import form from './pages/Form.vue'
import hello from './pages/Hello.vue'
import todo from './pages/TodoPage.vue'
import start from './pages/Start.vue'

const routes = [
  {
    path: "",
    component: hello,
  },
  {
    path: "/form",
    component: form,
  },
  {
    path: "/list",
    component: list,
  },
  {
    path: "/todo",
    component: todo,
  },
  {
    path: "/start",
    component: start,
  },
];


const router = new VueRouter({
  routes,
  mode: "history",
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
