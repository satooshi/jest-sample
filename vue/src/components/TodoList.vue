<template>
  <div class="list-group">
    <dev v-for="(todoItem, index) in store.state.todos" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1"><input type="checkbox" @click="toggleTodo(index)" v-model="todoItem.done"> {{todoItem.todo}}</h6>
        <button class="btn btn-link" @click.prevent="deleteTodo(index)">x</button>
      </div>
    </dev>
  </div>
</template>

<script>
  export default {
    props: {
      store: Object
    },
    methods: {
      toggleTodo(index) {
        this.$emit('toggle', index)
      },
      deleteTodo(index) {
        this.$emit('delete', index)
      }
    }
  }
</script>

<style>
</style>
