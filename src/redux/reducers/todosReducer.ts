/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  CHANGE_TODO_STATUS_SUCCESS,
  CLEAR_COMPLETED_TODOS_SUCCESS,
  REMOVE_TODO_SUCCESS,
  TOGGLE_ALL_TODOS_SUCCESS,
  UPDATE_COUNTERS
} from '../../constants/constants'
import { ITodo } from '../../types/interfaces'
import { initialState } from '../initialState'

const todosReducer = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.list,
        counters: {
          ...state.counters,
          active: action.payload.active,
          completed: action.payload.completed
        }
      }

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.key !== action.payload.key)
      }

    case CHANGE_TODO_STATUS_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.key === (action.payload as ITodo).key) {
            return action.payload
          }

          return todo
        })
      }

    case TOGGLE_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload
      }

    case CLEAR_COMPLETED_TODOS_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed)
      }

    case UPDATE_COUNTERS:
      return {
        ...state,
        counters: {
          active: action.payload.active,
          completed: action.payload.completed
        }
      }

    default:
      return state
  }
}

export default todosReducer
