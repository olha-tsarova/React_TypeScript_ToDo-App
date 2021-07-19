import React from 'react'
import { Todo } from '../../utils/interfaces'
import TodoItem from './TodoItem'

const TodoList = ({ todos, changeStatus, removeTodo }) => (
  <ul className='todo-list'>
    {todos.map((todo: Todo) => (
      <TodoItem
        todo={todo}
        key={todo.key}
        changeStatus={changeStatus}
        removeTodo={removeTodo}
      />
    ))}
  </ul>
)

export default TodoList
