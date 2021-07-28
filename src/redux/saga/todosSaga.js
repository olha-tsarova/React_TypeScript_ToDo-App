/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeLatest } from 'redux-saga/effects'
import {
  getTodosApiRequest,
  addTodoApiRequest,
  removeTodoApiRequest,
  changeStatusApiRequest,
  toggleAllApiRequest,
  clearCompletedApiRequest,
  getCountersApiRequest
} from '../../api/api'
import {
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
  CLEAR_COMPLETED_TODOS_REQUEST,
  UPDATE_COUNTERS,
  filters
} from '../../constants/constants'

export function* loadTodosSaga() {
  try {
    const response = yield call(getTodosApiRequest)
    yield put({ type: FETCH_TODOS_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: FETCH_TODOS_FAIL, payload: e })
  }
}

export function* loadActiveTodosSaga() {
  try {
    const response = yield call(getTodosApiRequest, 'filter=active')
    yield put({ type: FETCH_TODOS_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: FETCH_TODOS_FAIL, payload: error })
  }
}

export function* loadCompletedTodosSaga() {
  try {
    const response = yield call(getTodosApiRequest, 'filter=completed')
    yield put({ type: FETCH_TODOS_SUCCESS, payload: response })
  } catch (error) {
    yield put({ type: FETCH_TODOS_FAIL, payload: error })
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
    const response = yield call(removeTodoApiRequest, todoKey)
    yield put({ type: REMOVE_TODO_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: REMOVE_TODO_FAIL, payload: e })
  }
}

export function* changeTodoStatusSaga({ payload: todo }) {
  try {
    const response = yield call(changeStatusApiRequest, todo)
    yield put({ type: CHANGE_TODO_STATUS_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: CHANGE_TODO_STATUS_FAIL, payload: e })
  }
}

export function* toggleAllTodosSaga({ payload: status }) {
  try {
    const response = yield call(toggleAllApiRequest, status)
    yield put({ type: TOGGLE_ALL_TODOS_SUCCESS, payload: response })
  } catch (e) {
    yield put({ type: TOGGLE_ALL_TODOS_FAIL, payload: e })
  }
}

export function* clearCompletedTodosSaga() {
  try {
    const response = yield call(clearCompletedApiRequest)
    yield put({
      type: CLEAR_COMPLETED_TODOS_SUCCESS,
      payload: response
    })
  } catch (e) {
    yield put({ type: CLEAR_COMPLETED_TODOS_FAIL, payload: e })
  }
}

export function* updateCountersSaga() {
  try {
    const response = yield call(getCountersApiRequest)
    console.log(response)
    yield put({
      type: UPDATE_COUNTERS,
      payload: response
    })
  } catch (e) {
    console.error(e)
  }
}

export function* todosWatcher() {
  yield takeLatest([FETCH_TODOS_REQUEST, filters.all], loadTodosSaga)
  yield takeLatest(ADD_TODO_REQUEST, addTodoSaga)
  yield takeLatest(
    [
      ADD_TODO_SUCCESS,
      REMOVE_TODO_SUCCESS,
      CHANGE_TODO_STATUS_SUCCESS,
      TOGGLE_ALL_TODOS_SUCCESS,
      CLEAR_COMPLETED_TODOS_SUCCESS
    ],
    updateCountersSaga
  )
  yield takeLatest(REMOVE_TODO_REQUEST, removeTodoSaga)
  yield takeLatest(CHANGE_TODO_STATUS_REQUEST, changeTodoStatusSaga)
  yield takeLatest(TOGGLE_ALL_TODOS_REQUEST, toggleAllTodosSaga)
  yield takeLatest(CLEAR_COMPLETED_TODOS_REQUEST, clearCompletedTodosSaga)
  yield takeLatest(filters.completed, loadCompletedTodosSaga)
  yield takeLatest(filters.active, loadActiveTodosSaga)
}
