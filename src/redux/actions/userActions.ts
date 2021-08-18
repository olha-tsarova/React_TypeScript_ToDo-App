import {
  ADD_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOGOUT_USER,
  REFRESH_TOKEN_REQUEST,
} from '../../constants'
import { IUser } from '../../types/interfaces'

export const registerUser = (
  newUser: IUser,
): { type: string; payload } => ({
  type: ADD_USER_REQUEST,
  payload: newUser,
})

export const loginUser = (userData: {
  login
  password
}): { type: string; payload } => ({
  type: LOGIN_USER_REQUEST,
  payload: userData,
})

export const logOutUser = (): { type: string } => ({
  type: LOGOUT_USER,
})

export const refreshToken = (): { type: string } => ({
  type: REFRESH_TOKEN_REQUEST,
})
