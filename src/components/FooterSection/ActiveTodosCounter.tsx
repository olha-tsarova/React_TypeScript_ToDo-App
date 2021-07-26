/* eslint-disable no-use-before-define */
import React from 'react'
import { ITodo } from '../../types/interfaces'

interface IActiveTodosCounter {
  activeTodos: ITodo[]
}

const ActiveTodosCounter: React.FC<IActiveTodosCounter> = ({
  activeTodos
}) => (
  <span className="todo-count">
    {activeTodos.length === 1
      ? '1 item left'
      : `${activeTodos.length} items left`}
  </span>
)

export default ActiveTodosCounter
