<template>
  <div class="list-group">
    <div v-for="(todoItem, index) in $store.state.Todos" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1"><input type="checkbox" @click="toggle(index)" v-model="todoItem.done"> {{todoItem.todo}}</h6>
        <button class="btn btn-link" @click.prevent="remove(index)">x</button>
      </div>
    </div>
  </div>
</template>

<script>
  //todo update todo name
  import { mapActions } from 'vuex'
  export default {
    methods: {
      ...mapActions({
        toggle: 'Todos/toggle',
        remove: 'Todos/remove'
      })
    }
  }
</script>

<style>
</style>
