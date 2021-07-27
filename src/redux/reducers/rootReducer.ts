import { combineReducers } from 'redux'
import loadingReducer from './loagingReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  loading: loadingReducer
})

export default rootReducer
