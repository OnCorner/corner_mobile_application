import { FETCH_API } from '../Constants/ActionTypes'
import { NavigationExperimental } from 'react-native'

const initialState = {

}

function fetchReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_API:
      return state

     default:
       return state
  }
}

export default fetchReducer
