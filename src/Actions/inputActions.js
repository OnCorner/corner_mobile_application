import { UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_PASSWORD } from '../Constants/ActionTypes'

export function updateUsername(eventValue) {
  return {
    type: UPDATE_USERNAME,
    username: eventValue
  }
}

export function updateEmail(eventValue) {
  console.log('LOOK HERE')
  console.log(eventValue);
  console.log('END OF LOOK')
  return {
    type: UPDATE_EMAIL,
    email: eventValue
  }
}

export function updateFirstName(eventValue) {
  return {
    type: UPDATE_FIRST_NAME,
    firstName: eventValue
  }
}

export function updateLastName(eventValue) {
  return {
    type: UPDATE_LAST_NAME,
    lastName: eventValue
  }
}

export function updatePassword(eventValue) {
  return {
    type: UPDATE_PASSWORD,
    password: eventValue
  }
}
