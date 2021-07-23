import React from 'react'
import classNames from 'classnames'
import { ITodo } from '../../../types/interfaces'

interface ITodoItem {
  todo: ITodo
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  // const handlerTodoStatusChange = useCallback(() => {
  //   changeStatus(todo.key)
  // }, [changeStatus, todo.key])

  // const handlerTodoRemove = useCallback(() => {
  //   removeTodo(todo.key)
  // }, [removeTodo, todo.key])

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
        onChange={() => {
          console.log(todo.title)
        }}
        checked={todo.completed}
      />
      <label htmlFor={`toggle-${todo.key}`}>{todo.title}</label>
      <button
        type="button"
        className="destroy"
        onClick={() => {
          console.log(todo.key)
        }}
      />
    </li>
  )
}

export default TodoItem
