/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeLatest } from 'redux-saga/effects'
import { getTodosFromServer, queryToServer } from '../../api/api'
import {
  endpoints,
  fetchMethods,
  ADD_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  FETCH_TODOS_FAIL,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO_SUCCESS,
  REMOVE_TODO_FAIL,
  REMOVE_TODO_REQUEST,
  CHANGE_TODO_STATUS_SUCCESS,
  CHANGE_TODO_STATUS_FAIL,
  CHANGE_TODO_STATUS_REQUEST,
  TOGGLE_ALL_TODOS_REQUEST,
  TOGGLE_ALL_TODOS_SUCCESS,
  TOGGLE_ALL_TODOS_FAIL,
  CLEAR_COMPLETED_TODOS_SUCCESS,
  CLEAR_COMPLETED_TODOS_FAIL,
  CLEAR_COMPLETED_TODOS_REQUEST
} from '../../constants/constants'

const addTodoApiRequest = (data) =>
  queryToServer(endpoints.ADD_TODO_URL, fetchMethods.M_POST, data)

export function* loadTodosSaga() {
  try {
    const response = yield call(
      getTodosFromServer,
      endpoints.GET_TODOS_URL
    )
    yield put({ type: FETCH_TODOS_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: FETCH_TODOS_FAIL, payload: e })
  }
}

export function* addTodoSaga({ payload: newTodo }) {
  try {
    const response = yield call(addTodoApiRequest, newTodo)
    yield put({ type: ADD_TODO_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: ADD_TODO_FAIL, payload: e })
  }
}

export function* removeTodoSaga({ payload: todoKey }) {
  try {
    const response = yield call(
      queryToServer,
      endpoints.DELETE_TODOS_URL,
      fetchMethods.M_DELETE,
      todoKey
    )
    yield put({ type: REMOVE_TODO_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: REMOVE_TODO_FAIL, payload: e })
  }
}

export function* changeTodoStatusSaga({ payload: todo }) {
  try {
    const response = yield call(
      queryToServer,
      endpoints.EDIT_TODO_URL,
      fetchMethods.M_PATCH,
      todo
    )
    yield put({ type: CHANGE_TODO_STATUS_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: CHANGE_TODO_STATUS_FAIL, payload: e })
  }
}

export function* toggleAllTodosSaga({ payload: status }) {
  try {
    const response = yield call(
      queryToServer,
      endpoints.TOGGLE_ALL_URL,
      fetchMethods.M_PATCH,
      status
    )
    yield put({ type: TOGGLE_ALL_TODOS_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: TOGGLE_ALL_TODOS_FAIL, payload: e })
  }
}

export function* clearCompletedTodosSaga() {
  try {
    const response = yield call(
      queryToServer,
      endpoints.CLEAR_COMPLETED_URL,
      fetchMethods.M_DELETE
    )
    yield put({
      type: CLEAR_COMPLETED_TODOS_SUCCESS,
      payload: response
    })
  } catch (e) {
    yield put({ type: CLEAR_COMPLETED_TODOS_FAIL, payload: e })
  }
}

export function* todosWatcher() {
  yield takeLatest([FETCH_TODOS_REQUEST], loadTodosSaga)
  yield takeLatest(ADD_TODO_REQUEST, addTodoSaga)
  yield takeLatest(REMOVE_TODO_REQUEST, removeTodoSaga)
  yield takeLatest(CHANGE_TODO_STATUS_REQUEST, changeTodoStatusSaga)
  yield takeLatest(TOGGLE_ALL_TODOS_REQUEST, toggleAllTodosSaga)
  yield takeLatest(
    CLEAR_COMPLETED_TODOS_REQUEST,
    clearCompletedTodosSaga
  )
}
