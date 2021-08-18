export const initialTodosState = {
  todos: [],
  counters: {
    active: 0,
    completed: 0,
  },
}

export const initialUserState = {
  accessToken: '',
  refreshToken: '',
  isAutorized: false,
  user: {
    name: '',
    login: '',
    email: '',
    id: '',
  },
}
