import { UPDATE_USERNAME, UPDATE_EMAIL, UPDATE_FIRST_NAME, UPDATE_LAST_NAME, UPDATE_PASSWORD } from '../Constants/ActionTypes'

import { ITEM_GROUP, ITEM_QUANTITY, ITEM_CONDITION, ITEM_PRICE, ITEM_ACCEPTING_OFFER, ITEM_LOCATION, ITEM_MEET_UP, ITEM_SHIPPING, ITEM_FREE_SHIPPING } from '../Constants/ActionTypes'

//inputReducer
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

//itemReducer
export function itemGroup(text) {
  return {
    type: ITEM_GROUP,
    group: text
  }
}

export function itemQuantity(value) {
  return {
    type: ITEM_QUANTITY,
    quantity: value
  }
}

export function itemCondition(text) {
  return {
    type: ITEM_CONDITION,
    condition: text
  }
}

export function itemPrice(value) {
  return {
    type: ITEM_PRICE,
    price: value
  }
}

export function itemAcceptingOffer(value) {
  return {
    type: ITEM_ACCEPTING_OFFER,
    acceptingOffer: value
  }
}

export function itemLocation(value) {
  return {
    type: ITEM_LOCATION,
    location: value
  }
}

export function itemMeetUp(value) {
  return {
    type: ITEM_MEET_UP,
    meetUp: value
  }
}

export function itemShipping(value) {
  return {
    type: ITEM_SHIPPING,
    shipping: value
  }
}

export function itemFreeShipping(value) {
  return {
    type: ITEM_FREE_SHIPPING,
    freeShipping: value
  }
}
