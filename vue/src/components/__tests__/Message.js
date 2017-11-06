import Vue from 'vue'
import Message from '../Message.vue'

describe('Message', () => {
  it('data should be function', () => {
    expect(typeof Message.data).toBe('function')

  })

  it('data should be default message', () => {
    const defaultData = Message.data()
    expect(defaultData.message).toBe('Hello cat persons!')
  })
})
