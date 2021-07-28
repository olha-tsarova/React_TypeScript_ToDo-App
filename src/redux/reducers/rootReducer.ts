import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import loadingReducer from './loagingReducer'
import todosReducer from './todosReducer'

const rootReducer = combineReducers({
  todos: todosReducer,
  loading: loadingReducer,
  filter: filterReducer
})

export default rootReducer
