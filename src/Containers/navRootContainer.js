import { connect } from 'react-redux'
import NavigationRoot from '../Components/NavRoot'
import { push, pop } from '../Actions/navActions'
import { updateUsername, updateEmail, updateFirstName, updateLastName, updatePassword,  } from '../Actions/inputActions'
import { itemGroup, itemQuantity, itemCondition, itemPrice, itemAcceptingOffer, itemLocation, itemMeetUp, itemShipping, itemFreeShipping, } from '../Actions/inputActions'
import { register, storeImage, createItem, } from '../Actions/trivialActions'
import {
  signUp,
  setUsername,
  setPassword,
  setEmail,
  setFirstName,
  setLastName,
} from '../Actions/sessionActions'


function mapStateToProps(state) {
  console.log("instide state to props", state.sessionReducer.user);
  return {
    navigation: state.navReducer,
    ...state.sessionReducer,
    image: state.imageReducer,
    itemInfo: state.itemReducer,
  }
}

export default connect(
  mapStateToProps,
  {
    //navActions.js
    pushRoute: (route) => push(route),
    popRoute: () => pop(),
    //trivialActions.js
    registerUser: (userInfo) => register(userInfo),
    storeImage: (image) => storeImage(image),
    createItem: (itemInfo) => createItem(itemInfo),
    //inputActions.js - inputReducer
    updateUsername: (eventValue) => updateUsername(eventValue),
    updateEmail: (eventValue) => updateEmail(eventValue),
    updateFirstName: (eventValue) => updateFirstName(eventValue),
    updateLastName: (eventValue) => updateLastName(eventValue),
    updatePassword: (eventValue) => updatePassword(eventValue),
    //inputActions.js - itemReducer
    itemGroup: (text) => itemGroup(text),
    itemQuantity: (value) => itemQuantity(value),
    itemCondition: (text) => itemCondition(text),
    itemPrice: (value) => itemPrice(value),
    itemAcceptingOffer: (value) => itemAcceptingOffer(value),
    itemLocation: (value) => itemLocation(value),
    itemMeetUp: (value) => itemMeetUp(value),
    itemShipping: (value) => itemShipping(value),
    itemFreeShipping: (value) => itemFreeShipping(value),
    //sessionActions.js - itemReducer
    signUp: (user) => signUp(user),
    setUsername: (text) => setUsername(text),
    setPassword: (text) => setPassword(text),
    setEmail: (text) => setEmail(text),
    setFirstName: (text) => setFirstName(text),
    setLastName: (text) => setLastName(text),
  }
)(NavigationRoot)
