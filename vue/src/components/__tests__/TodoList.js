import { shallow } from 'vue-test-utils'
import TodoList from '../TodoList.vue'
import store from '../../store'

describe('TodoList.vue', () => {
  let wrapper
  let todos = store.state.Todos.todos

  beforeEach(() => {
    wrapper = shallow(TodoList, {store})
    store.commit('Todos/clear')
    store.commit('Todos/add', {todo: "foo", done: true})
    store.commit('Todos/add', {todo: "bar", done: false})
  })

  it('removes todo', () => {
    expect(todos.length).toBe(2)
    const index = 0
    wrapper.vm.remove(index)
    expect(todos.length).toBe(1)
  })

  it('toggles todo', () => {
    const index = 0

    expect(todos[index].done).toBeTruthy()
    wrapper.vm.toggle(index)
    expect(todos[index].done).toBeFalsy()
  })
})
