import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import TodoInput from '../TodoInput.vue'

Vue.use(Vuex)

describe('TodoInput.vue', () => {
  var wrapper
  var todoInput

  beforeEach(() => {
    const store = new Vuex.Store({
      state: {
        todoInput: {todo: '', done: false}
      }
    })

    wrapper = shallow(TodoInput, {
      propsData: { store: store }
    })

    const defaultData = wrapper.vm.store
    todoInput = defaultData.state.todoInput
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
    expect(wrapper.emitted().input).toBeFalsy()

    const todo = 'foo'
    wrapper.vm.inputText = todo
    const event = wrapper.emitted().input

    expect(event).toBeTruthy()
    expect(event.length).toBe(1)
    expect(event[0]).toEqual([todo])
  })
})

