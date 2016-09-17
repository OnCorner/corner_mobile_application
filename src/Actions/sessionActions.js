import {
  SIGNUP,
  SIGNUP_REQUEST,
  SIGNUP_RECEIVE,
  LOGIN,
  SET_EMAIL,
  SET_PASSWORD,
  SET_USERNAME,
  SET_FIRSTNAME,
  SET_LASTNAME,
} from '../Constants/ActionTypes'
import Api from '../Modules/Api'

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    email
  }
}

export function setPassword(password) {
  return {
    type: SET_PASSWORD,
    password
  }
}

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    username
  }
}

export function setFirstName(firstName) {
  return {
    type: SET_FIRSTNAME,
    firstName
  }
}

export function setLastName(lastName) {
  return {
    type: SET_LASTNAME,
    lastName
  }
}

function requestSignUp(user) {
  return {
    type: SIGNUP_REQUEST,
    user
  }
}

function receiveSignUp(user, newUser) {
  return {
    type: SIGNUP_RECEIVE,
    user: newUser
  }
}

export function signUp(user) {
  return (dispatch) => {
    dispatch(requestSignUp(user))
    return Api.server.post('signup', user)
    .then((newUser) => {
      dispatch(receiveSignUp(user, newUser))
    })
  }
}
