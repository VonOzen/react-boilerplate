import {
  SET_USER_IS_LOGGED,
} from '../actions/userActions'

const initialState = {
  isLogged: false,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_IS_LOGGED:
      return {
        isLogged: action.payload,
        ...state,
      }
    default:
      return state
  }
}

export default userReducer
