import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import TodoForm from '../TodoForm.vue'

Vue.use(Vuex)

describe('TodoForm.vue', () => {
  var wrapper
  var todoInput

  beforeEach(() => {
    const store = new Vuex.Store({
      state: {
        todoInput: {todo: '', done: false}
      }
    })

    wrapper = shallow(TodoForm, {
      propsData: { store: store }
    })

    const defaultData = wrapper.vm.store
    todoInput = defaultData.state.todoInput
  })

  it('is valid', () => {
    expect(wrapper.vm.isValid()).toBeFalsy()
    todoInput.todo = 'foo'
    expect(wrapper.vm.isValid()).toBeTruthy()
  })

  it('clears input data', () => {
    todoInput.todo = 'foo'
    wrapper.vm.clear()

    expect(todoInput.todo).toBe('')
  })

  it('submits form data if the form is valid', () => {
    todoInput.todo = 'foo'
    wrapper.vm.submit() // emit 'submit' event with new Todo model

    const event = wrapper.emitted().submit
    expect(event).toBeTruthy()
  })

  it('does not submit form data if the form is not valid', () => {
    wrapper.vm.submit()

    const event = wrapper.emitted().submit
    expect(event).toBeFalsy()
  })

  it('set new todo model to store', () => {
    expect(todoInput.todo).toBe('')

    const todo = 'foo'
    wrapper.vm.onInputTodo(todo)
    expect(todoInput.todo).toBe(todo)
  })
})
