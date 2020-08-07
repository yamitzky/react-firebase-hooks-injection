import React from 'react'
import { action } from '@storybook/addon-actions'
import { TodoList } from '~/src/components/TodoList'
import { TodoHooksContext } from '~/src/hooks/todo'
import { AuthHooksContext } from '~/src/hooks/auth'

export default {
  title: 'TodoList',
  component: TodoList,
}

const useTodoAction = () => ({
  addTodo: async (text: string) => {
    action('add')(text)
  },
  deleteTodo: async (id: string) => {
    action('delete')(id)
  },
})

const authHooks = {
  useAuth: () => ({
    user: { uid: 'user' },
    loading: false,
  }),
  useAuthAction: () => ({
    loginWithGoogle: async () => {},
    logout: async () => {},
  }),
}

export const regular = () => (
  <AuthHooksContext.Provider value={authHooks}>
    <TodoHooksContext.Provider
      value={{
        useTodos: () => ({
          todos: [
            { id: '1', text: 'あ', author: '' },
            { id: '2', text: '削除可能', author: 'user' },
            { id: '3', text: 'う', author: '' },
          ],
          loading: false,
        }),
        useTodoAction,
      }}
    >
      <TodoList />
    </TodoHooksContext.Provider>
  </AuthHooksContext.Provider>
)

export const empty = () => (
  <AuthHooksContext.Provider value={authHooks}>
    <TodoHooksContext.Provider
      value={{
        useTodos: () => ({
          todos: [],
          loading: false,
        }),
        useTodoAction,
      }}
    >
      <TodoList />
    </TodoHooksContext.Provider>
  </AuthHooksContext.Provider>
)

export const loading = () => (
  <AuthHooksContext.Provider value={authHooks}>
    <TodoHooksContext.Provider
      value={{
        useTodos: () => ({
          todos: [],
          loading: true,
        }),
        useTodoAction,
      }}
    >
      <TodoList />
    </TodoHooksContext.Provider>
  </AuthHooksContext.Provider>
)

export const error = () => (
  <AuthHooksContext.Provider value={authHooks}>
    <TodoHooksContext.Provider
      value={{
        useTodos: () => ({
          todos: [],
          loading: false,
          error: Error('エラーです'),
        }),
        useTodoAction,
      }}
    >
      <TodoList />
    </TodoHooksContext.Provider>
  </AuthHooksContext.Provider>
)
