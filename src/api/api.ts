/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { endpoints, fetchMethods } from '../constants/constants'
import { ITodo } from '../types/interfaces'

const API_URL = 'http://127.0.0.1:8080/'

type Data =
  | string[]
  | { keys: string[]; completed?: boolean }
  | string
  | ITodo
  | undefined

export function getDataFromServer(
  options: string,
  params?: string
): Promise<ITodo[] | void> {
  console.log(params)

  return fetch(
    params ? `${API_URL}${options}?${params}` : `${API_URL}${options}`
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))
}

export function queryToServer(
  options: string,
  method: string,
  data?: Data
): Promise<void | Response> {
  return fetch(`${API_URL}${options}`, {
    method,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data || '')
  })
    .then((response) => response.json())
    .catch((err) => console.error(err))
}

export const getTodosApiRequest = (params?: string) =>
  getDataFromServer(endpoints.GET_TODOS_URL, params)

export const getCountersApiRequest = () =>
  getDataFromServer(endpoints.GET_COUNTERS_URL)

export const addTodoApiRequest = (data: Data) =>
  queryToServer(endpoints.ADD_TODO_URL, fetchMethods.M_POST, data)

export const removeTodoApiRequest = (data: Data) =>
  queryToServer(endpoints.DELETE_TODOS_URL, fetchMethods.M_DELETE, data)

export const changeStatusApiRequest = (data: Data) =>
  queryToServer(endpoints.EDIT_TODO_URL, fetchMethods.M_PATCH, data)

export const toggleAllApiRequest = (data: Data) =>
  queryToServer(endpoints.TOGGLE_ALL_URL, fetchMethods.M_PATCH, data)

export const clearCompletedApiRequest = () =>
  queryToServer(endpoints.CLEAR_COMPLETED_URL, fetchMethods.M_DELETE)
