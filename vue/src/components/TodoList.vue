<template>
  <div class="list-group">
    <div v-for="(todoItem, index) in $store.state.Todos" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1" v-if="!todoItem.edit">
          <input type="checkbox" @click="toggle(index)" v-model="todoItem.done">
          <span @dblclick="editTodo(index)">{{todoItem.todo}}</span>
        </h6>
        <div v-if="!todoItem.edit">
          <button class="btn btn-link" @click.prevent="remove(index)">x</button>
        </div>
        <todo-form :todo="todoItem" :edit="true" :index="index" v-if="todoItem.edit"></todo-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import TodoForm from './TodoForm.vue';

  export default {
    components: {
      TodoForm
    },
    methods: {
      ...mapActions({
        toggle: 'Todos/toggle',
        remove: 'Todos/remove',
        change: 'Todos/change',
      }),
      editTodo(index) {
        this.$store.commit('Todos/change', {index: index, props: {edit: true}})
      }
    }
  }
</script>

<style>
</style>
