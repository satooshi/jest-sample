import Vue from 'vue'
import Router from 'vue-router'
import TodoView from '@/components/TodoView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: TodoView
    }
  ]
})
