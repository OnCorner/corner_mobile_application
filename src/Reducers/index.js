import { combineReducers } from 'redux'
import navReducer from './navReducer'
import fetchReducer from './fetchReducer'
import inputReducer from './inputReducer'
import imageReducer from './imageReducer'
import itemReducer from './itemReducer'

const rootReducer = combineReducers({
  navReducer,
  fetchReducer,
  inputReducer,
  imageReducer,
  itemReducer,
})

export default rootReducer
