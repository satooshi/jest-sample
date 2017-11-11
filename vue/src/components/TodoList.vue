<template>
  <div class="list-group">
    <div class="list-group-item list-group-item-action flex-column align-items-start" v-if="count > 0">
      <div class="d-flex w-100 justify-content-between">
        <h6>{{ undoneTodos.length }} undone todos</h6>
        <div>
          <router-link to="/" class="btn btn-sm" v-bind:class="btnAll">All</router-link>
          <router-link to="/undone" class="btn btn-sm" v-bind:class="btnUndone">Undone</router-link>
          <router-link to="/done" class="btn btn-sm" v-bind:class="btnDone">Done</router-link>
        </div>
        <div>
          <button class="btn btn-sm btn-danger" @click="clear">Clear</button>
        </div>
      </div>
    </div>

    <div v-for="(todoItem, index) in listTodos" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h6 class="mb-1" v-if="!todoItem.edit">
          <input type="checkbox" @click="toggle(todoItem)" v-model="todoItem.done">
          <span @dblclick="editTodo(todoItem)">{{todoItem.todo}}</span>
        </h6>
        <div v-if="!todoItem.edit">
          <a href="#" class="text-danger" @click.prevent="remove(todoItem.id)">x</a>
        </div>
        <todo-form :todo="todoItem" :edit="true" :index="index" v-if="todoItem.edit"></todo-form>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import TodoForm from './TodoForm.vue';

  export default {
    components: {
      TodoForm
    },
    props: {
      type: String
    },
    created () {
      this.$store.dispatch('Todos/fetch')
        .catch((error) => {
          console.log(error)
        })
    },
    computed: {
      ...mapGetters({
        count: 'Todos/count',
        doneTodos: 'Todos/doneTodos',
        undoneTodos: 'Todos/undoneTodos',
      }),
      listTodos() {
        switch (this.type) {
          case 'done':
            return this.doneTodos
          case 'undone':
            return this.undoneTodos
          default:
            return this.$store.state.Todos.todos
        }
      },
      btnAll() {
        return this.type === 'all' ? 'btn-primary' : 'btn-light'
      },
      btnUndone() {
        return this.type === 'undone' ? 'btn-primary' : 'btn-light'
      },
      btnDone() {
        return this.type === 'done' ? 'btn-primary' : 'btn-light'
      }
    },
    methods: {
      ...mapActions({
        toggle: 'Todos/toggle',
        remove: 'Todos/remove',
        change: 'Todos/change',
        clear: 'Todos/clear',
      }),
      editTodo(todo) {
        this.$store.commit('Todos/change', {id: todo.id, edit: true})
      }
    }
  }
</script>

<style>
</style>
