import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Switch } from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Register from './components/Register'
import { refreshToken } from './redux/actions/userActions'
import SecureRoute from './SecureRoute'

const AppRouter: React.FC = () => {
  const isAutorized = useSelector(
    (state: { user }) => state.user.isAutorized,
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('refreshToken')) {
      dispatch(refreshToken())
    }
  }, [dispatch])

  return (
    <Switch>
      <SecureRoute exact path="/app" component={App} secure />
      <SecureRoute exact path="/login" component={Login} />
      <SecureRoute exact path="/register" component={Register} />
      {!isAutorized && <Redirect from="/" to="/login" />}
      {isAutorized && <Redirect from="/" to="/app" />}
    </Switch>
  )
}

export default AppRouter
