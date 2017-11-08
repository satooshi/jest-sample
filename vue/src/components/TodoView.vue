<template>
  <div>
    <todo-form :store="this.store" @submit="onSubmit"></todo-form>
    <todo-list :store="this.store" @toggle="onToggleTodo" @delete="onDeleteTodo"></todo-list>
  </div>
</template>

<script>
  import Vue from "vue"
  import Vuex from "vuex"
  import TodoForm from "./TodoForm.vue";
  import TodoList from "./TodoList.vue";

  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: {
      todoInput: {todo: '', done: false},
      todos: [
        {todo: "foo", done: true},
        {todo: "bar", done: false}
      ]
    }
  })

  export default {
    name: 'TodoView',
    data() {
      return {
        store: store
      }
    },
    components: {
      TodoForm,
      TodoList
    },
    methods: {
      onSubmit(newTodo) {
        this.store.state.todos.push(newTodo)
      },
      onToggleTodo(index) {
        if (this.store.state.todos[index]) {
          const todo = this.store.state.todos[index]
          todo.done = !todo.done
        }
      },
      onDeleteTodo(index) {
        if (this.store.state.todos[index]) {
          this.store.state.todos.splice(index, 1)
        }
      }
    }
  }
</script>

<style>
</style>
