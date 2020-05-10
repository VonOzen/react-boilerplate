import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import * as ROUTES from '../../constants/routes'

import LandingPage from './landing'
import SignInPage from './signin'
import SignUpPage from './signup'
import AdminPage from './admin'
import PasswordForgetPage from './pw-forget'
import SignOutBtn from './common/SignOutBtn'

const App = () => {
  return (
    <>
      <header><h1>React Boilerplate</h1><SignOutBtn /></header>
      <Router>
        <Route exact path={ROUTES.HOME} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      </Router>
      <footer>footer</footer>
    </>
  )
}

export default App
