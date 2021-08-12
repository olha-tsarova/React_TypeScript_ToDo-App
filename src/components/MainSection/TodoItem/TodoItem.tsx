import React, { useCallback } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../../types/interfaces'
import {
  changeTodoStatus,
  removeTodo
} from '../../../redux/actions/todoActions'

interface ITodoItem {
  todo: ITodo
}

const TodoItem: React.FC<ITodoItem> = ({ todo }) => {
  const dispatch = useDispatch()

  const handlerTodoStatusChange = useCallback(() => {
    dispatch(changeTodoStatus(todo))
  }, [dispatch, todo])

  const handlerTodoRemove = useCallback(() => {
    dispatch(removeTodo(todo.key))
  }, [dispatch, todo.key])

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
      <button type="button" className="destroy" onClick={handlerTodoRemove} />
    </li>
  )
}

export default TodoItem
