import React from 'react'
import ToggleAllInput from './ToggleAllInput'
import TodoList from './TodoList'
import { ITodo } from '../../utils/interfaces'

interface IMainSection {
  todos: ITodo[],
  allTodos: ITodo[],
  changeStatus: (key: string) => void,
  removeTodo: (key: string) => void,
}

const MainSection: React.FC<IMainSection> = ({
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
