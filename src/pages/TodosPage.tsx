import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { TodoList } from '~/src/components/TodoList'
import { UserHeader } from '~/src/components/UserHeader'
import { AddTodo } from '~/src/components/AddTodo'

export const TodosPage: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <UserHeader />
      <TodoList />
      <AddTodo />
    </div>
  )
}
