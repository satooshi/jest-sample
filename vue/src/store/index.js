import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Todos = {
  namespaced: true,
  state: [
    {todo: "foo", done: true, edit: false},
    {todo: "bar", done: false, edit: false}
  ],
  getters: {
    count(state) {
      return state.length
    },
    doneTodos(state) {
      return state.filter(todo => todo.done)
    },
    undoneTodos(state) {
      return state.filter(todo => !todo.done)
    }
  },
  actions: {
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
    add(state, newTodo) {
      state.push(newTodo)
    },
    toggle(state, index) {
      if (state[index]) {
        const todoItem = state[index]
        todoItem.done = !todoItem.done
      }
    },
    remove(state, index) {
      if (state[index]) {
        state.splice(index, 1)
      }
    },
    change(state, payload) {
      const index = payload.index
      const props = payload.props

      if (state[index]) {
        const todo = state[index]
        for (let name in props) {
          todo[name] = props[name]
        }
      }
    },
    clear(state) {
      const length = state.length
      for(let i = length - 1; i >= 0; i--) {
        state.splice(i, 1)
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    Todos
  }
})
