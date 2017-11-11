import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'underscore'

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
          //console.log(error)
        })
    },
    add({commit}, payload) {
      axios.post('/todos', {todo: payload})
        .then((response) => {
          commit('add', response.data)
        })
        .catch((error) => {
          // console.log(error)
        })
    },
    toggle({commit}, todo) {
      axios.patch('/todos/' + todo.id, {done: !todo.done})
        .then((response) => {
          commit('change', response.data)
        })
        .catch((error) => {
          // console.log(error)
        })

    },
    remove({commit}, id) {
      axios.delete('/todos/' + id)
        .then((response) => {
          commit('remove', id)
        })
        .catch((error) => {
          // console.log(error)
        })
    },
    change({commit}, todo){
      axios.patch('/todos/' + todo.id, {todo: todo})
        .then((response) => {
          commit('change', response.data)
        })
        .catch((error) => {
          // console.log(error)
        })
    },
    clear({commit}) {
      axios.delete('/todos')
        .then((response) => {
          commit('clear')
        })
        .catch((error) => {
          // console.log(error)
        })
    }
  },
  mutations: {
    fetch(state, todos) {
      state.todos = todos
    },
    add(state, newTodo) {
      state.todos.push(newTodo)
    },
    remove(state, id) {
      const index = _.findIndex(state.todos, todo => todo.id === id)

      if (index >= 0) {
        state.todos.splice(index, 1)
      }
    },
    change(state, payload) {
      const index = _.findIndex(state.todos, todo => todo.id === payload.id)
      if (index >= 0) {
        const todo = state.todos[index]
        for (let name in payload) {
          Vue.set(todo, name, payload[name])
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
