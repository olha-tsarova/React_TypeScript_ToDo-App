import React from 'react'

import ClearCompletedButton from './ClearCompletedButton.js'
import FilterButtons from './FilterButtons.js'
import ActiveTodosCounter from './ActiveTodosCounter.js'
import { ITodo } from '../../utils/interfaces.js'

interface IFooterSection {
  todos: ITodo[],
  activeFilter: string,
  setFilter: () => void,
  clearCompleted: () => void
}

const FooterSection: React.FC<IFooterSection> = ({
  todos,
  activeFilter,
  setFilter,
  clearCompleted
}) => {
  const activeTodos = todos.filter((todo: ITodo) => !todo.completed)
  const completedTodos = todos.filter((todo: ITodo) => todo.completed)

  return (
    <section className="footer">
      {activeTodos.length > 0 && (
        <ActiveTodosCounter activeTodos={activeTodos} />
      )}
      <FilterButtons
        activeFilter={activeFilter}
        setFilter={setFilter}
      />
      {completedTodos.length > 0 && (
        <ClearCompletedButton clearCompleted={clearCompleted} />
      )}
    </section>
  )
}

export default FooterSection
