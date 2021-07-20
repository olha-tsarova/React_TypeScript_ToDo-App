import React, { useCallback } from 'react'
import classNames from 'classnames'
import { ITodo } from '../../../types/interfaces'

interface ITodoItem {
  todo: ITodo,
  changeStatus: (key: string) => void,
  removeTodo: (key: string) => void
}

const TodoItem: React.FC<ITodoItem> = ({ todo, changeStatus, removeTodo }) => {
  const handlerTodoStatusChange = useCallback(() => {
    changeStatus(todo.key)
  }, [changeStatus, todo.key])

  const handlerTodoRemove = useCallback(() => {
    removeTodo(todo.key)
  }, [removeTodo, todo.key])

  return (
  <li
    className={classNames('todo-item', {
      completed: todo.completed
    })}
  >
    <input
      id={`toggle-${todo.key}`}
      className="toggle"
      type="checkbox"
      onChange={handlerTodoStatusChange}
      checked={todo.completed}
    />
    <label htmlFor={`toggle-${todo.key}`}>{todo.title}</label>
    <button
      type="button"
      className="destroy"
      onClick={handlerTodoRemove}
    />
  </li>
  )
}

export default TodoItem
