import React from 'react'
import { useAuth, useAuthAction } from '~/src/hooks/auth'

export const UserHeader: React.FC = () => {
  const { user, error, loading } = useAuth()
  const { loginWithGoogle, logout } = useAuthAction()
  if (error) {
    return <header>エラーが発生しました</header>
  }
  if (loading) {
    return <header>loading...</header>
  }
  if (user) {
    return (
      <header>
        ようこそ {user.email} さん (
        <a href="#" onClick={logout}>
          ログアウト
        </a>
        )
      </header>
    )
  }
  return (
    <header>
      <a href="#" onClick={loginWithGoogle}>
        ログインする
      </a>
    </header>
  )
}
