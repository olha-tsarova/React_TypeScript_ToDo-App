import { ADD_TODO } from '../actions/types'

export function createTodo(newTodo: any) {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}
