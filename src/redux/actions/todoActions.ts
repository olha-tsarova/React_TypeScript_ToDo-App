import {
  ADD_TODO_REQUEST,
  CHANGE_TODO_STATUS_REQUEST,
  CLEAR_COMPLETED_TODOS_REQUEST,
  FETCH_TODOS_REQUEST,
  ON_TODO_ADDED,
  REMOVE_TODO_REQUEST,
  TOGGLE_ALL_TODOS_REQUEST
} from '../../constants'
import { ITodo } from '../../types/interfaces'

type actionTodoType = (Args?: ITodo | ITodo[] | boolean | string) => {
  type: string
  payload?: ITodo | ITodo[] | string | boolean
}

export const createTodo: actionTodoType = (newTodo) => ({
  type: ADD_TODO_REQUEST,
  payload: newTodo
})

export const onTodoAdded: actionTodoType = (newTodo) => ({
  type: ON_TODO_ADDED,
  payload: newTodo
})

export const removeTodo: actionTodoType = (todoKey) => ({
  type: REMOVE_TODO_REQUEST,
  payload: todoKey
})

export const changeTodoStatus: actionTodoType = (todo) => ({
  type: CHANGE_TODO_STATUS_REQUEST,
  payload: todo
})

export const toggleAllTodos: actionTodoType = (status) => ({
  type: TOGGLE_ALL_TODOS_REQUEST,
  payload: status
})

export const clearCompletedTodos: actionTodoType = () => ({
  type: CLEAR_COMPLETED_TODOS_REQUEST
})

export const fetchTodos: actionTodoType = () => ({
  type: FETCH_TODOS_REQUEST
})
