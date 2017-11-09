<template>
    <form novalidate @submit.prevent="submit" class="container" :class="classObjectForm">
      <todo-input></todo-input>
    </form>
</template>

<script>
  import TodoInput from './TodoInput.vue';

  export default {
    name: 'TodoForm',
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
        return this.$store.getters['TodoInput/isValid']
      },
      submit() {
        if (this.isValid()) {
          this.$store.dispatch('Todos/add')
          this._clear()
        }
      },
      _clear() {
        this.classObjectForm['was-validated'] = false
      },
    }
  }
</script>

<style>
  form {
    padding-bottom: 20px;
  }
</style>
