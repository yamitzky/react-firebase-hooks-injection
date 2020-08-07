import React from 'react'
import { useTodos } from '~/src/hooks/todo'
import { useTodoAction } from '~/src/hooks/todo'
import { useAuth } from '~/src/hooks/auth'

export const TodoList: React.FC = () => {
  const { todos, loading, error } = useTodos()
  const { user } = useAuth()
  const { deleteTodo } = useTodoAction()
  if (error) {
    return <p>エラーが発生しました</p>
  }
  if (loading) {
    return <p>loading...</p>
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {todo.author === user?.uid && (
            <>
              [
              <a href="#" onClick={() => deleteTodo(todo.id)}>
                x
              </a>
              ]
            </>
          )}
        </li>
      ))}
    </ul>
  )
}
