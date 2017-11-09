<template>
  <div>
    <todo-form></todo-form>
    <todo-list></todo-list>
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
    }
  }
</script>

<style>
</style>
