/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {
  ActionChannelEffect,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects'
import {
  addUserApiRequest,
  loginUserApiRequest,
  refreshUserTokenApiRequest,
} from '../../api'
import {
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  ADD_USER_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  REFRESH_TOKEN_REQUEST,
} from '../../constants'
import setUserId from '../../helpers/setUserId'
import setUserTokens from '../../helpers/setUserTokens'

export function* loginUserSaga({
  payload: userData,
}: {
  payload
}): Generator {
  try {
    const response = yield call(loginUserApiRequest, userData)
    if (response) {
      setUserTokens(response)
      setUserId(response)
      yield put({ type: LOGIN_USER_SUCCESS, payload: response })
    }
  } catch (error) {
    yield put({ type: LOGIN_USER_FAIL, payload: error })
  }
}

export function* registerUserSaga({
  payload: newUser,
}: {
  payload
}): Generator {
  try {
    const response = yield call(addUserApiRequest, newUser)
    if (response) {
      yield put({ type: ADD_USER_SUCCESS, payload: response })
    }
  } catch (e) {
    yield put({ type: ADD_USER_FAIL, payload: e })
  }
}

export function* refreshUserTokenSaga(): Generator {
  try {
    const response = yield call(refreshUserTokenApiRequest)
    if (response) {
      setUserTokens(response)
      yield put({ type: REFRESH_TOKEN_SUCCESS, payload: response })
    }
  } catch (e) {
    yield put({ type: REFRESH_TOKEN_FAIL, payload: e })
  }
}

export function* usersWatcher(): Generator {
  yield takeLatest<ActionChannelEffect>(LOGIN_USER_REQUEST, loginUserSaga)
  yield takeLatest<ActionChannelEffect>(ADD_USER_REQUEST, registerUserSaga)
  yield takeLatest<ActionChannelEffect>(
    REFRESH_TOKEN_REQUEST,
    refreshUserTokenSaga,
  )
}
