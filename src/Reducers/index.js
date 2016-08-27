import { combineReducers } from 'redux'
import navReducer from './navReducer'
import fetchReducer from './fetchReducer'
import inputReducer from './inputReducer'
import imageReducer from './imageReducer'

const rootReducer = combineReducers({
  navReducer,
  fetchReducer,
  inputReducer,
  imageReducer,
})

export default rootReducer
