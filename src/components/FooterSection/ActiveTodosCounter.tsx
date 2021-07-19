import React from "react"
import { ITodo } from "../../utils/interfaces"

interface IActiveTodosCounter {
  activeTodos: ITodo[]
}

const ActiveTodosCounter: React.FC<IActiveTodosCounter> = ({ activeTodos}) => {
  return (
    <span className='todo-count'>
      {activeTodos.length === 1
        ? '1 item left'
        : `${activeTodos.length} items left`}
    </span>
  )
}

export default ActiveTodosCounter
