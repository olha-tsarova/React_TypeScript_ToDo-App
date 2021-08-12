import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from './reducers/rootReducer'
import { todosWatcher } from './saga/todosSaga'
import { usersWatcher } from './saga/userSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(todosWatcher)
sagaMiddleware.run(usersWatcher)
export default store
