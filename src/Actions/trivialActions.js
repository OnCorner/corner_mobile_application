import { FETCH_API } from '../Constants/ActionTypes'

import Api from '../Modules/Api.js'

//fetchReducer
export function register(userInfo) {
  console.log(userInfo)

  // var postRequest = {
  //   method: 'POST',
  //   mode: 'cors',
  //   body: JSON.stringify(userInfo),
  // }

  // fetch('http://localhost:1337/signup', postRequest)
  // .then(result=>result.json())
  // .then(user=>{
  //   console.log(user);
  //   console.log('SUCCESS')
  // })

  Api.server.find('user')
  .then(res => {
    console.log(res)
    console.log('TEST')
  })

  return {
    type: FETCH_API
  }
}
