import { FETCH_API } from '../Constants/ActionTypes'

//fetchReducer
export function register(userInfo) {
  console.log(userInfo)

  var postRequest = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(userInfo),
  }

  fetch('http://localhost:1337/user/create/', postRequest)
  .then(result=>result.json())
  .then(user=>{
    console.log(user);
    console.log('SUCCESS')
  })

  return {
    type: FETCH_API
  }
}
