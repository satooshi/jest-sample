<template>
    <form novalidate @submit.prevent="submit" class="container" :class="classObjectForm">
      <todo-input :todo="todo" @input="onInputTodo($event)"></todo-input>
    </form>
</template>

<script>
  import TodoInput from './TodoInput.vue';

  export default {
    name: 'TodoForm',
    props: {
      edit: false,
      index: 0,
      todo: {
        todo: String,
        done: Boolean,
        edit: Boolean,
      }
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

        //TODO validator
        const errors = []
        const length = this.$children.length
        for (let i = 0; i < length; i++) {
          const child = this.$children[i]
          if (child.validate) {
            const childErrors = child.validate()
            if (Object.keys(childErrors).length > 0) {
              errors.push(childErrors)
            }
          }
        }

        return errors.length === 0
      },
      submit() {
        if (this.isValid()) {
          this.todo.edit = false

          if (this.edit) {
            this.$store.dispatch('Todos/change', {index: this.index, props: this.todo})
          } else {
            this.$store.dispatch('Todos/add', this.todo)
            this.$emit('add')
          }

          this._clear()
        }
      },
      _clear() {
        this.classObjectForm['was-validated'] = false
      },
      onInputTodo(e) {
        this.todo.todo = e.todo
      }
    }
  }
</script>

<style>
  form {
    padding-bottom: 20px;
  }
</style>
