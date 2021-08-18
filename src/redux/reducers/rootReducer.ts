import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import loadingReducer from './loagingReducer'
// import socketReducer from './socketReducer'
import todosReducer from './todosReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  loading: loadingReducer,
  filter: filterReducer,
  user: userReducer,
  // socket: socketReducer,
})

export default rootReducer
