import React from 'react'
import { TodoList } from '~/src/components/TodoList'
import { TodoHooksContext } from '~/src/hooks/todo'

export default {
  title: 'TodoList',
  component: TodoList,
}

export const regular = () => (
  <TodoHooksContext.Provider
    value={{
      useTodos: () => ({
        todos: [
          { id: '1', text: 'あ' },
          { id: '2', text: 'い' },
          { id: '3', text: 'う' },
        ],
        loading: false,
      }),
      useTodoAction: () => ({ addTodo: async () => {} }),
    }}
  >
    <TodoList>Hello Button</TodoList>
  </TodoHooksContext.Provider>
)

export const empty = () => (
  <TodoHooksContext.Provider
    value={{
      useTodos: () => ({
        todos: [],
        loading: false,
      }),
      useTodoAction: () => ({ addTodo: async () => {} }),
    }}
  >
    <TodoList>Hello Button</TodoList>
  </TodoHooksContext.Provider>
)

export const loading = () => (
  <TodoHooksContext.Provider
    value={{
      useTodos: () => ({
        todos: [],
        loading: true,
      }),
      useTodoAction: () => ({ addTodo: async () => {} }),
    }}
  >
    <TodoList>Hello Button</TodoList>
  </TodoHooksContext.Provider>
)

export const error = () => (
  <TodoHooksContext.Provider
    value={{
      useTodos: () => ({
        todos: [],
        loading: false,
        error: Error('エラーです'),
      }),
      useTodoAction: () => ({ addTodo: async () => {} }),
    }}
  >
    <TodoList>Hello Button</TodoList>
  </TodoHooksContext.Provider>
)
