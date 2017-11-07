<template>
  <form>
    <div class="form-group">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="ToDo..." v-model="todo">
        <span class="input-group-btn">
          <button class="btn btn-primary" @click.prevent="addTodo">add</button>
        </span>
      </div>

      <div>
        <!-- list here -->
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'todo',
    data () {
      return {
        todo: ''
      }
    },
    methods: {
      addTodo() {
        if (this.todo) {
          this.todo = ''
        }
      }
    }
  }
</script>

<style>
</style>
