import React from 'react'
import ToggleAllInput from './ToggleAllInput'
import TodoList from './TodoList'
import { ITodo } from '../../types/interfaces'

interface IMainSection {
  todos: ITodo[]
  allTodos: ITodo[]
  changeStatus: (key: string) => void
  removeTodo: (key: string) => void
}

const MainSection: React.FC<IMainSection> = ({
  changeStatus,
  removeTodo
}) => (
  <section className="main">
    <ToggleAllInput />
    <TodoList
      changeStatus={changeStatus}
      removeTodo={removeTodo}
    />
  </section>
)

export default MainSection
