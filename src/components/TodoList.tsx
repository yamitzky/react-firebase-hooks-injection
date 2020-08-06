import React from 'react'
import { useTodos } from '~/src/hooks/todo'

export const TodoList: React.FC = () => {
  const { todos, loading, error } = useTodos()
  if (error) {
    return <p>エラーが発生しました</p>
  }
  if (loading) {
    return <p>loading...</p>
  }
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  )
}
