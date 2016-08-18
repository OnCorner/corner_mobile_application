import { UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_PASSWORD } from '../Constants/ActionTypes'
import { NavigationExperimental } from 'react-native'

const initialState = {
  userInfo:{
  }
}


function inputReducer(state = initialState, action) {
  switch(action.type) {

    case UPDATE_USERNAME:
      return {
        ...state,
        username: action.username
      }

    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.email
      }

    case UPDATE_FIRST_NAME:
      return {
        ...state,
        firstName: action.firstName
      }

    case UPDATE_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName
      }

    case UPDATE_PASSWORD:
      return {
        ...state,
        password: action.password
      }

   default:
     return state

  }
}

export default inputReducer
