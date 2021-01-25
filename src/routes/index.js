import list from '../pages/List.vue'
import form from '../pages/Form.vue'
import hello from '../pages/Hello.vue'
import todo from '../pages/TodoPage.vue'
import start from '../pages/Start.vue'

export default({
  routes : [
    { path: '/,', name: 'hello', component: hello },
    { path: '/list', name: 'list', component: list },
    { path: '/form,', name: 'form', component: form },
    { path: '/todo,', name: 'todoapp', component: todo },
    { path: '/start,', name: 'start', component: start },
  ]
})