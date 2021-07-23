/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ADD_TODO } from '../../constants/constants'
import { ITodo } from '../../types/interfaces'

type CreateTodo = (newTodo: ITodo) => {
  type: string
  payload: ITodo
}

export const createTodo: CreateTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}
