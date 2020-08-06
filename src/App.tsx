import React from 'react'
import { Routes } from './Routes'
import { AuthHooksContext } from '~/src/hooks/auth'
import { TodoHooksContext } from '~/src/hooks/todo'
import * as firebaseAuthHooks from '~/src/hooks/auth/firebase'
import * as firestoreTodoHooks from '~/src/hooks/todo/firestore'

export const App: React.FC = () => {
  return (
    <TodoHooksContext.Provider value={firestoreTodoHooks}>
      <AuthHooksContext.Provider value={firebaseAuthHooks}>
        <Routes />
      </AuthHooksContext.Provider>
    </TodoHooksContext.Provider>
  )
}
