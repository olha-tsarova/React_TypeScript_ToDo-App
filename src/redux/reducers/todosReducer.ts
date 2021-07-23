/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ADD_TODO } from '../../constants/constants'
import { ITodo } from '../../types/interfaces'
import { initialState } from '../initialState'

const todosReducer = (
  state = initialState,
  action: { type: string; payload: ITodo }
) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos, action.payload]}

    default:
      return state
  }
}

export default todosReducer
