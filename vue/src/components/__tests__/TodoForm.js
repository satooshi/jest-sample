import { shallow } from 'vue-test-utils'
import TodoForm from '../TodoForm.vue'
import store from '../../store'

describe('TodoForm.vue', () => {
  let wrapper
  let todoInput = store.state.TodoInput

  beforeEach(() => {
    wrapper = shallow(TodoForm, {store})
    store.commit('TodoInput/clear')
  })

  it('is valid', () => {
    expect(wrapper.vm.isValid()).toBeFalsy()
    todoInput.todo = 'foo'
    expect(wrapper.vm.isValid()).toBeTruthy()
  })

  it('submits form data if the form is valid', () => {
    todoInput.todo = 'foo'
    wrapper.vm.submit() // emit 'submit' event with new Todo model
    expect(todoInput.todo).toBe('')
  })

  it('does not submit form data if the form is not valid', () => {
    wrapper.vm.submit()
    expect(todoInput.todo).toBe('')
  })
})
