import { eventChannel } from 'redux-saga'
import {
  take, put, call, takeLatest, select,
} from 'redux-saga/effects'
import io from 'socket.io-client'
import {
  WS_API_URL,
  ON_TODO_ADDED,
  ON_TODO_CLEAR_COMPLETED,
  ON_TODO_CHANGED,
  ON_TODO_DELETED,
  ON_TODOS_TOGGLED,
  LOGIN_USER_SUCCESS,
  REFRESH_TOKEN_SUCCESS,
  LOGOUT_USER,
  ON_USER_DISCONNECTED,
} from '../../constants'

import {
  onTodoAdded,
  onTodoClearCompleted,
  onTodoEdited,
  onTodoRemoved,
  onTodosToggled,
} from '../actions/socketActions'
import { logOutUser } from '../actions/userActions'
import { updateCountersSaga } from './todosSaga'

function createSocketConnection() {
  return io(WS_API_URL)
}

function createSocketChannel(socket) {
  return eventChannel((emit) => {
    const eventHandler = (event) => {
      switch (event.type) {
        case ON_TODO_ADDED:
          return emit(onTodoAdded(event.data))

        case ON_TODO_CLEAR_COMPLETED:
          return emit(onTodoClearCompleted(event.data))

        case ON_TODO_CHANGED:
          return emit(onTodoEdited(event.data))

        case ON_TODO_DELETED:
          return emit(onTodoRemoved(event.data))

        case ON_TODOS_TOGGLED:
          return emit(onTodosToggled(event.data))

        case ON_USER_DISCONNECTED:
          return emit(logOutUser())

        default:
          return ''
      }
    }

    const errorHandler = (errorEvent) => {
      emit(new Error(errorEvent.reason))
    }

    socket.on('changes', eventHandler)
    socket.on('error', errorHandler)

    const unsubscribe = () => {
      socket.off('disconnect', () => console.log('Unsubscribed'))
    }

    return unsubscribe
  })
}

function* watchSocketChannel() {
  const user = yield select((state) => state.user.user)
  const isAutorized = yield select((state) => state.user.isAutorized)

  const socket = yield call(createSocketConnection)
  const socketChannel = yield call(createSocketChannel, socket)

  socket.on('connect', () => {
    if (!isAutorized) {
      socket.emit('user:disconnect', {
        userId: localStorage.getItem('userId'),
        socketId: socket.id,
      })
    } else {
      socket.emit('user:connected', {
        userId: user.id,
        socketId: socket.id,
      })
    }
  })

  socket.on('disconnect', () => {
    console.log('disconnect')
  })

  while (true) {
    try {
      const action = yield take(socketChannel)

      yield put(action)
    } catch (error) {
      console.log(error)
    }
  }
}

export default function* socketWatcher(): Generator {
  yield takeLatest(
    [LOGIN_USER_SUCCESS, REFRESH_TOKEN_SUCCESS, LOGOUT_USER],
    watchSocketChannel,
  )
  yield takeLatest(
    [
      ON_TODO_ADDED,
      ON_TODO_CLEAR_COMPLETED,
      ON_TODO_CHANGED,
      ON_TODO_DELETED,
      ON_TODOS_TOGGLED,
    ],
    updateCountersSaga,
  )
}
