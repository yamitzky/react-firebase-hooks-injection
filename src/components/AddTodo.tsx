import React, { useState, useCallback } from 'react'
import { useAuth } from '~/src/hooks/auth/firebase'
import { useTodoAction } from '~/src/hooks/todo'

type Props = {}

export const AddTodo: React.FC<Props> = () => {
  const { user, loading } = useAuth()
  const [text, setText] = useState('')
  const { addTodo } = useTodoAction()
  const handleClick = useCallback(async () => {
    await addTodo(text)
    setText('')
  }, [text, addTodo])
  if (loading) {
    return <></>
  }
  if (!user) {
    return <p>TODOを追加するにはログインしてください</p>
  }
  return (
    <p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleClick}>登録</button>
    </p>
  )
}
