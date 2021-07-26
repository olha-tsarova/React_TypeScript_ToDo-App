import { ITodo } from '../types/interfaces'

const API_URL = 'http://127.0.0.1:9800'

type Data =
  | string[]
  | { keys: string[]; completed?: boolean }
  | string
  | ITodo
  | undefined

export function getTodosFromServer(
  options: string
): Promise<ITodo[] | void> {
  return fetch(`${API_URL}${options}`)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .catch((err) => console.error(err))
}

export function queryToServer(
  options: string,
  method: string,
  data: Data
): Promise<void | Response> {
  console.log(`DATA: ${data}`)
  return fetch(`${API_URL}${options}`, {
    method,
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then((response) => response)
    .catch((err) => console.error(err))
}
