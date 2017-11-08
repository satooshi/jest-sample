import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import TodoView from '../TodoView.vue'

Vue.use(Vuex)

describe('TodoView.vue', () => {
  var wrapper
  var todos

  beforeEach(() => {
    const store = new Vuex.Store({
      state: {
        todos: [
          {todo: "foo", done: true},
          {todo: "bar", done: false}
        ]
      }
    })

    wrapper = shallow(TodoView)
    wrapper.setProps({ store: store }) //force to update default props

    const defaultData = wrapper.vm.store
    todos = defaultData.state.todos
  })

  it('submits todo form', () => {
    expect(todos.length).toBe(2)

    const newTodo = {todo: 'baz', done: false}
    wrapper.vm.onSubmit(newTodo)

    expect(todos.length).toBe(3)
    expect(todos[2].todo).toBe('baz')
    expect(todos[2].done).toBeFalsy()
  })

  it('toggles todo', () => {
    expect(todos[0].done).toBeTruthy()
    wrapper.vm.onToggleTodo(0)
    expect(todos[0].done).toBeFalsy()
  })

  it('does not toggle non existing todo', () => {
    expect(todos[0].done).toBeTruthy()
    expect(todos[1].done).toBeFalsy()

    wrapper.vm.onToggleTodo(5)

    expect(todos[0].done).toBeTruthy()
    expect(todos[1].done).toBeFalsy()
  })

  it('delete todo', () => {
    expect(todos.length).toBe(2)
    expect(todos[0].todo).toBe('foo')

    wrapper.vm.onDeleteTodo(0)

    expect(todos.length).toBe(1)
    expect(todos[0].todo).toBe('bar')
  })

  it('does not delete non existing todo', () => {
    expect(todos.length).toBe(2)
    wrapper.vm.onDeleteTodo(5)
    expect(todos.length).toBe(2)
  })
})
