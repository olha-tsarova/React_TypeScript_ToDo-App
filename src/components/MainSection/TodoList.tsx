/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'

import { ITodo, TodosState } from '../../types/interfaces'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  const todos = useSelector((state: TodosState) => {
    return state.todos.todos
  })

  return (
    <ul className="todo-list">
      {todos.map((todo: ITodo) => (
        <TodoItem todo={todo} key={todo.key} />
      ))}
    </ul>
  )
}

export default TodoList
