import { ITodo } from '../types/interfaces'

interface TodosState {
  todos: ITodo[]
}

export const initialState: TodosState = {
  todos: []
}
