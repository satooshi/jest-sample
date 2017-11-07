<template>
  <div>
    <form novalidate @submit.prevent="addTodo" v-bind:class="classObjectForm">
      <div class="row">
        <input type="text" class="form-control" placeholder="ToDo..." required v-model="todo">
        <div class="invalid-feedback">
          Please enter your ToDo.
        </div>
      </div>
    </form>

    <div>
      <!-- list here -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'todo',
    data () {
      return {
        //TODO should move to TodoForm.vue ?
        classObjectForm: {
          'container': true,
          'was-validated': false
        },
        todo: '',
        todos: []
      }
    },
    methods: {
      isValid() {
        this.classObjectForm['was-validated'] = true
        return !!this.todo
      },
      addTodo() {
        if (this.isValid()) {
          this.todos.push({todo: this.todo, done: false})
          this.todo = ''
          this.classObjectForm['was-validated'] = false
        }
      }
    }
  }
</script>

<style>
</style>
