import {
  ActionChannelEffect,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'
import {
  getTodosApiRequest,
  addTodoApiRequest,
  removeTodoApiRequest,
  changeStatusApiRequest,
  toggleAllApiRequest,
  clearCompletedApiRequest,
  getCountersApiRequest,
} from '../../api'
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
  filters,
} from '../../constants'

export function* loadTodosSaga(): Generator {
  try {
    const response = yield call(getTodosApiRequest)
    if (response) {
      yield put({ type: FETCH_TODOS_SUCCESS, payload: response })
    }
  } catch (error) {
    yield put({ type: FETCH_TODOS_FAIL, payload: error })
  }
}

export function* loadActiveTodosSaga(): Generator {
  try {
    const response = yield call(getTodosApiRequest, 'filter=active')
    if (response) {
      yield put({ type: FETCH_TODOS_SUCCESS, payload: response })
    }
  } catch (error) {
    yield put({ type: FETCH_TODOS_FAIL, payload: error })
  }
}

export function* loadCompletedTodosSaga(): Generator {
  try {
    const response = yield call(getTodosApiRequest, 'filter=completed')
    if (response) {
      yield put({ type: FETCH_TODOS_SUCCESS, payload: response })
    }
  } catch (error) {
    yield put({ type: FETCH_TODOS_FAIL, payload: error })
  }
}

export function* addTodoSaga({
  payload: newTodo,
}: {
  payload
}): Generator {
  try {
    const response = yield call(addTodoApiRequest, newTodo)
    if (response) {
      yield put({ type: ADD_TODO_SUCCESS, payload: response })
    }
  } catch (e) {
    yield put({ type: ADD_TODO_FAIL, payload: e })
  }
}

export function* removeTodoSaga({
  payload: todoId,
}: {
  payload
}): Generator {
  try {
    const response = yield call(removeTodoApiRequest, {
      id: todoId,
    })
    if (response) {
      yield put({ type: REMOVE_TODO_SUCCESS, payload: response })
    }
  } catch (e) {
    yield put({ type: REMOVE_TODO_FAIL, payload: e })
  }
}

export function* changeTodoStatusSaga({
  payload: todo,
}: {
  payload
}): Generator {
  try {
    const response = yield call(changeStatusApiRequest, todo)
    if (response) {
      yield put({ type: CHANGE_TODO_STATUS_SUCCESS, payload: response })
    }
  } catch (e) {
    yield put({ type: CHANGE_TODO_STATUS_FAIL, payload: e })
  }
}

export function* toggleAllTodosSaga({
  payload: bool,
}: {
  payload
}): Generator {
  try {
    const response = yield call(toggleAllApiRequest, { status: bool })
    if (response) {
      yield put({ type: TOGGLE_ALL_TODOS_SUCCESS, payload: response })
    }
  } catch (e) {
    yield put({ type: TOGGLE_ALL_TODOS_FAIL, payload: e })
  }
}

export function* clearCompletedTodosSaga(): Generator {
  try {
    const response = yield call(clearCompletedApiRequest)
    if (response) {
      yield put({
        type: CLEAR_COMPLETED_TODOS_SUCCESS,
        payload: response,
      })
    }
  } catch (e) {
    yield put({ type: CLEAR_COMPLETED_TODOS_FAIL, payload: e })
  }
}

export function* updateCountersSaga(): Generator {
  try {
    const response = yield call(getCountersApiRequest)
    if (response) {
      yield put({
        type: UPDATE_COUNTERS,
        payload: response,
      })
    }
  } catch (e) {
    console.error(e)
  }
}

export function* todosWatcher(): Generator {
  yield takeLatest<ActionChannelEffect>(
    [FETCH_TODOS_REQUEST, filters.all],
    loadTodosSaga,
  )
  yield takeLatest<ActionChannelEffect>(ADD_TODO_REQUEST, addTodoSaga)
  yield takeLatest(
    [
      ADD_TODO_SUCCESS,
      REMOVE_TODO_SUCCESS,
      CHANGE_TODO_STATUS_SUCCESS,
      TOGGLE_ALL_TODOS_SUCCESS,
      CLEAR_COMPLETED_TODOS_SUCCESS,
    ],
    updateCountersSaga,
  )
  yield takeLatest<ActionChannelEffect>(
    REMOVE_TODO_REQUEST,
    removeTodoSaga,
  )
  yield takeLatest<ActionChannelEffect>(
    CHANGE_TODO_STATUS_REQUEST,
    changeTodoStatusSaga,
  )
  yield takeLatest<ActionChannelEffect>(
    TOGGLE_ALL_TODOS_REQUEST,
    toggleAllTodosSaga,
  )
  yield takeLatest<ActionChannelEffect>(
    CLEAR_COMPLETED_TODOS_REQUEST,
    clearCompletedTodosSaga,
  )
  yield takeLatest(filters.completed, loadCompletedTodosSaga)
  yield takeLatest(filters.active, loadActiveTodosSaga)
}
