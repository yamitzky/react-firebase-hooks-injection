import { firebase } from '~/src/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from 'firebase'
import { TodoHooks, Todo } from '~/src/hooks/todo'
import { useCallback } from 'react'

export const useTodos: TodoHooks['useTodos'] = () => {
  let coll: firestore.Query = firebase.firestore().collection('todos')
  const [todos, loading, error] = useCollectionData<Todo>(coll, {
    idField: 'id',
  })

  return { todos: todos ?? [], loading, error }
}

export const useTodoAction: TodoHooks['useTodoAction'] = () => {
  const addTodo = useCallback(async (text: string) => {
    await firebase.firestore().collection('todos').add({
      created: firebase.firestore.FieldValue.serverTimestamp(),
      author: firebase.auth().currentUser?.uid,
      text,
    })
  }, [])
  return { addTodo }
}
