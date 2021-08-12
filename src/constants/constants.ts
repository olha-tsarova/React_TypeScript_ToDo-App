export const filters = {
  completed: 'Completed',
  active: 'Active',
  all: 'All'
}

export const endpoints = {
  GET_TODOS_URL: 'todos',
  GET_COUNTERS_URL: 'counters',
  ADD_TODO_URL: 'addtodo',
  DELETE_TODOS_URL: 'delete',
  EDIT_TODO_URL: 'edit',
  TOGGLE_ALL_URL: 'changestatuses',
  CLEAR_COMPLETED_URL: 'clearcompleted',
  ADD_USER_URL: 'public/adduser',
  REFRESH_TOKEN_URL: 'public/refreshtoken',
  LOGIN_USER_URL: 'public/login'
}

export const fetchMethods = {
  M_GET: 'GET',
  M_POST: 'POST',
  M_PATCH: 'PUT',
  M_DELETE: 'DELETE'
}

export const buttons = [
  { key: filters.all, title: filters.all },
  { key: filters.active, title: filters.active },
  { key: filters.completed, title: filters.completed }
]

export const SHOW_LOADING = 'SHOW_LOADING'
export const HIDE_LOADING = 'HIDE_LOADING'

export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST'
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS'
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL'

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL'

export const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_FAIL = 'ADD_USER_FAIL'

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST'
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS'
export const REFRESH_TOKEN_FAIL = 'REFRESH_TOKEN_FAIL'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'

export const LOGOUT_USER_REQUEST = 'LOGOUT_USER_REQUEST'
export const LOGOUT_USER = 'LOGOUT_USER'

export const REMOVE_TODO_REQUEST = 'REMOVE_TODO_REQUEST'
export const REMOVE_TODO_SUCCESS = 'REMOVE_TODO_SUCCESS'
export const REMOVE_TODO_FAIL = 'REMOVE_TODO_FAIL'

export const CHANGE_TODO_STATUS_REQUEST = 'CHANGE_STATUS_TODO_REQUEST'
export const CHANGE_TODO_STATUS_SUCCESS = 'CHANGE_STATUS_TODO_SUCCESS'
export const CHANGE_TODO_STATUS_FAIL = 'CHANGE_STATUS_TODO_FAIL'

export const TOGGLE_ALL_TODOS_REQUEST = 'TOGGLE_ALL_TODOS_REQUEST'
export const TOGGLE_ALL_TODOS_SUCCESS = 'TOGGLE_ALL_TODOS_SUCCESS'
export const TOGGLE_ALL_TODOS_FAIL = 'TOGGLE_ALL_TODOS_FAIL'

export const CLEAR_COMPLETED_TODOS_REQUEST = 'CLEAR_COMPLETED_TODOS_REQUEST'
export const CLEAR_COMPLETED_TODOS_SUCCESS = 'CLEAR_COMPLETED_TODOS_SUCCESS'
export const CLEAR_COMPLETED_TODOS_FAIL = 'CLEAR_COMPLETED_TODOS_FAIL'

export const UPDATE_COUNTERS = 'UPDATE_COUNTERS'
