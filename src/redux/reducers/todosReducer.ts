/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  CLEAR_COMPLETED_TODOS,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
  TOGGLE_ALL_TODOS
} from '../../constants/constants'
import { ITodo } from '../../types/interfaces'
import { initialState } from '../initialState'

const todosReducer = (
  state = initialState,
  action: { type: string; payload: ITodo | string | boolean }
) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload }

    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] }

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.key !== action.payload
        )
      }

    case CHANGE_TODO_STATUS:
      return {
        ...state,
        todos: state.todos.map((todo: ITodo) => {
          if (todo.key === action.payload) {
            const newTodo = {
              ...todo,
              completed: !todo.completed
            }

            return newTodo
          }

          return todo
        })
      }

    case TOGGLE_ALL_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo) => ({
          ...todo,
          completed: action.payload
        }))
      }

    case CLEAR_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed)
      }

    default:
      return state
  }
}

export default todosReducer
