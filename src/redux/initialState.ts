import { ITodo } from '../types/interfaces'
import { v4 as uuid } from 'uuid'


interface TodosState {
  todos: ITodo[]
}

export const initialState: TodosState = {
  todos: [
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
  ]
}
