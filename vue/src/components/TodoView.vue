<template>
  <div>
    <todo-form :todo="todo" @add="onAddTodo"></todo-form>
    <todo-list :type="type"></todo-list>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import TodoForm from './TodoForm.vue';
  import TodoList from './TodoList.vue';

  export default {
    name: 'TodoView',
    components: {
      TodoForm,
      TodoList
    },
    props: {
      type: String,
      default: 'all',
    },
    data() {
      return {
        todo: {
          todo: '',
          done: false,
          edit: false,
        }
      }
    },
    methods: {
      onAddTodo() {
        this.todo = {
          todo: '',
          done: false,
          edit: false,
        }
      }
    }
  }
</script>

<style>
</style>
