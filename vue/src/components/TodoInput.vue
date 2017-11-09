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
    methods: {
      validate(newValue) {
        return !!newValue
      }
    },
    computed: {
      inputText: {
        get() {
          return this.$store.state.TodoInput.todo
        },
        set(newValue) {
          if (this.validate(newValue)) {
            this.$store.commit('TodoInput/set', newValue)
          }
        }
      }
    }
  }
</script>

<style>
</style>
