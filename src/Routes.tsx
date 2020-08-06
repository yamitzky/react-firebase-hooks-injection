import React from 'react'
import { Router } from '@reach/router'
import { TodosPage } from '~/src/pages/TodosPage'

type Props = {}

export const Routes: React.FC<Props> = () => {
  return (
    <Router>
      <TodosPage path="/" />
    </Router>
  )
}
