/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { connect } from 'react-redux'

import { ITodo } from '../../types/interfaces'
import TodoItem from './TodoItem'

interface ITodoList {
  changeStatus: (key: string) => void
  removeTodo: (key: string) => void
}

const TodoList: React.FC<ITodoList> = (
  { changeStatus, removeTodo },
  { syncTodos }
) => (
  <ul className="todo-list">
    {syncTodos.map((todo: ITodo) => (
      <TodoItem
        todo={todo}
        key={todo.key}
        changeStatus={changeStatus}
        removeTodo={removeTodo}
      />
    ))}
  </ul>
)

const mapStateToProps = (state: { todos: { todos: any } }) => {
  return {
    syncTodos: state.todos.todos
  }
}

export default connect(mapStateToProps, null)(TodoList)
