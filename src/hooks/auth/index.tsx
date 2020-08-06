import React from 'react'
import { useClient } from '~/src/hooks/di'

type Error = {
  code: string
  message: string
}

type User = {
  email: string | null
}

export type AuthHooks = {
  useAuth(): {
    user: User | undefined
    loading: boolean
    error: Error | undefined
  }
  useAuthAction(): {
    loginWithGoogle: () => Promise<void>
    logout: () => Promise<void>
  }
}

export const AuthHooksContext = React.createContext<AuthHooks | null>(null)

// TODO:
export const useAuth: AuthHooks['useAuth'] = () => {
  const client = useClient(AuthHooksContext)
  return client.useAuth()
}

export const useAuthAction: AuthHooks['useAuthAction'] = () => {
  const client = useClient(AuthHooksContext)
  return client.useAuthAction()
}
