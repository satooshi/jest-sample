<template>
    <form novalidate @submit.prevent="submit" class="container" :class="classObjectForm">
      <todo-input @input="onInputTodo" :store="this.store"></todo-input>
    </form>
</template>

<script>
  import TodoInput from "./TodoInput.vue";

  export default {
    name: 'TodoForm',
    props: {
      store: Object
    },
    data () {
      return {
        classObjectForm: {
          'was-validated': false
        },
      }
    },
    components: {
      TodoInput
    },
    methods: {
      isValid() {
        this.classObjectForm['was-validated'] = true
        return !!this.store.state.todoInput.todo
      },
      clear() {
        this.store.state.todoInput.todo = ''
        this.classObjectForm['was-validated'] = false
      },
      submit() {
        if (this.isValid()) {
          const newTodo = {
            todo: this.store.state.todoInput.todo,
            done: false
          }
          this.clear()
          this.$emit('submit', newTodo)
        }
      },
      onInputTodo(newValue) {
        this.store.state.todoInput.todo = newValue
      }
    }
  }
</script>

<style>
</style>
