/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'

const ActiveTodosCounter: React.FC = () => {
  const counters = useSelector((state: any) => state.todos.counters)
  return (
    <span className="todo-count">
      {counters.active === 1 ? '1 item left' : `${counters.active} items left`}
    </span>
  )
}

export default ActiveTodosCounter
