import React, { useReducer, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../firebase'
import * as ROUTES from '../../../constants/routes'

const SignUpForm = ({ firebase, history }) => {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
    }
  )

  const { username, email, passwordOne, passwordTwo } = userInput
  const [error, setError] = useState(undefined)

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    username === '' ||
    email === ''

  const handleSubmit = e => {
    firebase.auth.createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        history.push(ROUTES.HOME)
      })
      .catch(error => setError(error.message))
    e.preventDefault()
  }

  const handleChange = e => {
    const { name, value } = e.target
    setUserInput({[name]: value})
  }


  return (
    <form className="Form" onSubmit={handleSubmit}>
      <input
        name="username"
        value={username}
        onChange={handleChange}
        type="text"
        placeholder="Nom d'utilisateur"
      />
      <input
        name="email"
        value={email}
        onChange={handleChange}
        type="email"
        placeholder="Adresse email"
      />
      <input
        name="passwordOne"
        value={passwordOne}
        onChange={handleChange}
        type="password"
        placeholder="Mot de passe"
      />
      <input
        name="passwordTwo"
        value={passwordTwo}
        onChange={handleChange}
        type="password"
        placeholder="Confirmer le mot de passe"
      />
      <button
        type="submit"
        disabled={isInvalid}
      >Se connecter</button>
      { error && <p>{error}</p> }
    </form>
  )
}

export default withRouter(withFirebase(SignUpForm))
