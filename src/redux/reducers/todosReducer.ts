/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  CHANGE_TODO_STATUS_SUCCESS,
  CLEAR_COMPLETED_TODOS_SUCCESS,
  REMOVE_TODO_SUCCESS,
  TOGGLE_ALL_TODOS_SUCCESS
} from '../../constants/constants'
import { ITodo } from '../../types/interfaces'
import { initialState } from '../initialState'

const todosReducer = (
  state = initialState,
  action: { type: string; payload: ITodo | string | boolean }
) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.list,
        counters: {
          ...state.counter
          active: action.payload.active,
          completed: action.payload.completed
        }
      }

    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] }

    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.key !== action.payload
        )
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

    default:
      return state
  }
}

export default todosReducer
