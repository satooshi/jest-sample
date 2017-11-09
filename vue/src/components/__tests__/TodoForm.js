import { mount } from 'vue-test-utils'
import TodoForm from '../TodoForm.vue'
import store from '../../store'

describe('TodoForm.vue', () => {
  let wrapper

  beforeEach(() => {
    const props = {
      todo: {
        todo: '',
        done: false,
        edit: false,
      }
    }
    wrapper = mount(TodoForm, {propsData: props, store})
    expect(wrapper.vm.todo.todo).toBe('')
  })

  it('is valid', () => {
    expect(wrapper.vm.isValid()).toBeFalsy()
    wrapper.vm.todo.todo = 'foo'
    expect(wrapper.vm.isValid()).toBeTruthy()
  })

  it('emits add event if the form is valid', () => {
    expect(wrapper.emitted().add).toBeUndefined()

    wrapper.vm.todo.todo = 'foo'
    wrapper.vm.submit()
    expect(wrapper.emitted().add.length).toBe(1)
  })

  it('does not emit add event if the form is not valid', () => {
    wrapper.vm.submit()
    expect(wrapper.emitted().add).toBeUndefined()
  })
})
