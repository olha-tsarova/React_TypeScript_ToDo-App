import React from 'react'

import ClearCompletedButton from './ClearCompletedButton.js'
import FilterButtons from './FilterButtons.js'
import ActiveTodosCounter from './ActiveTodosCounter.js'
import { Todo } from '../../utils/interfaces.js'

const FooterSection: React.FC = ({
  todos,
  activeFilter,
  setFilter,
  clearCompleted
}) => {
  const activeTodos = todos.filter((todo: Todo) => !todo.completed)
  const completedTodos = todos.filter((todo: Todo) => todo.completed)

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
