export const filters = {
  completed: 'Completed',
  active: 'Active',
  all: 'All'
}

export const endpoints = {
  GET_TODOS_URL: '/todos',
  ADD_TODO_URL: '/addtodo',
  DELETE_TODOS_URL: '/delete',
  EDIT_TODO_URL: '/edit',
  CHANGE_STATUSES_URL: '/changestatuses'
}

export const fetchMethods = {
  M_GET: 'GET',
  M_POST: 'POST',
  M_PATCH: 'PATCH',
  M_DELETE: 'DELETE'
}

export const buttons = [
  { key: filters.all, title: filters.all },
  { key: filters.active, title: filters.active },
  { key: filters.completed, title: filters.completed }
]

export const ADD_TODO = 'ADD_TODO'
export const FETCH_TODOS = 'FETCH_TODOS'
export const REMOVE_TODO = 'REMOVE_TODO'
export const CHANGE_STATUS_TODO = 'CHANGE_STATUS_TODO'
export const TOGGLE_ALL_TODOS = 'TOGGLE_ALL_TODOS'
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS'

