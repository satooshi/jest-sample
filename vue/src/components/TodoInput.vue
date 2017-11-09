<template>
  <div class="row">
    <input type="text" class="form-control" placeholder="ToDo..." required v-model="inputText">
    <div class="invalid-feedback">
      Please enter your ToDo.
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TodoInput',
    props: {
      todo: {
        todo: String,
        done: Boolean,
        edit: Boolean,
      }
    },
    methods: {
      validate() {
        const errors = {}
        if (!this.todo.todo) {
          errors.required = 'Please enter your ToDo.'
        }

        return errors
      }
    },
    computed: {
      inputText: {
        get() {
          return this.todo.todo
        },
        set(newValue) {
          this.$emit('input', {todo: newValue})
        }
      }
    }
  }
</script>

<style>
</style>
