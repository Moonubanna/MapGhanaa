import {

    APP_SIGNUP_REQUEST,
    APP_SIGNUP_SUCESS,
    APP_SIGNUP_FAIL,
    
  } from '../constants'
  
  const initialState = {
    error: undefined,
    loading: false,
    data:undefined
  }
  
  export default (state = initialState, action) => {
    
    switch (action.type) {
      case APP_SIGNUP_REQUEST:
        return { ...state, error: undefined, loading: true }
  
      case APP_SIGNUP_FAIL:
        return { ...state, error: action.error, loading: false }
  
      case APP_SIGNUP_SUCESS:
        return {
          ...state,
          loading: false,
          data: { ...action.payload }
        }
  
      default: return state
    }
}