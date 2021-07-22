/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ITodo } from '../../types/interfaces'
import { ADD_TODO } from '../../constants/constants'
// import { initialState } from '../initialState'

import { v4 as uuid } from 'uuid'

const todosReducer = (
  state = [
    {
      key: uuid(),
      title: 'something',
      completed: false
    },
    {
      key: uuid(),
      title: 'something else',
      completed: true
    }
  ],
  action: { type: unknown; payload: ConcatArray<ITodo> }
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload]

    default:
      return state
  }
}

export default todosReducer
