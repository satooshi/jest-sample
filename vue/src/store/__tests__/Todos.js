import store from '../index'

describe('Todos', () => {
  beforeEach(() => {
    store.commit('Todos/clear')
    expect(store.state.Todos.todos.length).toBe(0)

    store.commit('Todos/add', {todo: "foo", done: true})
    store.commit('Todos/add', {todo: "bar", done: false})
    expect(store.state.Todos.todos.length).toBe(2)
  })

  // getters

  it('filters done todos', () => {
    const todos = store.getters['Todos/doneTodos']
    expect(todos.length).toBe(1)
    expect(todos[0].todo).toBe('foo')
    expect(todos[0].done).toBeTruthy()
  })

  it('filters undone todos', () => {
    const todos = store.getters['Todos/undoneTodos']
    expect(todos.length).toBe(1)
    expect(todos[0].todo).toBe('bar')
    expect(todos[0].done).toBeFalsy()
  })

  // actions

  it('add todo', () => {
    const todo = {todo: 'foo', done: false}
    store.dispatch('Todos/add', todo)
    expect(store.state.Todos.todos.length).toBe(3)
  })

  it('toggles todo', () => {
    const index = 0
    expect(store.state.Todos.todos[index].done).toBeTruthy()
    store.dispatch('Todos/toggle', index)
    expect(store.state.Todos.todos[index].done).toBeFalsy()
  })

  it ('does not toggle non existing todo', () => {
    expect(store.state.Todos.todos[0].done).toBeTruthy()
    expect(store.state.Todos.todos[1].done).toBeFalsy()

    store.dispatch('Todos/toggle', 100)

    expect(store.state.Todos.todos[0].done).toBeTruthy()
    expect(store.state.Todos.todos[1].done).toBeFalsy()
  })

  it('removes todo', () => {
    store.dispatch('Todos/remove', 0)
    expect(store.state.Todos.todos.length).toBe(1)
  })

  it('does not remove non existing todo', () => {
    store.dispatch('Todos/remove', 100)
    expect(store.state.Todos.todos.length).toBe(2)
  })

  it('clears todos', () => {
    store.dispatch('Todos/clear')
    expect(store.state.Todos.todos.length).toBe(0)
  })
})
