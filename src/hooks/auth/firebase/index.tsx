import { firebase } from '~/src/firebase'
import { AuthHooks } from '~/src/hooks/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCallback } from 'react'

export const useAuth: AuthHooks['useAuth'] = () => {
  const [user, loading, error] = useAuthState(firebase.auth())
  return { user, loading, error }
}

export const useAuthAction: AuthHooks['useAuthAction'] = () => {
  const loginWithGoogle = useCallback(async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }, [])
  const logout = useCallback(async () => {
    await firebase.auth().signOut()
  }, [])
  return { loginWithGoogle, logout }
}
