import store from '../index'

describe('TodoInput', () => {
  beforeEach(() => {
    store.commit('TodoInput/clear')
    expect(store.state.TodoInput.todo).toBe('')
  })

  it('is valid', () => {
    expect(store.getters['TodoInput/isValid']).toBeFalsy()
    store.commit('TodoInput/set', 'foo')
    expect(store.getters['TodoInput/isValid']).toBeTruthy()
  })

  it('sets todo', () => {
    const todo = 'foo'
    store.commit('TodoInput/set', todo)
    expect(store.state.TodoInput.todo).toBe(todo)
  })

  it('clears todo', () => {
    const todo = 'foo'
    store.commit('TodoInput/set', todo)
    expect(store.state.TodoInput.todo).toBe(todo)

    store.commit('TodoInput/clear')
    expect(store.state.TodoInput.todo).toBe('')
  })
})
