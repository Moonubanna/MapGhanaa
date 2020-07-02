import {
    APP_LOGIN_REQUEST,
    APP_LOGIN_SUCESS,
    APP_LOGIN_FAIL,

    APP_CHECK_USER_DOC_SUCESS,
    APP_CHECK_USER_DOC_FAIL,
    APP_CHECK_USER_DOC_REQUEST
  
  } from '../constants'
  
  export function loginApiReq(data) {
    return { type: APP_LOGIN_REQUEST, payload: data }
  }
  
  export function loginApiSuccess(user) {
    return { type: APP_LOGIN_SUCESS, payload: user }
  }
  
  export function loginApiFailed(user) {
    return { type: APP_LOGIN_FAIL, payload: user }
  }

  export function checkDocumentApiReq(data) {
    return { type: APP_CHECK_USER_DOC_REQUEST, payload: data }
  }
  
  export function checkDocumentApiSuccess(user) {
    return { type: APP_CHECK_USER_DOC_SUCESS, payload: user }
  }
  
  export function checkDocumentApiFailed(user) {
    return { type: APP_CHECK_USER_DOC_FAIL, payload: user }
  }
  