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
      store: Object
    },
    computed: {
      inputText: {
        get() {
          return this.store.todoInput.todo
        },
        set(newValue) {
          this.$emit('input', newValue)
        }
      }
    }
  }
</script>

<style>
</style>
