import { connect } from 'react-redux'
import NavigationRoot from '../Components/NavRoot'
import { push, pop } from '../Actions/navActions'
import { updateUsername, updateEmail, updateFirstName, updateLastName, updatePassword,  } from '../Actions/inputActions'
import { register, storeImage } from '../Actions/trivialActions'

function mapStateToProps(state) {
  return {
    navigation: state.navReducer,
    userInfo: state.inputReducer,
    image: state.imageReducer
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
    //inputActions
    updateUsername: (eventValue) => updateUsername(eventValue),
    updateEmail: (eventValue) => updateEmail(eventValue),
    updateFirstName: (eventValue) => updateFirstName(eventValue),
    updateLastName: (eventValue) => updateLastName(eventValue),
    updatePassword: (eventValue) => updatePassword(eventValue),

    storeImage: (image) => storeImage(image),
  }
)(NavigationRoot)
