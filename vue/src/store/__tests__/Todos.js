import store from '../index'
import axios from 'axios'

describe('Todos', () => {
  let spy

  beforeEach(() => {
    if (spy) {
      spy.mockReset();
      spy.mockRestore();
    }

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

  it('fetches todos', async () => {
    const mockData = {data: [{id: 3, todo: 'foo', done: false}]}
    spy = jest.spyOn(axios, 'get')
      .mockImplementation(() => Promise.resolve(mockData))

    await store.dispatch('Todos/fetch')

    expect(spy).toBeCalledWith('/todos')
    expect(store.state.Todos.todos.length).toBe(1)
  })

  it('adds todo', async () => {
    const mockData = {todo: {id: 3, todo: 'foo', done: false}}
    spy = jest.spyOn(axios, 'post')
      .mockImplementation(() => Promise.resolve(mockData))

    const todo = {todo: 'foo', done: false}
    await store.dispatch('Todos/add', todo)

    expect(spy).toBeCalledWith('/todos', {todo: todo})
    expect(store.state.Todos.todos.length).toBe(3)
  })

  it('toggles todo', async () => {
    const index = 0
    const todo = store.state.Todos.todos[index]

    const mockData = {data: {id: 1, todo: "foo", done: false}}
    spy = jest.spyOn(axios, 'patch')
      .mockImplementation(() => Promise.resolve(mockData))

    expect(store.state.Todos.todos[index].done).toBeTruthy()
    await store.dispatch('Todos/toggle', todo)

    expect(spy).toBeCalledWith('/todos/1', {done: false})
    expect(store.state.Todos.todos[index].done).toBeFalsy()
  })

  it ('does not toggle non existing todo', async () => {
    expect(store.state.Todos.todos[0].done).toBeTruthy()
    expect(store.state.Todos.todos[1].done).toBeFalsy()

    const mockData = {data: {}}
    spy = jest.spyOn(axios, 'patch')
      .mockImplementation(() => Promise.resolve(mockData))

    const todo = {id: 100, todo: 'fake', done: false}
    await store.dispatch('Todos/toggle', todo)

    expect(spy).toBeCalledWith('/todos/100', {done: true})
    expect(store.state.Todos.todos[0].done).toBeTruthy()
    expect(store.state.Todos.todos[1].done).toBeFalsy()
  })

  it('removes todo', async () => {
    spy = jest.spyOn(axios, 'delete')
      .mockImplementation(() => Promise.resolve({}))

    await store.dispatch('Todos/remove', 1)

    expect(spy).toBeCalledWith('/todos/1')
    expect(store.state.Todos.todos.length).toBe(1)
  })

  it('does not remove non existing todo', async () => {
    spy = jest.spyOn(axios, 'delete')
      .mockImplementation(() => Promise.resolve({}))

    await store.dispatch('Todos/remove', 100)

    expect(spy).toBeCalledWith('/todos/100')
    expect(store.state.Todos.todos.length).toBe(2)
  })

  it('clears todos', async () => {
    spy = jest.spyOn(axios, 'delete')
      .mockImplementation(() => Promise.resolve({}))

    await store.dispatch('Todos/clear')

    expect(spy).toBeCalledWith('/todos')
    expect(store.state.Todos.todos.length).toBe(0)
  })
})
