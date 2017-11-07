<template>
  <form>
    <div class="list-group">
      <a v-for="(todoItem, index) in store.state.todos" href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-bind:class="{disabled:todoItem.done}" @click.prevent="toggleTodo(index)">
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">{{todoItem.todo}}</h6>
          <button class="btn btn-link" @click.prevent="deleteTodo(index)">x</button>
        </div>
      </a>
    </div>
  </form>
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
