import { ITEM_GROUP, ITEM_QUANTITY, ITEM_CONDITION, ITEM_PRICE, ITEM_ACCEPTING_OFFER, ITEM_LOCATION, ITEM_MEET_UP, ITEM_SHIPPING, ITEM_FREE_SHIPPING } from '../Constants/ActionTypes'
import { NavigationExperimental } from 'react-native'

const initialState = {
  acceptingOffer: false,
  meetUp: false,
  shipping: false,
  freeShipping: false,
}

function itemReducer(state = initialState, action) {
  switch(action.type) {
    case ITEM_GROUP:
      return {
        ...state,
        group: action.group
      }

    case ITEM_QUANTITY:
      return {
        ...state,
        quantity: action.quantity
      }

    case ITEM_CONDITION:
      return {
        ...state,
        condition: action.condition
      }

    case ITEM_PRICE:
      return {
        ...state,
        price: action.price
      }

    case ITEM_ACCEPTING_OFFER:
      return {
        ...state,
        acceptingOffer: action.acceptingOffer
      }

    case ITEM_LOCATION:
      return {
        ...state,
        location: action.location
      }

    case ITEM_MEET_UP:
      return {
        ...state,
        meetUp: action.meetUp
      }

    case ITEM_SHIPPING:
      return {
        ...state,
        shipping: action.shipping
      }

    case ITEM_FREE_SHIPPING:
      return {
        ...state,
        freeShipping: action.freeShipping
      }

     default:
       return state
  }
}

export default itemReducer
