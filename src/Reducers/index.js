import { combineReducers } from 'redux'
import navReducer from './navReducer'
import fetchReducer from './fetchReducer'
import inputReducer from './inputReducer'

const rootReducer = combineReducers({
  navReducer,
  fetchReducer,
  inputReducer
})

export default rootReducer
