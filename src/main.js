import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import List from './pages/List.vue'
import Form from './pages/Form.vue'
import Hello from './pages/Hello.vue'
import Todo from './pages/TodoPage.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)

const routes = [
  { path: '/,', component: Hello },
  { path: '/list', component: List },
  { path: '/form,', component: Form },
  { path: '/todo,', component: Todo },
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
