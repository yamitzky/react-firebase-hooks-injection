import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { TodoList } from '~/src/components/TodoList'
import { UserHeader } from '~/src/components/UserHeader'
import { AddTodo } from '~/src/components/AddTodo'
import { Description } from '~/src/components/Description'

export const TodosPage: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      <UserHeader />
      <h1>TODOリスト</h1>
      <TodoList />
      <AddTodo />
      <Description />
    </div>
  )
}
