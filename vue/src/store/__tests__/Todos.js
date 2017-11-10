import store from '../index'

describe('Todos', () => {
  beforeEach(() => {
    store.commit('Todos/clear')
    expect(store.state.Todos.todos.length).toBe(0)

    store.commit('Todos/add', {id: 1, todo: "foo", done: true})
    store.commit('Todos/add', {id: 2, todo: "bar", done: false})
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
    const todo = store.state.Todos.todos[index]
    expect(store.state.Todos.todos[index].done).toBeTruthy()
    store.dispatch('Todos/toggle', todo)
    expect(store.state.Todos.todos[index].done).toBeFalsy()
  })

  it ('does not toggle non existing todo', () => {
    expect(store.state.Todos.todos[0].done).toBeTruthy()
    expect(store.state.Todos.todos[1].done).toBeFalsy()

    const todo = {id: 100, todo: 'fake', done: false}
    store.dispatch('Todos/toggle', todo)

    expect(store.state.Todos.todos[0].done).toBeTruthy()
    expect(store.state.Todos.todos[1].done).toBeFalsy()
  })

  it('removes todo', () => {
    store.dispatch('Todos/remove', 1)
    expect(store.state.Todos.todos.length).toBe(1)
  })

  it('does not remove non existing todo', () => {
    const todo = {id: 100, todo: 'fake', done: false}
    store.dispatch('Todos/remove', todo)
    expect(store.state.Todos.todos.length).toBe(2)
  })

  it('clears todos', () => {
    store.dispatch('Todos/clear')
    expect(store.state.Todos.todos.length).toBe(0)
  })
})
