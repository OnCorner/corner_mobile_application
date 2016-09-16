import { PUSH_ROUTE, POP_ROUTE } from '../Constants/ActionTypes'
import { NavigationExperimental } from 'react-native'

import Login from '../Components/Login'

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const initialState = {
  index: 0,
  key: 'root',
  routes: [{
   key: 'login',
   title: 'Login',
   component: Login,
   unique: true,
   direction: 'horizontal',
  }]
}

function navigationState (state = initialState, action) {
  if(action.type == PUSH_ROUTE && action.route.unique==true)
  {
     if(state.routes.find(child => child.key === key))
     {
        return NavigationStateUtils.jumpTo(state, action.route.key)
     }
  }

  switch(action.type) {
    case PUSH_ROUTE:
      if (state.routes[state.index].key === (action.route && action.route.key)) return state
    return NavigationStateUtils.push(state, action.route)

    case POP_ROUTE:
      if (state.index === 0 || state.routes.length === 1) return state
      return NavigationStateUtils.pop(state)

   default:
     return state
  }
}

export default navigationState
