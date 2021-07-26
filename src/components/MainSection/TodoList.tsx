/* eslint-disable no-use-before-define */
import React from 'react'
import { useSelector } from 'react-redux'

import { ITodo } from '../../types/interfaces'
import TodoItem from './TodoItem'

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos.todos)

  return (
    <ul className="todo-list">
      {todos.map((todo: ITodo) => (
        <TodoItem todo={todo} key={todo.key} />
      ))}
    </ul>
  )
}

export default TodoList
