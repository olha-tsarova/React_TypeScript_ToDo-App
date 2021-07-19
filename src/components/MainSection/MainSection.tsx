import React from 'react'
import ToggleAllInput from './ToggleAllInput'
import TodoList from './TodoList'

const MainSection: React.FC = ({
  todos,
  allTodos,
  changeStatus,
  removeTodo
}) => (
  <section className="main">
    <ToggleAllInput allTodos={allTodos} />
    <TodoList
      todos={todos}
      changeStatus={changeStatus}
      removeTodo={removeTodo}
    />
  </section>
)

export default MainSection
