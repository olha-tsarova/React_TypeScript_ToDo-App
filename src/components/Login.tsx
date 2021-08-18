import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../redux/actions/userActions'

const Login: React.FC = () => {
  const dispatch = useDispatch()

  const loginRequest = useCallback(
    (data) => {
      const candidate = {
        login: data.login.value.trim(),
        password: data.password.value.trim(),
      }
      dispatch(loginUser(candidate))
    },
    [dispatch],
  )

  const handlerLoginSubmit = useCallback(
    (event) => {
      event.preventDefault()
      loginRequest(event.target)
    },
    [loginRequest],
  )

  return (
    <section className="todoapp">
      <h1>login</h1>
      <form className="login-form" onSubmit={handlerLoginSubmit}>
        <input
          type="text"
          name="login"
          className="login-input new-todo"
          placeholder="login"
          autoFocus
          autoComplete="current-login"
        />
        <input
          type="password"
          name="password"
          className="login-input new-todo"
          placeholder="password"
          autoComplete="current-password"
        />
        <div className="login-wrapper">
          <button type="submit" className="button login-form-button">
            Log me in
          </button>
          <button
            type="button"
            className="button login-form-button register-now"
          >
            <Link to="/register">Register now</Link>
          </button>
        </div>
      </form>
    </section>
  )
}

export default Login
