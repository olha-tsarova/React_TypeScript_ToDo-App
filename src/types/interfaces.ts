export interface ITodo {
  title: string
  completed: boolean
  key: string
}

export interface IFilter {
  key: string
  title: string
}

export interface IPayload {
  payload: ITodo | boolean | string
}

export interface IState {
  todos?: ITodo[] | []
  counters?: {
    active?: number
    completed?: number
  }
  loading?: boolean
  filter?: string
  user?: IUser
}

export interface IUser {
  name: string,
  login: string,
  email: string,
  password: string,
}
