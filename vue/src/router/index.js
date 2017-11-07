import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Todo
    }
  ]
})
