import {
  FETCH_TODOS_SUCCESS,
  ADD_TODO_SUCCESS,
  CHANGE_TODO_STATUS_SUCCESS,
  CLEAR_COMPLETED_TODOS_SUCCESS,
  REMOVE_TODO_SUCCESS,
  TOGGLE_ALL_TODOS_SUCCESS,
  UPDATE_COUNTERS,
  ON_TODO_ADDED,
  ON_TODO_DELETED,
  ON_TODO_CHANGED,
  ON_TODOS_TOGGLED,
  ON_TODO_CLEAR_COMPLETED,
} from '../../constants'
import { IState } from '../../types/interfaces'
import { initialTodosState } from '../initialState'

const todosReducer = (
  state = initialTodosState,
  action: { type: string; payload },
): IState => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.list || [],
        counters: {
          ...state.counters,
          active: action.payload.active,
          completed: action.payload.completed,
        },
      }

    case ON_TODO_ADDED:
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.some((todo) => action.payload.id === todo.id)
          ? state.todos
          : [...state.todos, action.payload],
        // todos: [...state.todos, action.payload],
      }

    case ON_TODO_DELETED:
    case REMOVE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload.id,
        ),
      }

    case ON_TODO_CHANGED:
    case CHANGE_TODO_STATUS_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload
          }

          return todo
        }),
      }

    case ON_TODOS_TOGGLED:
    case TOGGLE_ALL_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      }

    case ON_TODO_CLEAR_COMPLETED:
    case CLEAR_COMPLETED_TODOS_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      }

    case UPDATE_COUNTERS:
      return {
        ...state,
        counters: {
          active: action.payload.active,
          completed: action.payload.completed,
        },
      }

    default:
      return state
  }
}

export default todosReducer
