import { firebase } from '~/src/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from 'firebase'
import { TodoHooks, Todo } from '~/src/hooks/todo'
import { useCallback } from 'react'
import { useAuth } from '~/src/hooks/auth'

export const useTodos: TodoHooks['useTodos'] = () => {
  const [todos, loading, error] = useCollectionData<Todo>(
    firebase.firestore().collection('todos').orderBy('created'),
    {
      idField: 'id',
    }
  )

  return { todos: todos ?? [], loading, error }
}

export const useTodoAction: TodoHooks['useTodoAction'] = () => {
  const { user } = useAuth()
  const addTodo = useCallback(
    async (text: string) => {
      if (!user) {
        throw new Error('ログインしてほしいっす')
      }
      await firebase.firestore().collection('todos').add({
        created: firebase.firestore.FieldValue.serverTimestamp(),
        author: user.uid,
        text,
      })
    },
    [user]
  )
  return { addTodo }
}
