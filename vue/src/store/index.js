import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers = {
  'Access-Control-Allow-Origin': '*',
  // 'Cache-Control': 'no-cache',
}

const Todos = {
  namespaced: true,
  state: {
    todos: [
      // {todo: "foo", done: true, edit: false},
      // {todo: "bar", done: false, edit: false}
    ],
  },
  getters: {
    count(state) {
      return state.todos.length
    },
    doneTodos(state) {
      return state.todos.filter(todo => todo.done)
    },
    undoneTodos(state) {
      return state.todos.filter(todo => !todo.done)
    }
  },
  actions: {
    fetch({commit}) {
      axios.get('/todos')
        .then((response) => {
          commit('fetch', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    add({commit}, payload) {
      commit('add', payload)
    },
    toggle({commit}, index) {
      commit('toggle', index)
    },
    remove({commit}, index) {
      commit('remove', index)
    },
    change({commit}, payload){
      commit('change', payload)
    },
    clear({commit}) {
      commit('clear')
    }
  },
  mutations: {
    fetch(state, todos) {
      state.todos = todos
    },
    add(state, newTodo) {
      state.todos.push(newTodo)
    },
    toggle(state, index) {
      if (state.todos[index]) {
        const todoItem = state.todos[index]
        todoItem.done = !todoItem.done
      }
    },
    remove(state, index) {
      if (state.todos[index]) {
        state.todos.splice(index, 1)
      }
    },
    change(state, payload) {
      const index = payload.index
      const props = payload.props

      if (state.todos[index]) {
        const todo = state.todos[index]
        for (let name in props) {
          todo[name] = props[name]
        }
      }
    },
    clear(state) {
      const length = state.todos.length
      for(let i = length - 1; i >= 0; i--) {
        state.todos.splice(i, 1)
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    Todos
  }
})
