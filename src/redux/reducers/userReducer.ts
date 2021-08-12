import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REFRESH_TOKEN_FAIL,
  REFRESH_TOKEN_SUCCESS
} from '../../constants'
import { initialUserState } from '../initialState'

const userReducer = (
  state = initialUserState,
  action: { type: string; payload }
): { isAutorized: boolean; accessToken; refreshToken; user, todos? } => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isAutorized: true,
        accessToken: action.payload.tokens.accessToken,
        refreshToken: action.payload.tokens.refreshToken,
        user: {
          login: action.payload.user.login,
          name: action.payload.user.name,
          email: action.payload.user.email,
          role: action.payload.user.role,
          id: action.payload.user.id
        }
      }

    case LOGOUT_USER:
    case LOGIN_USER_FAIL:
    case REFRESH_TOKEN_FAIL:
      return {
        ...state,
        todos: {},
        isAutorized: false,
        accessToken: '',
        refreshToken: '',
        user: {
          login: '',
          email: '',
          role: '',
          id: '',
          name: ''
        }
      }

    default:
      return state
  }
}

export default userReducer
