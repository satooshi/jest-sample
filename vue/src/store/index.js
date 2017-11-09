import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const TodoInput = {
  namespaced: true,
  strict: true,
  state: {todo: '', done: false},
  getters: {
    isValid (state) {
      return !!state.todo
    }
  },
  mutations: {
    set(state, todo) {
      state.todo = todo
    },
    clear(state) {
      state.todo = ''
      state.done = false
    }
  }
}

const Todos = {
  namespaced: true,
  state: [
    {todo: "foo", done: true},
    {todo: "bar", done: false}
  ],
  actions: {
    add({ commit, rootState }) {
      const newTodo = {
        todo: rootState.TodoInput.todo,
        done: false
      }
      commit('add', newTodo)
      commit('TodoInput/clear', null, { root: true })
    },
    toggle({commit}, index) {
      commit('toggle', index)
    },
    remove({commit}, index) {
      commit('remove', index)
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
    TodoInput,
    Todos
  }
})
