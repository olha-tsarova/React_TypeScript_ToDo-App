import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { registerUser } from '../redux/actions/userActions'

const Register: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const addNewUser = useCallback(
    (data) => {
      const newUser = {
        name: data.name.value.trim(),
        email: data.email.value.trim(),
        login: data.login.value.trim(),
        password: data.password.value.trim()
      }
      dispatch(registerUser(newUser))
    },
    [dispatch]
  )

  const handlerAddUser = useCallback(
    (event) => {
      event.preventDefault()
      addNewUser(event.target)
      history.push('/login')
    },
    [history, addNewUser]
  )

  return (
    <section className="todoapp">
      <h1>register</h1>
      <form
        className="login-form register-form"
        id="userRegistration"
        onSubmit={handlerAddUser}
      >
        <input
          type="text"
          name="name"
          placeholder="name"
          className="login-input new-todo"
          autoComplete="name"
          autoFocus
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="login-input new-todo"
          autoComplete="email"
        />
        <input
          type="login"
          name="login"
          placeholder="login"
          className="login-input new-todo"
          autoComplete="username"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="login-input new-todo"
          autoComplete="current-password"
        />
        <div className="button-wrapper">
          <button type="submit" className="button login-form-button">
            Submit
          </button>
          <button
            type="button"
            className="button login-form-button register-now"
          >
            <Link to="/login">Log in</Link>
          </button>
        </div>
      </form>
    </section>
  )
}

export default Register
