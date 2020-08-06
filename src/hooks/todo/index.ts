import React from 'react'
import { useClient } from '~/src/hooks/di'

export type Todo = {
  id: string
  text: string
}

export type TodoHooks = {
  useTodos(): {
    todos: Todo[]
    loading: boolean
    error?: Error
  }
  useTodoAction(): {
    addTodo: (text: string) => Promise<void>
  }
}

export const TodoHooksContext = React.createContext<TodoHooks | null>(null)

export const useTodos: TodoHooks['useTodos'] = () => {
  const client = useClient(TodoHooksContext)
  return client.useTodos()
}

export const useTodoAction: TodoHooks['useTodoAction'] = () => {
  const client = useClient(TodoHooksContext)
  return client.useTodoAction()
}
