import { FETCH_API } from '../Constants/ActionTypes'
import { STORE_IMAGE } from '../Constants/ActionTypes'
import Api from '../Modules/Api'

import Api from '../Modules/Api.js'

//fetchReducer
export function register(userInfo) {
  console.log(userInfo)

  Api.server.create('user', userInfo)
  .then((user) => {
    console.log(user);
    console.log('SUCCESS')
  });

  // var postRequest = {
  //   method: 'POST',
  //   mode: 'cors',
  //   body: JSON.stringify(userInfo),
  // }

  // fetch('http://localhost:1337/signup', postRequest)

  //
  // fetch('http://localhost:1337/user/create/', postRequest)

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

export function storeImage(image) {
  return {
    type: STORE_IMAGE,
    image: image,
  }
}
