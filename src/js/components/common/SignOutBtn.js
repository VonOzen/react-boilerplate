import React from 'react'
import { withFirebase } from '../firebase'
import { useDispatch } from 'react-redux'
import { setUserIsLogged } from '../../actions/userActions'

const SignOutBtn = ({ firebase }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    firebase.auth.signOut()
      .then(() => dispatch(setUserIsLogged(false)))
  }

  return (
    <button className="Btn SignOutBtn" onClick={handleClick}>
      Se déconnecter
    </button>
  )
}

export default withFirebase(SignOutBtn)
