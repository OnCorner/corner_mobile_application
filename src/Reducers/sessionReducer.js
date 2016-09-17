import {
  SET_EMAIL,
  SET_USERNAME,
  SET_PASSWORD,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SIGNUP_RECEIVE,
  SIGNUP_REQUEST,
} from '../Constants/ActionTypes'

export default function reducer(state={
  user: {
    id: 0,
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
  fetching: false,
  fetched: false,
  error: null,
}, action) {
  switch(action.type) {
    case SET_EMAIL:
      return {
        ...state,
        user: {...state.user, email: action.email}
      }

    case SET_USERNAME:
    console.log("inside the reducer", action.username);
      return {
        ...state,
        user: {...state.user, username: action.username}
      }

    case SET_PASSWORD:
      return {
        ...state,
        user: {...state.user, password: action.password}
      }

    case SET_FIRSTNAME:
      return {
        ...state,
        user: {...state.user, firstName: action.firstName}
      }

    case SET_LASTNAME:
      return {
        ...state,
        user: {...state.user, lastName: action.lastName}
      }

    case SIGNUP_REQUEST:
      return {
        ...state,
        user: action.user,
        fetching: true,
        fetched: false,
      }

    case SIGNUP_RECEIVE:
      return {
        ...state,
        user: action.newUser,
        fetching: false,
        fetched: true,
      }

     default:
       return state
  }
}
