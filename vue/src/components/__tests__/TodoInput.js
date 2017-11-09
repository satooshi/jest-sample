import { mount } from 'vue-test-utils'
import TodoInput from '../TodoInput.vue'
import store from '../../store'

describe('TodoInput.vue', () => {
  let wrapper

  beforeEach(() => {
    const props = {
      todo: {
        todo: '',
        done: false,
        edit: false,
      }
    }
    wrapper = mount(TodoInput, {propsData: props, store})
    expect(wrapper.vm.todo.todo).toBe('')
    expect(wrapper.vm.inputText).toBe('')
  })

  it('gets input text', () => {
    const todo = 'foo'
    wrapper.vm.todo.todo = todo

    expect(wrapper.vm.todo.todo).toBe(todo)
    expect(wrapper.vm.inputText).toBe(todo)
  })

  it('emits input event when input text is set', () => {
    expect(wrapper.emitted().input).toBeUndefined()

    const todo = 'foo'
    wrapper.vm.inputText = todo // emit 'input' event
    expect(wrapper.emitted().input.length).toBe(1)
    expect(wrapper.emitted().input[0]).toEqual([{todo: todo}])

    wrapper.vm.inputText = ''
    expect(wrapper.emitted().input.length).toBe(2)
    expect(wrapper.emitted().input[1]).toEqual([{todo: ''}])
  })
})
