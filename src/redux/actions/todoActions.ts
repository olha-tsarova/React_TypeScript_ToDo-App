import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  CLEAR_COMPLETED_TODOS,
  FETCH_TODOS_REQUEST,
  REMOVE_TODO,
  TOGGLE_ALL_TODOS
} from '../../constants/constants'
import { ITodo } from '../../types/interfaces'

type actionTodoType = (Args?: ITodo | ITodo[] | boolean | string) => {
  type: string
  payload?: ITodo | ITodo[] | string | boolean
}

export const createTodo: actionTodoType = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo
})

export const removeTodo: actionTodoType = (todoKey) => ({
  type: REMOVE_TODO,
  payload: todoKey
})

export const changeTodoStatus: actionTodoType = (todoKey) => ({
  type: CHANGE_TODO_STATUS,
  payload: todoKey
})

export const toggleAllTodos: actionTodoType = (status) => ({
  type: TOGGLE_ALL_TODOS,
  payload: status
})

export const clearCompletedTodos: actionTodoType = () => ({
  type: CLEAR_COMPLETED_TODOS
})

export const fetchTodos: actionTodoType = () => ({
  type: FETCH_TODOS_REQUEST
})
