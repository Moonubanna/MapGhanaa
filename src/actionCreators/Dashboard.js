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
  
  //get Cust Wallet Balance
  export function getCustWalletBalApiReq(data) {
    return { type: APP_GET_CUST_WALLET_BAL_REQUEST, payload: data }
  }
  
  export function getCustWalletBalApiSuccess(user) {
    return { type: APP_GET_CUST_WALLET_BAL_SUCESS, payload: user }
  }
  
  export function getCustWalletBalApiFailed(user) {
    return { type: APP_GET_CUST_WALLET_BAL_FAIL, payload: user }
  }

  //get Recent Activity
  export function getRecentActApiReq(data) {
    return { type: APP_GET_RECENT_ACTIVITY_REQUEST, payload: data }
  }
  
  export function getRecentActApiSuccess(user) {
    return { type: APP_GET_RECENT_ACTIVITY_SUCESS, payload: user }
  }
  
  export function getRecentActApiFailed(user) {
    return { type: APP_GET_RECENT_ACTIVITY_FAIL, payload: user }
  }

  //get Recent Price
  export function getLatestPriceApiReq(data) {
    return { type: APP_GET_LATEST_PRICE_REQUEST, payload: data }
  }
  
  export function getLatestPriceApiSuccess(user) {
    return { type: APP_GET_LATEST_PRICE_SUCESS, payload: user }
  }
  
  export function getLatestPriceApiFailed(user) {
    return { type: APP_GET_LATEST_PRICE_FAIL, payload: user }
  }

