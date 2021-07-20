import React from 'react'
import { ITodo } from '../../utils/interfaces'
import TodoItem from './TodoItem'

interface ITodoList {
  todos: ITodo[],
  changeStatus: (key: string) => void,
  removeTodo: (key: string) => void
}

const TodoList: React.FC<ITodoList> = ({ todos, changeStatus, removeTodo }) => (
  <ul className='todo-list'>
    {todos.map((todo: ITodo) => (
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
