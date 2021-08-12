/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const SecureRoute = ({ component: Component, ...rest }: any) => {
  const isAutorized = useSelector(
    (state: { user }) => state.user.isAutorized
  )
  if (rest.secure) {
    return (
      <Route
        {...rest}
        render={(props) =>
          (isAutorized ? <Component {...props} /> : <Redirect to="/login" />)
        }
      />
    )
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        (!isAutorized ? <Component {...props} /> : <Redirect to="/app" />)
      }
    />
  )
}

export default SecureRoute
