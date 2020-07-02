
import {

    APP_GET_CUST_WALLET_BAL_REQUEST,
    APP_GET_CUST_WALLET_BAL_SUCESS,
    APP_GET_CUST_WALLET_BAL_FAIL,

    APP_GET_RECENT_ACTIVITY_REQUEST,
    APP_GET_RECENT_ACTIVITY_SUCESS,
    APP_GET_RECENT_ACTIVITY_FAIL,

    APP_GET_LATEST_PRICE_REQUEST,
    APP_GET_LATEST_PRICE_SUCESS,
    APP_GET_LATEST_PRICE_FAIL
  
  } from '../constants'
  
  const initialState = {
    error: undefined,
    loading: false,
    data: undefined
  }
  
  export default (state = initialState, action) => {
  
    switch (action.type) {
      case APP_GET_CUST_WALLET_BAL_REQUEST:
        return { ...state, error: undefined, loading: true }
  
      case APP_GET_CUST_WALLET_BAL_FAIL:
        return { ...state, error: action.error, loading: false }
  
      case APP_GET_CUST_WALLET_BAL_SUCESS:
        return {
          ...state,
          loading: false,
          data: { ...action.payload }
        }
  
      case APP_GET_RECENT_ACTIVITY_REQUEST:
        return { ...state, error: undefined, loading: true }
  
      case APP_GET_RECENT_ACTIVITY_FAIL:
        return { ...state, error: action.error, loading: false }
  
      case APP_GET_RECENT_ACTIVITY_SUCESS:
        return {
          ...state,
          loading: false,
          data: { ...action.payload }
        }

        case APP_GET_LATEST_PRICE_REQUEST:
        return { ...state, error: undefined, loading: true }
  
      case APP_GET_LATEST_PRICE_FAIL:
        return { ...state, error: action.error, loading: false }
  
      case APP_GET_LATEST_PRICE_SUCESS:
        return {
          ...state,
          loading: false,
          data: { ...action.payload }
        }
  
      default: return state
    }
  }