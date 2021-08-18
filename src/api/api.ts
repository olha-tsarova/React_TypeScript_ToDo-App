/* eslint-disable consistent-return */
import { API_URL, endpoints, fetchMethods } from '../constants'
import setUserTokens from '../helpers/setUserTokens'
import { ITodo } from '../types/interfaces'

type Data =
  | ITodo
  | { completed?: boolean }
  | { status?: boolean }

export async function queryToServer(
  options: string,
  method: string,
  params?: string,
  data?:
    | { completed?: boolean }
    | { login?: string; password?: string }
    | { status?: boolean }
    | { id?: number }
    | ITodo
    | { oldToken: string },
): Promise<Response | void> {
  const request = {
    options,
    method,
    params,
    data,
  }

  try {
    let headers = {
      'Content-type': 'application/json',
      Authorization: null,
    }

    if (localStorage.getItem('accessToken')) {
      headers = {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      }
    }

    const response = await fetch(
      params ? `${API_URL}${options}?${params}` : `${API_URL}${options}`,
      data
        ? {
          method,
          headers,
          body: JSON.stringify(data),
        }
        : {
          method,
          headers,
        },
    )
    if (response.ok) {
      return response.json()
    }

    if (response.status === 401) {
      const res = await refreshUserTokenApiRequest()
      setUserTokens(res)

      return queryToServer(
        request.options,
        request.method,
        request.params,
        request.data,
      )
    }
  } catch (e) {
    console.log(e.message)
  }
}

export const getTodosApiRequest = (
  params?: string,
): Promise<Response | void> =>
  queryToServer(endpoints.GET_TODOS_URL, fetchMethods.M_GET, params)

export const getCountersApiRequest = (): Promise<Response | void> =>
  queryToServer(endpoints.GET_COUNTERS_URL, fetchMethods.M_GET)

export const addTodoApiRequest = (data: Data): Promise<Response | void> =>
  queryToServer(endpoints.ADD_TODO_URL, fetchMethods.M_POST, '', data)

export const removeTodoApiRequest = (
  data: { id: number},
): Promise<Response | void> =>
  queryToServer(
    endpoints.DELETE_TODOS_URL,
    fetchMethods.M_DELETE,
    '',
    data,
  )

export const changeStatusApiRequest = (
  data: Data,
): Promise<Response | void> =>
  queryToServer(endpoints.EDIT_TODO_URL, fetchMethods.M_PATCH, '', data)

export const toggleAllApiRequest = (
  data: Data,
): Promise<Response | void> =>
  queryToServer(endpoints.TOGGLE_ALL_URL, fetchMethods.M_PATCH, '', data)

export const clearCompletedApiRequest = (): Promise<Response | void> =>
  queryToServer(endpoints.CLEAR_COMPLETED_URL, fetchMethods.M_DELETE)

export const addUserApiRequest = (data: Data): Promise<Response | void> =>
  queryToServer(endpoints.ADD_USER_URL, fetchMethods.M_POST, '', data)

export const loginUserApiRequest = (data: {
  login
  password
}): Promise<Response | void> =>
  queryToServer(endpoints.LOGIN_USER_URL, fetchMethods.M_POST, '', data)

export const refreshUserTokenApiRequest = (): Promise<Response | void> =>
  queryToServer(
    endpoints.REFRESH_TOKEN_URL,
    fetchMethods.M_GET,
    `oldToken=${localStorage.getItem('refreshToken')}`,
  )
