/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable require-yield */
import { eventChannel } from 'redux-saga'
import { ON_TODO_ADDED } from '../../../constants'
import socket from '../../../api/websocket'
import { onTodoAdded } from '../../actions/todoActions'

function subscribeForNewTodo() {
  const subscribe = (emitter: any) => {
    socket.on(ON_TODO_ADDED, onTodoAdded)
    console.log(`socket: -------${emitter}`);

    return () => socket.off(ON_TODO_ADDED, emitter)
  }

  return eventChannel(subscribe)

  // return eventChannel((emit) => {
  //   const update = (todo) => emit(onTodoAdded(todo))
  //   socket.on('todo:added', update)
  //   return () => {}
  // })
}

export default subscribeForNewTodo
