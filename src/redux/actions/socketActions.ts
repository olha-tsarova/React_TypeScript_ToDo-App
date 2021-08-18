import {
  ON_APP_OPEN,
  ON_TODOS_TOGGLED,
  ON_TODO_ADDED,
  ON_TODO_CHANGED,
  ON_TODO_CLEAR_COMPLETED,
  ON_TODO_DELETED,
  ON_USER_CONNECTED,
} from '../../constants'
import { ITodo } from '../../types/interfaces'

type actionTodoType = (Args?: ITodo | ITodo[] | boolean | string) => {
  type: string
  payload?: ITodo | ITodo[] | string | boolean
}

export const onOpen: actionTodoType = (socketId) => ({
  type: ON_APP_OPEN,
  payload: socketId,
})

export const onConnect: actionTodoType = (userId) => ({
  type: ON_USER_CONNECTED,
  payload: userId,
})

export const onTodoAdded: actionTodoType = (newTodo) => ({
  type: ON_TODO_ADDED,
  payload: newTodo,
})

export const onTodoClearCompleted: actionTodoType = () => ({
  type: ON_TODO_CLEAR_COMPLETED,
})

export const onTodoRemoved: actionTodoType = (todoId) => ({
  type: ON_TODO_DELETED,
  payload: todoId,
})

export const onTodoEdited: actionTodoType = (todo) => ({
  type: ON_TODO_CHANGED,
  payload: todo,
})

export const onTodosToggled: actionTodoType = (status) => ({
  type: ON_TODOS_TOGGLED,
  payload: status,
})
