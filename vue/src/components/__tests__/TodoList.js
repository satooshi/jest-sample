import Vue from 'vue'
import Vuex from 'vuex'
import { shallow } from 'vue-test-utils'
import TodoList from '../TodoList.vue'

Vue.use(Vuex)

describe('TodoList.vue', () => {
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

    wrapper = shallow(TodoList, {
      propsData: { store: store }
    })

    const defaultData = wrapper.vm.store
    todos = defaultData.state.todos
  })

  it('toggles todo', () => {
    expect(wrapper.emitted().toggle).toBeFalsy()

    const index = 0
    wrapper.vm.toggleTodo(index)

    const event = wrapper.emitted().toggle
    expect(event).toBeTruthy()
    expect(event.length).toBe(1)
    expect(event[0]).toEqual([index])
  })

  it('deletes todo', () => {
    expect(wrapper.emitted().delete).toBeFalsy()

    const index = 0
    wrapper.vm.deleteTodo(index)

    const event = wrapper.emitted().delete
    expect(event).toBeTruthy()
    expect(event.length).toBe(1)
    expect(event[0]).toEqual([index])
  })
})
