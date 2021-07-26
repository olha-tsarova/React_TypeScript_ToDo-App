/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { call, put, takeEvery } from 'redux-saga/effects'
import { getTodosFromServer } from '../../api/api'
import {
  endpoints,
  FETCH_TODOS_FAIL,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS
} from '../../constants/constants'

export function* todosWorker() {
  try {
    const payload = yield call(getTodosFromServer, endpoints.GET_TODOS_URL)
    yield put({ FETCH_TODOS_SUCCESS, payload })
  } catch (e) {
    yield put({ type: FETCH_TODOS_FAIL, e })
  }
}

export function* todosWatcher() {
  yield takeEvery(FETCH_TODOS_REQUEST, todosWorker)
}
