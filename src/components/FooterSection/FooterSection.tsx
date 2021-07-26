import React from 'react'

import { useSelector } from 'react-redux'
import ClearCompletedButton from './ClearCompletedButton'
// import FilterButtons from './FilterButtons'
import ActiveTodosCounter from './ActiveTodosCounter'
import { ITodo } from '../../types/interfaces.js'

const FooterSection: React.FC = () => {
  const todos = useSelector((state: any) => state.todos.todos)
  const activeTodos = todos.filter((todo: ITodo) => !todo.completed)
  const completedTodos = todos.filter((todo: ITodo) => todo.completed)

  return (
    <section className="footer">
      {activeTodos.length > 0 && (
        <ActiveTodosCounter activeTodos={activeTodos} />
      )}
      {/* <FilterButtons /> */}
      {completedTodos.length > 0 && <ClearCompletedButton />}
    </section>
  )
}

export default FooterSection
