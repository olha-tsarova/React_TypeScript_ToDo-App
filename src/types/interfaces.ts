export interface ITodo {
  title: string
  completed: boolean
  key: string
}

export interface IFilter {
  key: string
  title: string
}
export interface TodosState {
  todos: ITodo[]
}
