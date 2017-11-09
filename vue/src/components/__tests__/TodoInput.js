import { shallow } from 'vue-test-utils'
import TodoInput from '../TodoInput.vue'
import store from '../../store'

describe('TodoInput.vue', () => {
  let wrapper
  let todoInput = store.state.TodoInput

  beforeEach(() => {
    wrapper = shallow(TodoInput, {store})
    store.commit('TodoInput/clear')
  })

  it('gets input text', () => {
    expect(todoInput.todo).toBe('')
    expect(wrapper.vm.inputText).toBe('')

    const todo = 'foo'
    todoInput.todo = todo

    expect(todoInput.todo).toBe(todo)
    expect(wrapper.vm.inputText).toBe(todo)
  })

  it('sets input text', () => {
    expect(todoInput.todo).toBe('')
    expect(wrapper.vm.inputText).toBe('')

    const todo = 'foo'
    wrapper.vm.inputText = todo

    expect(todoInput.todo).toBe(todo)
    expect(wrapper.vm.inputText).toBe(todo)

    wrapper.vm.inputText = ''

    expect(todoInput.todo).toBe(todo)
    expect(wrapper.vm.inputText).toBe(todo)
  })
})
