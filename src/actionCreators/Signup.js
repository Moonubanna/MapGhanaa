import {
    APP_SIGNUP_REQUEST,
    APP_SIGNUP_SUCESS,
    APP_SIGNUP_FAIL,
  
  } from '../constants'
  
  export function signUPApiReq(data) {
    return { type: APP_SIGNUP_REQUEST, payload: data }
  }
  
  export function signUPApiSuccess(user) {
    return { type: APP_SIGNUP_SUCESS, payload: user }
  }
  
  export function signUPApiFailed(user) {
    return { type: APP_SIGNUP_FAIL, payload: user }
  }
  