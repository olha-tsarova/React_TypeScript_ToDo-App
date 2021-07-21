import { ADD_TODO } from '../actions/types'
import { initialState } from '../initialState'

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: state.todos.concat(action.payload) }

    default:
      return state
  }
}

export default todosReducer
