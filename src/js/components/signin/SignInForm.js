import React, { useState, useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../firebase'
import { setUserIsLogged } from '../../actions/userActions'
import * as ROUTES from '../../../constants/routes'

const SignInForm = ({ firebase, history }) => {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      email: '',
      password: '',
    }
  )

  const { email, password } = userInput
  const [error, setError] = useState(undefined)
  const isInvalid = password === '' || email === ''

  const handleSubmit = e => {
    e.preventDefault()

    firebase.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        setUserInput({
          email: '',
          password: '',
        })
        dispatch(setUserIsLogged(true))
        history.push(ROUTES.HOME)
      })
      .catch(error => setError(error.message))
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserInput({[name]: value})
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        name="email"
        value={email}
        onChange={handleChange}
        type="email"
        placeholder="Adresse email"
      />
      <input
        name="password"
        value={password}
        onChange={handleChange}
        type="password"
        placeholder="Mot de passe"
      />
      <button type="submit" disabled={isInvalid}>
        Se connecter
      </button>

      { error && <p>{error}</p> }
    </form>
  )
}

export default withRouter(withFirebase(SignInForm))
