import { STORE_IMAGE } from '../Constants/ActionTypes'

const initialState = {
  image: ''
}

function imageReducer(state = initialState, action) {
  switch(action.type) {
    case STORE_IMAGE:
      return {
        image: action.image
      }

     default:
       return state
  }
}

export default imageReducer
